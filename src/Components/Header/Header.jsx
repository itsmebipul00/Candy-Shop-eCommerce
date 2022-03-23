import "./Header.css";
import { useLocation } from "react-router-dom";
import { LogoProvider } from "../../assets/Icons/Icons";
import { styles } from "../../utils/iconStyles";
import {Link, NavLink} from 'react-router-dom'

import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";

import { GiCandyCanes } from "react-icons/gi";
import { Filters } from "../Filters/Filters";

const logoStyles = {
  ...styles,
  size: "2rem",
  color: "red",
};

const searchIconStyle = {
  ...styles,
  className: styles.className.concat(" search-icon"),
};

const cartIconStyle = {
  ...styles,
  className: styles.className.concat(" cart-icon"),
};

const wishlistIconStyle = {
  ...styles,
  className: styles.className.concat(" wishlist-icon"),
};

export const Header = () => {

  const location = useLocation();
  const isProductListingPage = location.pathname === "/products" ? true : false;

  return (
    <div className="candyshop-header d-grid">
      <div className="d-flex p-relative">

 
        <Link to='/'>
          <LogoProvider>
            <GiCandyCanes value={logoStyles} />
          </LogoProvider>
        </Link>


        <h1 className="fs-600 letter-spacing-5">CandyShop</h1>

        <div className="header-ctas margin-l-auto d-flex">

          <NavLink to='/profile'>
            <LogoProvider>
              <AiOutlineHeart value={wishlistIconStyle} />
            </LogoProvider>
          </NavLink>


          <NavLink to='/cart'>
            <LogoProvider>
              <AiOutlineShoppingCart value={cartIconStyle} />
            </LogoProvider>
          </NavLink>


          {isProductListingPage && <Filters />}


        </div>
      </div>

      <div className="search-candies p-relative">
        <label className="sr-only" htmlFor="input-search" />

        <input
          id="input-search"
          className="input-search"
          placeholder="Search for candies..."
        />

        <LogoProvider>
          <AiOutlineSearch value={searchIconStyle} />
        </LogoProvider>
      </div>
    </div>
  );
};


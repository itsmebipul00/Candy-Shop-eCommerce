// Components: Search, Pagination
import "./ProductListScreen.css";
import { useEffect, useReducer, useContext } from "react";
import { productListReducer } from "../../reducers/productReducers";
import { getProducts } from "../../actions/productActions";
import {Loader} from '../../Components/Loader/Loader.jsx'
import {Error} from '../../Components/Error/Error.jsx'
import {ProductCard} from '../../Components/ProductCard/ProductCard.jsx'
import { WishListContext } from "../../context";

const ProductListScreen = () => {

  const [{ products, loading, error }, dispatch] = useReducer(
    productListReducer,
    {
      products: [],
    }
  );

  const {wishedProductsAction, wishList} = useContext(WishListContext)

  // getProducts returns IIFE which dispatches actions to reducers
  // reducers returns a final object of products array, loading state and/or error which is destructured from state that useReducer returns and used here
  
  useEffect(() => {
    getProducts()(dispatch);
  }, []);


  const toggleWish = (id) => {

    let wishedProducts

    wishList.length > 0 ? wishedProducts= wishList.map(p => p.id === id ? {...p, wishList: !p.wishList}: p) : wishedProducts = products.map(p => p.id === id ? {...p, wishList: !p.wishList}: p)

    wishedProductsAction(wishedProducts)
  }

  
  const addtocartHandler = (e, id) => {
    e.preventDefault()
  }

  return (
    <div className="product-grid products-section-container">
      {loading && <Loader />}
      {error && <Error/>}

      {wishList && wishList.length > 0 ? wishList.map(p => (
         <ProductCard 
         key={p._id}
         id={p.id}
         addtocartHandler={addtocartHandler}
         image={p.image}
         title={p.title}
         price= {p.price} 
         rating= {p.rating}
         toggleWish ={toggleWish}
         wishList = {p.wishList}
       />
      )) :
        products && products.length && products.map(p => (
        <ProductCard 
          key={p._id}
          id={p.id}
          addtocartHandler={addtocartHandler}
          image={p.image}
          title={p.title}
          price= {p.price} 
          rating= {p.rating}
          toggleWish ={toggleWish}
          wishList = {p.wishList}
        />
      ))}
    </div>

  );
};

export default ProductListScreen;



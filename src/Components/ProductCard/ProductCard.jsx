import { Link } from "react-router-dom";
import {Rating} from '../../Components/Rating/Rating.jsx'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'



export const ProductCard = ({id, image, addtocartHandler, title, price, rating, toggleWish, wishList}) => {
  return (
    <div>
    <Link to={`/product/${id}`} className="card d-grid grid-stacked" >
      <img src={image} alt="card__img" className="card__img" />
      <button className="btn btn-addtocart uppercase" onClick={(e) => addtocartHandler(e, id)}>
          Add to cart
        </button>
    </Link>
    <div className="card__content d-flex">
      <div className=" f-col">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">
        Price: 
          <span className="line-through text-dark-70 fw-200 original-price">
          9999
          </span>
          $ {price}
        </p>
        <Rating value={rating}/>
      </div>
      <button onClick={() => toggleWish(id)} className="btn-wishlist">
        {wishList ? <AiFillHeart/> : <AiOutlineHeart/>}
      </button>
    </div>
  </div>
  )
}


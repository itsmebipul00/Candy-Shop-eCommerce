// Componets: Wishlist, UserInfo, OrderHisttory
import "./ProfileScreen.css";
import {  useContext } from "react";
import { WishListContext } from "../../context";


const ProfileScreen = () => {


  const {wishedProductsAction, wishList} = useContext(WishListContext)

  console.log(wishedProductsAction, wishList)

  return <div>ProfileScreen</div>;
};

export default ProfileScreen;

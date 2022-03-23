// Componets: Wishlist, UserInfo, OrderHisttory
import "./ProfileScreen.css";
import {  useContext } from "react";
import { ProductsContext } from "../../context";


const ProfileScreen = () => {


  const {wishList} = useContext(ProductsContext)

  console.log(wishList)

  return <div>ProfileScreen</div>;
};

export default ProfileScreen;

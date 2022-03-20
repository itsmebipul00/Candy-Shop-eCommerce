import axios from "axios";
import { useReducer } from "react";
import { WishListContext } from "../context";
import { wishListReducer } from "../reducers/productReducers";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data.products,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "PRODUCT_LIST_FAIL",
      payload: error.response,
    });
  }
};

export const WishListProvider = (props) => {
  const intialState = {
    wishList: [],
  };

  const [{ wishList }, dispatch] = useReducer(wishListReducer, intialState);

  const wishedProductsAction = (products) => {
    dispatch({
      type: "WISHED_PRODUCTS",
      payload: products,
    });
  };

  return (
    <WishListContext.Provider
      value={{
        wishedProductsAction,
        wishList,
      }}
    >
      {props.children}
    </WishListContext.Provider>
  );
};

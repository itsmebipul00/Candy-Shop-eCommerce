import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen/PlaceOrderScreen";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import ProductListScreen from "./Screens/ProductListScreen/ProductListScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import { WishListProvider } from "./actions/productActions";

import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <WishListProvider>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/placeOrder" element={<PlaceOrderScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/products" element={<ProductListScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </main>
      </WishListProvider>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>

  );
}

export default App;

import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import SingleProduct from "./pages/singleproduct";
import Products from "./pages/products";
import Dashboard from "./pages/dashboard";
import Checkout from "./pages/checkout";
import Pagenotfound from "./pages/pagenotfound";
import MyOrders from "./pages/myOrders";
import Dashproducts from "./pages/dashproducts";
import Dashorders from "./pages/dashorders";
import Dashusers from "./pages/dashusers";
import Sucesspage from "./pages/sucesspage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/dashproducts" element={<Dashproducts />} />
        <Route path="/dashorders" element={<Dashorders />} />
        <Route path="/dashusers" element={<Dashusers/>} />
        <Route path="/success" element={<Sucesspage/>} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

    </div>
  );
}

export default App;

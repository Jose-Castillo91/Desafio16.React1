import Custombar from "./components/Custombar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import CartProvider from "./assets/context/CartContext";
import PizzaProvider from "./assets/context/PizzaContext";

function App() {
  return (
    <>
      <div className="AppContainer">
        <CartProvider>
          <PizzaProvider>
          <Custombar />
          {/* <Profile /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        </PizzaProvider>
        </CartProvider>
      </div>
    </>
  );
}

export default App;

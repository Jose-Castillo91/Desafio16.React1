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
import UserProvider from "./assets/context/UserContext";
import RedirectIfAuth from "./components/RedirectIfAuth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <PizzaProvider>
          <Custombar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RedirectIfAuth>
                  <Register />
                </RedirectIfAuth>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectIfAuth>
                  <Login />
                </RedirectIfAuth>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PizzaProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;

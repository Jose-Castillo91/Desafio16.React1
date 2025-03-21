import Custombar from "./components/Custombar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Cart from "./components/Cart";
// import Register from "./components/Register";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="AppContainer">
        <Custombar />
        <Home />
        {/* <Register /> */}
        {/* <Login /> */}
        {/*  <Cart/> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

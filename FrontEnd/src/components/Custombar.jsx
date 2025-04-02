import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../assets/context/CartContext";
import Cart from "../pages/Cart";

function Custombar() {
  const token = false;
  const {cart} = useContext(CartContext);
  const precioTotal = cart.reduce((acc, item) => acc + item.price * item.count, 0)
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Pizzeria Mamma Mia!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div
                className={token === false ? "ocultarLinksNavegacion" : null}
              >
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
              </div>
              <div
                className={token === false ? "ocultarLinksNavegacion" : null}
              >
                <Nav.Link as={Link} to={"/profile"}>
                  Profile
                </Nav.Link>
              </div>

              <div
                className={token === false ? "ocultarLinksNavegacion" : null}
              >
                <Nav.Link>Logout</Nav.Link>
              </div>

              <div className={token === true ? "ocultarLinksNavegacion" : null}>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </div>

              <div className={token === true ? "ocultarLinksNavegacion" : null}>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </div>
            </Nav>
            <div className="totalNavbar">
              <Nav.Link as={Link} to={"/cart"}>
                🛒 Total: ${precioTotal}
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Custombar;

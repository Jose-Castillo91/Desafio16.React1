import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../assets/context/CartContext";
import { UserContext } from "../assets/context/UserContext";

function Custombar() {
  const { cart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  const precioTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>

            {token && (
              <>
                <Nav.Link as={Link} to={"/profile"}>
                  Profile
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            )}

            {!token && (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="totalNavbar">
            <Nav.Link as={Link} to={"/cart"}>
              🛒 Total: ${precioTotal}
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Custombar;


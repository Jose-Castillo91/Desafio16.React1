import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Custombar() {
  const numero = 25000;
  const total = numero.toLocaleString();
  const token = false;
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div
                className={token === false ? "ocultarLinksNavegacion" : null}
              >
                <Nav.Link>Home</Nav.Link>
              </div>
              <div
                className={token === false ? "ocultarLinksNavegacion" : null}
              >
                <Nav.Link>Profile</Nav.Link>
              </div>

              <div
                className={token === false ? "ocultarLinksNavegacion" : null}
              >
                <Nav.Link>Logout</Nav.Link>
              </div>

              <div className={token === true ? "ocultarLinksNavegacion" : null}>
                <Nav.Link>Login</Nav.Link>
              </div>

              <div className={token === true ? "ocultarLinksNavegacion" : null}>
                <Nav.Link>Register</Nav.Link>
              </div>
            </Nav>
            <div className="totalNavbar">
              <Nav.Link>🛒 Total: ${total}</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Custombar;


import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <div className="containerFooterPrincipal">
        <Navbar expand="xxl" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#" className="mx-auto">
              © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Footer;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardPizza({ name, price, ingredientes, img }) {
  return (
    <div className="containerPrincipalCard">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={img} />

        <Card.Body>
          <div className="containerSegundarioCard">
            <Card.Title>{name}</Card.Title>
            <div>
              <Card.Text>
                Ingredientes: <br /> {ingredientes}
                <br />
                <div className="precioCardPizza"> Precio: {price}</div>
              </Card.Text>
            </div>
            <div className="contenedorBotonesCard">
              <Button className="BotonesBootstrapCards" variant="primary">
                Ver Más👀
              </Button>
              <Button variant="primary">Añadir 🛒</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;

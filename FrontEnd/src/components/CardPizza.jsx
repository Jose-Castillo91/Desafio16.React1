import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardPizza({ info }) {
  return (
    <div className="containerCardsHome">
      {info.map((pizza) => (
        <Card key={pizza.id} style={{ width: "30rem", margin: "1rem" }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <div className="containerSegundarioCard">
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                Ingredientes: <br />
                {pizza.ingredients.join(", ")}
              </Card.Text>
              <Card.Text className="precioCardPizza">
                Precio: ${pizza.price}
              </Card.Text>
              <div className="contenedorBotonesCard">
                <Button className="BotonesBootstrapCards" variant="primary">
                  Ver Más 👀
                </Button>
                <Button variant="primary">Añadir 🛒</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPizza;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { pizzas } from "../assets/pizzas";
import { useState } from "react";

function CardPizza() {
  const [datos] = useState(pizzas);

  return (
    <div className="containerCardsHome">
      {datos.map((pizza) => (
        <Card key={pizza.id} style={{ width: "30rem" }}>
          <Card.Img variant="top" src={pizza.img} />

          <Card.Body>
            <div className="containerSegundarioCard">
              <Card.Title>{pizza.name}</Card.Title>
              <div>
                <Card.Text>
                  Ingredientes: <br /> {pizza.ingredients.join(", ")}
                  <br />
                  <div className="precioCardPizza"> Precio: ${pizza.price}</div>
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
      ))}
    </div>
  );
}

export default CardPizza;

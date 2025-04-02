import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../assets/context/CartContext";
import { pizzas } from "../assets/pizzas";

function CardPizza({ info }) {
  const { cart, setCart} = useContext(CartContext)

  const añadirAlCarrito = (producto) => {
    const productoExistente = cart.find((item) => item.id === producto.id);
  
    if (productoExistente) {
      const nuevoCarrito = cart.map((item) =>
        item.id === producto.id ? { ...item, count: item.count + 1 } : item
      );
      setCart(nuevoCarrito);
    } else {
      setCart([...cart, { ...producto, count: 1 }]);
    }
  };
  return (
    <div className="containerCardsHome">
      {pizzas.map((pizza) => (
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
                <Button onClick={() => añadirAlCarrito(pizza)} variant="primary">Añadir 🛒</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPizza;

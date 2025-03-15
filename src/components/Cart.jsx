import { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const incrementaCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const disminuyeCantidad = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 } // Disminuye la cantidad en 1
            : item
        )
        .filter((item) => item.count > 0) // Elimina los que queden en 0
    );
  };
  

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="containerPadreCart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="seccionCarrito">
          {cart.map((item) => (
            <div key={item.id} className="subSeccionCarrito">
              <img
                className="imagenPizzas-cart"
                src={item.img}
                alt={item.name}
                width={200}
              />
              <div className="nombre-cantidad-boton-cart">
                <p className="parrafo-nombre-precio-cart">
                  {item.name} ${item.price}
                </p>
                <p>Cantidad: {item.count}</p>
                <div className="botones-cart">
                  <button className="botonRestaCantidadCart" onClick={() => disminuyeCantidad(item.id)}>-</button>
                  <button
                    className="botonSumaCantidadCart"
                    onClick={() => incrementaCantidad(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button>Pagar</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../assets/context/PizzaContext";

function Pizza() {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);

  const pizza = pizzas.find(p => p.id === id);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <p>${pizza.price}</p>
      <p>{pizza.ingredients.join(" , ")}</p>
      <img src={pizza.img} alt={pizza.name} width={500} />
      <p>{pizza.desc}</p>
    </div>
  );
}

export default Pizza;

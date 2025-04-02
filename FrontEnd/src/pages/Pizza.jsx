import { useContext } from "react";

function Pizza() {
  const { pizzas } = useContext(PizzaContext);

  

  

if (!pizzas) return <p>Cargando pizza...</p>

  return (
    <div>
        <h1>{pizzas.name}</h1>
        <p>{pizzas.price}</p>
        <p>{pizzas.ingredients.join(" , ")}</p>
        <img src={pizzas.img} alt={pizzas.name} width={500}/>
        <p>{pizzas.desc}</p>
    </div>
  );
}

export default Pizza;

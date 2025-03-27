import React, { useEffect, useState } from "react";

function Pizza() {


  const [pizza, setPizza] = useState();

    useEffect(() => {
          consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

if (!pizza) return <p>Cargando pizza...</p>

  return (
    <div>
        <h1>{pizza.name}</h1>
        <p>{pizza.price}</p>
        <p>{pizza.ingredients.join(" , ")}</p>
        <img src={pizza.img} alt={pizza.name} width={500}/>
        <p>{pizza.desc}</p>
    </div>
  );
}

export default Pizza;

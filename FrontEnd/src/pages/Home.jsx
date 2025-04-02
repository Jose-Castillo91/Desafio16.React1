import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PizzaContext } from "../assets/context/PizzaContext";

function Home() {
  const { pizzas, loading } = useContext(PizzaContext);

 
  if (loading) return <p>Cargando pizzas...</p>;
  
 

  return (
    <div>
      <Header />
      <div className="centradorHome">
        <CardPizza pizzas={pizzas} />
      </div>
    </div>
  );
}

export default Home;

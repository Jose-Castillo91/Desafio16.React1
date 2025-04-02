
import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas"); 
        const data = await res.json();
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;

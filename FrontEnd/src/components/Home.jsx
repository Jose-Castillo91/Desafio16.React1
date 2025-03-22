import Header from "./Header";
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";

function Home() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setInfo(data);
  };

  return (
    <div>
      <Header />
      <div className="centradorHome">
        <CardPizza />
      </div>
    </div>
  );
}

export default Home;

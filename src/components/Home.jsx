import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {
  return (
    <div>
      <Header />
      <div className="centradorHome">
        <CardPizza/>
      </div>
    </div>
  );
}

export default Home;

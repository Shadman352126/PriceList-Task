import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import Nav from "./Components/Nav/Nav";
import PriceOptions from "./Components/PriceOptions/PriceOptions";

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <div className="container mx-auto">
        <PriceOptions></PriceOptions>
      </div>
      <LineChart></LineChart>
    </div>
  );
}

export default App;

import "./App.css";
import Country from "./Country";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button Click");
  }
  const handleClic2 = () => {
    alert("handle Click 2");
  };
  const handle = function helal() {
    alert("Helalur Rahman");
  };
  const addToFive = (num) => {
    alert(num + 6);
  };
  return (
    <>
      <h1>React Core Concepet</h1>
      <Users></Users>
      <Friends></Friends>
      <Team></Team>

      <Country></Country>
      <button onClick={handleClick}>Clcik Me</button>
      <button onClick={handleClic2}>Click 2</button>
      <button onClick={handle}>click 3</button>
      <button
        onClick={() => {
          alert("Click 5");
        }}>
        Click5
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;

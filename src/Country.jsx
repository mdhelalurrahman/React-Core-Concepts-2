import React, {useState} from "react";

const Country = () => {
  const [count, setCount] = useState(0);
  const handle = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{border: "2px solid yellow"}}>
      <h3>Counter: {count} </h3>
      <button onClick={handle}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Country;

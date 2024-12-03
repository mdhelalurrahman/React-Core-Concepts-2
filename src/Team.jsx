import React, {useState} from "react";

const Team = () => {
  const [count, setCount] = useState(11);
  const TeamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  const teamCount = () => {
    const neCount = count + 1;
    setCount(neCount);
  };
  const reduce = () => {
    setCount(count - 1);
  };
  return (
    <div style={TeamStyle}>
      <h3>Players: {count}</h3>
      <button onClick={teamCount}>AddCount</button>
      <button onClick={reduce}>Reduce-Player</button>
    </div>
  );
};

export default Team;

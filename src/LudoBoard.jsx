import { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0
  });
let [arr, SetArr] = useState(["no moves"]);


  const updateBlue = () => {
    // setMoves((prevMoves) => ({
    //   ...prevMoves,
    //   blue: prevMoves.blue + 1
    // }));

  
  SetArr((prevArr)=> {return[...prevArr, "blue moves"]});
  console.log(arr);
  };

  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>

        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() =>
            setMoves((prev) => ({ ...prev, yellow: prev.yellow + 1 }))
          }
        >
          +1
        </button>

        <p>Green moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() =>
            setMoves((prev) => ({ ...prev, green: prev.green + 1 }))
          }
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() =>
            setMoves((prev) => ({ ...prev, red: prev.red + 1 }))
          }
        >
          +1
        </button>
      </div>
    </div>
  );
}

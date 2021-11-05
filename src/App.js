import React  from "react";
import { useState, useEffect } from "react";
import XandO from "./XandO"



const clearType = ["", "", "", "", "", "", "", "", "", ""];


const App = () => {

  const [type, setType] = useState(clearType)
  const [typeChanged, setTypeChanged] = useState(false)
  const [gameWinnerIs, setGameWinnerIs] = useState("")
  const [drawCount, setDrawCount] = useState(0)






  const onTypeClicked = (index) => {
    let strings = Array.from(type);
    if (strings[index])
        return;
    strings[index] = typeChanged ? "X" : "0";
    setTypeChanged(!typeChanged)
    setType(strings)
}


const clearGame = () => {
  setType(clearType)
  setGameWinnerIs("")
  setDrawCount(0)

}


useEffect(() => {
  let winner = gameWinner();
  if (winner) {
      clearGame();
      if(winner==="X"){
        setGameWinnerIs((`Player "X" won the Game !`))
        setDrawCount(0)
      }
      else if(winner==="0"){
        setGameWinnerIs((`Player "0" won the Game !`))
        setDrawCount(0)
      }
  }
  else{
    if(drawCount===9){
      setGameWinnerIs((`Ooops ! The Game is Tied`))
      setDrawCount(0)
    }
  }

}, [type])

const gameWinner = () => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (type[a] && type[a] === type[b] && type[a] === type[c]) {
          return type[a];
      }
  }
  setDrawCount(drawCount+1)
  return null;
}


  return(
    <div className="app-styling">

      <div className="heading-styling">TIC-TAC-TOE GAME</div>


      <div className="row-styling">
        <XandO spanClass="span-styling" state={type[0]} onClick={() => onTypeClicked(0)}/>
        <XandO spanClass="span-styling" state={type[1]} onClick={() => onTypeClicked(1)}/>
        <XandO spanClass="span-styling" state={type[2]} onClick={() => onTypeClicked(2)}/>
      </div>


      <div className="row-styling">
        <XandO spanClass="span-styling" state={type[3]} onClick={() => onTypeClicked(3)}/>
        <XandO spanClass="span-styling" state={type[4]} onClick={() => onTypeClicked(4)}/>
        <XandO spanClass="span-styling" state={type[5]} onClick={() => onTypeClicked(5)}/>
      </div>


      <div className="row-styling">
        <XandO spanClass="span-styling" state={type[6]} onClick={() => onTypeClicked(6)}/>
        <XandO spanClass="span-styling" state={type[7]} onClick={() => onTypeClicked(7)}/>
        <XandO spanClass="span-styling" state={type[8]} onClick={() => onTypeClicked(8)}/>
      </div>



      <button className="button" onClick={clearGame}>New Game</button>

      <div className="winner-styling">
        {gameWinnerIs}
      </div>


    </div>
  )
}

export default App;
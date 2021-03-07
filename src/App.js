import React,{useState} from "react";
import Board from './components/Board';
import './components/styles/root.scss';
import { calculateWinner } from "./helpers";

const App =() =>{

  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXNext,setIsXNext]=useState(false);

  const winner=calculateWinner(board);

  const handleSquareClick= position =>{

      if(board[position])
      return;

      setBoard(prev => {
          return prev.map((square,pos)=>{
              if(pos===position)
              {
                  return isXNext?'X':'0';
              }
              return square;
          });
      });
      setIsXNext(prev=>!prev);
  };
  return(
    <div className="app">
      <h1>TIC TAC TOE !</h1>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );

};

export default App;
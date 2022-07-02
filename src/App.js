import './App.css';
import SquareComponent from './SquareComponent';
import { useState, useEffect } from 'react';

const initialState = ["", "" ,"" , "", "", "", "", "", "" ];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [player, setPlayer] = useState("X");
  const onClick = (index) => {
    let arr = Array.from(gameState);
    if (arr[index] !== ""){
      return;
    }
    arr[index] = player === "X" ? "X" : "Y";
    setGameState(arr);
    setPlayer(player === "X" ? "Y" : "X");
  }

useEffect(() => {
  const winner = calculateWinner(gameState);
  if (winner !== null) {
    alert(`${winner} has won the game!`);
    setGameState(initialState);
  }
}, gameState)
  

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}



  return (
    <div className="App">
      <p className="App-header">React Tic Tac Toe</p>
      <div className='row center'>
        <SquareComponent className="border-right" state={gameState[0]} onClick={() => onClick(0)} />        
        <SquareComponent className="border-right" state={gameState[1]} onClick={() => onClick(1)} />        
        <SquareComponent className="border-bottom" state={gameState[2]} onClick={() => onClick(2)} />        
      </div>
      <div className='row center'>
        <SquareComponent className="border-right" state={gameState[3]} onClick={() => onClick(3)} />
        <SquareComponent className="border-right" state={gameState[4]} onClick={() => onClick(4)} />
        <SquareComponent className="border-bottom" state={gameState[5]} onClick={() => onClick(5)} />
      </div>
      <div className='row center'>
        <SquareComponent className="border-right-only" state={gameState[6]} onClick={() => onClick(6)} />
        <SquareComponent className="border-right-only" state={gameState[7]} onClick={() => onClick(7)} />
        <SquareComponent state={gameState[8]} onClick={() => onClick(8)} />
      </div>
      <button className='clear-button' onClick={() => setGameState(initialState)}>Clear</button>
      <span className='footer'>Developed by Abhijith Sunder</span>  
    </div>
  );
}

export default App;

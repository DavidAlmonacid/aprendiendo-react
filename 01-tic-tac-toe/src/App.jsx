import { useState } from "react";
import confetti from "canvas-confetti";

import { TURNS } from "@/constants";
import { checkWinner, resetGameStorage, saveGameToStorage } from "@/logic";
import { Board, GameResultModal, Square } from "@components";

const App = () => {
  const [board, setBoard] = useState(() => {
    const boardData = window.localStorage.getItem("board");
    return boardData ? JSON.parse(boardData) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnData = window.localStorage.getItem("turn");
    return turnData ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }

    // Update board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Save game
    saveGameToStorage({ board: newBoard, turn: newTurn });

    // Checking winner and draw
    const newWinner = checkWinner(newBoard);
    setTimeout(() => {
      if (newWinner) {
        setWinner(newWinner);
        confetti();
      } else if (!newBoard.includes(null)) {
        setWinner(false);
      }
    }, 200);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <GameResultModal resetGame={resetGame} winner={winner} />
    </main>
  );
};

export default App;

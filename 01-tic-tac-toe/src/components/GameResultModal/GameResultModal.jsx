import { Square } from "@components";

const GameResultModal = ({ resetGame, winner }) => {
  if (winner === null) {
    return null;
  }

  const resultText = winner ? "Winner!" : "Draw!";

  return (
    <section className="winner">
      <div className="text">
        <header>
          <h2>{resultText}</h2>
        </header>

        {winner && (
          <div className="win">
            <Square>{winner}</Square>
          </div>
        )}

        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  );
};

export default GameResultModal;

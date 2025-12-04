import { useState } from "react";
import { Link } from "react-router-dom";

const ScoreCountComponent = () => {
  const [team1score, setTeam1Score] = useState(0);
  const [team2score, setTeam2Score] = useState(0);

  function resetScores() {
    setTeam1Score(0);
    setTeam2Score(0);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      {/* Back button */}
      <div className="self-start mb-6">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          ← Back
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">Score Board</h1>

      <div className="flex space-x-12 mb-8">
        {/* Team 1 */}
        <div
          onClick={() => setTeam1Score(team1score + 1)}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-40 cursor-pointer hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Team 1</h2>
          <p className="text-5xl font-bold text-gray-900">{team1score}</p>
        </div>

        {/* Team 2 */}
        <div
          onClick={() => setTeam2Score(team2score + 1)}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-40 cursor-pointer hover:bg-green-50 transition"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">Team 2</h2>
          <p className="text-5xl font-bold text-gray-900">{team2score}</p>
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={resetScores}
        className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition"
      >
        New Game
      </button>
    </div>
  );
};

export default ScoreCountComponent;
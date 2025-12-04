import { useState } from "react";

const ScoreCountComponent = () => {
  const [team1score, setTeam1Score] = useState(0);
  const [team2score, setTeam2Score] = useState(0);

  function resetScores() {
    setTeam1Score(0);
    setTeam2Score(0);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-gray-100 to-gray-200 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Score Board</h1>

      {/* Add margin-bottom here */}
      <div className="flex space-x-12 mb-8">
        {/* Team 1 Box */}
        <div
          onClick={() => setTeam1Score(team1score + 1)}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-40 cursor-pointer hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Team 1</h2>
          <p className="text-5xl font-bold text-gray-900">{team1score}</p>
        </div>

        {/* Team 2 Box */}
        <div
          onClick={() => setTeam2Score(team2score + 1)}
          className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-40 cursor-pointer hover:bg-green-50 transition"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">Team 2</h2>
          <p className="text-5xl font-bold text-gray-900">{team2score}</p>
        </div>
      </div>

      {/* New Game Button */}
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
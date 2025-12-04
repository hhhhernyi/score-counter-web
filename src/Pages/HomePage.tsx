import { Link } from "react-router-dom";

const HomePage = () => {
    const sports = ["volleyball", "soccer", "basketball"]

  // helper to capitalize first letter
  function capitalize(word: string): string {
    const capitalizedWord: string = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord
  }

  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-blue-100 to-blue-300 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to the Score Counter App!</h1>
      <p className="text-lg text-gray-700 mb-6">Please choose your sport</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {sports.map((sport) => (
          <Link key={sport} to={`/${sport}`}  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-center" >
            {capitalize(sport)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

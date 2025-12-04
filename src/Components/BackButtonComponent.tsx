import { Link } from "react-router-dom";


const BackButtonComponent = () => {
  return (
    <Link to="/"  className="inline-block px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition" >
      ← Back
    </Link>
  );

}

export default BackButtonComponent
import { Link } from "react-router";
import ScoreCountComponent from "../Components/ScoreCountComponent";

const VolleyballPage = () => {
  return (
    <div>
        <div>
            <Link to="/">Back</Link>
            <ScoreCountComponent />
        </div>
        <div></div>
    </div>
  )
}

export default VolleyballPage
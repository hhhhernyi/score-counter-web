import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import VolleyballPage from "./Pages/VolleyballPage";
import SoccerPage from "./Pages/SoccerPage";
import BasketballPage from "./Pages/BasketballPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/volleyball" element={<VolleyballPage />} />
        <Route path="/soccer" element={<SoccerPage />} />
        <Route path="/basketball" element={<BasketballPage />} />
      </Routes>
    </div>
  );
};

export default App;

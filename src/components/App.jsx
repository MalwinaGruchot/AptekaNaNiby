import "./App.scss";
import Header from "./Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/promocje" element={<div>Promocje</div>} />
          <Route path="/pielęgnacja" element={<div>pielęgnacja</div>} />
          <Route path="/srodkiopatrunkowe" element={<div>opatrunkowe</div>} />
          <Route path="/witaminy" element={<div>witaminy</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

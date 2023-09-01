import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteWrapper from "./RouteWrapper.jsx/RouteWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/promocje" element={<div>Promocje</div>} />
          <Route path="/pielęgnacja" element={<div>pielęgnacja</div>} />
          <Route path="/srodkiopatrunkowe" element={<div>opatrunkowe</div>} />
          <Route path="/witaminy" element={<div>witaminy</div>} />
          <Route path="/sprzętmedyczny" element={<div>Sprzet medyczny</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

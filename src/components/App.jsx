import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteWrapper from "./RouteWrapper/RouteWrapper";
import Home from "./Home/Home";
import ProductCard from "./ProductCard/ProductCard";
import PageCategory from "./PageCategory/PageCategory";
import Article from "./Article/Article";
import PageBasket from "./PageBasket/PageBasket";
import AppProvider from "../providers/AppProvider";
import PageSerch from "./PageSerch/PageSerch";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouteWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<PageBasket />} />
            <Route path="/products/:id" element={<ProductCard />} />
            <Route path="/article/:id" element={<Article />} />
            <Route
              path="/promocje"
              element={<PageCategory category={"Promocje"} />}
            />
            <Route
              path="/pielęgnacja"
              element={<PageCategory category={"Pielęgnacja"} />}
            />
            <Route
              path="/srodkiopatrunkowe"
              element={<PageCategory category={"Środki opatrunkowe"} />}
            />
            <Route
              path="/sprzętmedyczny"
              element={<PageCategory category={"Sprzęt medyczny"} />}
            />
            <Route path="/wyszukaj" element={<PageSerch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

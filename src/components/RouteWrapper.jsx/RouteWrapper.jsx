import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function RouteWrapper() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollStop from "../ScrollStop";
const Main = () => {
  return (
    <div>
      <ScrollStop></ScrollStop>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

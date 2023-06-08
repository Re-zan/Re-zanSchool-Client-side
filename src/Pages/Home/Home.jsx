import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* page headeing */}
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner part  */}
      <Banner></Banner>
    </div>
  );
};

export default Home;

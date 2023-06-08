import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      {/* page headeing */}
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner part  */}
      <Banner></Banner>
      {/* contact us  */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

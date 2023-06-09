import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Review from "./ParentReview/Review";
import WeAre from "./WhoWeAre/WeAre";

const Home = () => {
  return (
    <div>
      {/* page headeing */}
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner part  */}
      <Banner></Banner>
      {/* paretn review */}
      {/* Who we are */}
      <WeAre></WeAre>
      <Review></Review>
      {/* contact us  */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

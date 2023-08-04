import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Review from "./ParentReview/Review";
import WeAre from "./WhoWeAre/WeAre";
import News from "./LatestNews/News";
import PopukarInstractot from "./PopularInstructor/PopukarInstractot";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      {/* page headeing */}
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner part  */}
      <Banner></Banner>
      {/* Who we are */}
      <WeAre></WeAre>
      {/* popular classes*/}
      <PopularClasses></PopularClasses>
      {/* popular instrutor*/}
      <PopukarInstractot></PopukarInstractot>
      {/* latest news*/}
      <News></News>
      {/* paretn review */}
      <Review></Review>
      {/* contact us  */}
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;

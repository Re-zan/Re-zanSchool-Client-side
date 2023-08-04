import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import useAllClasses from "../../hooks/useAllClasses";
import ClasseesData from "./ClasseesData";
import Heading from "../../components/Heading/Heading";
import BannerImage from "../../assets/CommonBannerImage/stock-photo-kids-working-on-a-painting.jpeg";

const OurClasses = () => {
  const [allClasses] = useAllClasses();
  const onlyApprovedClasses = allClasses?.filter(
    (datas) => datas.status === "approved"
  );

  return (
    <div>
      <CommonBanner BannerImg={BannerImage} title="Our Classes"></CommonBanner>
      <Helmet>
        <title>Home | Our Classes</title>
      </Helmet>{" "}
      <Heading
        title="Our Classes"
        des="Explore the Boundless World of Art and Craft at Re-zanSchool's Inspiring and Engaging Classes."
      ></Heading>
      <div className="my_container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-12">
          {onlyApprovedClasses?.map((dats) => (
            <ClasseesData key={dats._id} dats={dats}></ClasseesData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClasses;

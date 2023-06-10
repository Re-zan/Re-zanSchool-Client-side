import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Heading from "../../../components/Heading/Heading";
import img1 from "../../../assets/LatestNews/latesnews.jpg";
import useNews from "../../../hooks/useNews";
import NewsData from "./NewsData";

const News = () => {
  const [news] = useNews();

  return (
    <div className=" my-20">
      {" "}
      <Heading title={`Our Latest News`}> </Heading>
      <div
        className="h-[1700px]  relative "
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" bg-black bg-opacity-50 w-full h-full py-24">
          <div className=" my-20">
            <VerticalTimeline>
              {news.map((newsData) => (
                <NewsData key={newsData._id} newsData={newsData}></NewsData>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "./New.css";
const NewsData = ({ newsData }) => {
  const { title, author_name, author_img, news, date } = newsData;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={date}
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      // icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title text-design text-xl font-bold my-4">
        {title}
      </h3>

      <p>{news}</p>

      <div className="flex items-center my-4">
        <img src={author_img} alt="" className="w-[50px]" />
        <h4 className="vertical-timeline-element-subtitle font[grand]">
          {author_name}
        </h4>
      </div>
    </VerticalTimelineElement>
  );
};

export default NewsData;

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "./New.css";
import moment from "moment/moment";
const NewsData = ({ newsData }) => {
  const { title, author_name, author_img, news, date } = newsData;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education overflow-x-hidden"
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={moment(date).format("MMM Do YY")}
      iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
    >
      <h3 className="vertical-timeline-element-title text-design text-xl font-bold my-4">
        {title}
      </h3>

      <p className="text-back">{news}</p>

      <div className="flex items-center my-0 md:my-4">
        <img src={author_img} alt="" className="w-[50px]" />
        <h4 className="vertical-timeline-element-subtitle font[grand]">
          {author_name}
        </h4>
      </div>
    </VerticalTimelineElement>
  );
};

export default NewsData;

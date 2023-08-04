import { Rating } from "@smastrom/react-rating";
import "./Review.css";
import "@smastrom/react-rating/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReviewDatas = ({ reviewData }) => {
  const { parent_name, rating, comment, img_url } = reviewData;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="card card-side bg-white shadow-xl my-10 ">
      <figure
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine"
        data-aos-duration="300"
      >
        <img src={img_url} alt={parent_name} className="h-[400px]" />
      </figure>
      <div className="card-body overflow-x-hidden">
        <h2
          className="card-title text-design text-2xl"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {parent_name}
        </h2>
        <p
          className="md:text-xs lg:text-base md:w-[200px] lg:w-[300px] my-6 font-medium text-black"
          data-aos="fade-left"
          data-aos-offset="230"
          data-aos-easing="ease-in-sine"
          data-aos-duration="550"
        >
          {comment}
        </p>
        <div
          className="flex items-center"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="550"
        >
          <Rating
            style={{ maxWidth: 130 }}
            readOnly
            orientation="horizantal"
            value={rating}
          />
          <p className=" font-bold text-xl font[grand] mx-6 mt-2">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDatas;

import Heading from "../../../components/Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useReview from "../../../hooks/useReview";
import ReviewDatas from "./ReviewDatas";

const Review = () => {
  const [review] = useReview();
  console.log(review);
  return (
    <div className="my_container my-20">
      <Heading></Heading>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((datas) => (
          <>
            {" "}
            <SwiperSlide key={datas.id}>
              {" "}
              <ReviewDatas reviewData={datas}></ReviewDatas>{" "}
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

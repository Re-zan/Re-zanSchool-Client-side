import Heading from "../../../components/Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useReview from "../../../hooks/useReview";
import ReviewDatas from "./ReviewDatas";

const Review = () => {
  const [review] = useReview();

  return (
    <div className="my_container my-20">
      <Heading
        title={`What Our Kid's Parent Say`}
        des="Discover what parents are saying about Re-zanSchool: A nurturing environment that sparks creativity, unlocks potential, and fosters a love for art and craft in our children."
      ></Heading>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((datas) => (
          <>
            {" "}
            <SwiperSlide key={datas._id}>
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

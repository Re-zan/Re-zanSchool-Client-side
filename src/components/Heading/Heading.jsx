import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Heading = ({ title, des }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" my-16 text-center ">
      <h2
        className="text-2xl md:text-5xl  font-bold text-design "
        data-aos="flip-right"
        data-aos-offset="240"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
      >
        {title}
      </h2>
      <p
        className="text-base font-normal w-[300px] md:w-[600px] mx-auto my-8 "
        data-aos="fade-up"
        data-aos-offset="260"
        data-aos-easing="ease-in-sine"
        data-aos-duration="200"
      >
        {des}
      </p>
    </div>
  );
};

export default Heading;

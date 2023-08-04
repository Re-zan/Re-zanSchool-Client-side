import { useEffect } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const PopularInstrutorData = ({ datas }) => {
  const { name, email, photo } = datas;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:flex ">
      <div
        className="avatar"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="650"
      >
        <div className="w-28 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={photo} className=" mx-auto" />
        </div>
      </div>
      <div
        className="py-6 ml-5"
        data-aos="fade-down-righ"
        data-aos-offset="220"
        data-aos-easing="ease-in-sine"
        data-aos-duration="450"
      >
        <h2 className=" text-2xl font-semibold text-design mb-2">{name}</h2>
        <div className="flex items-center  ">
          {" "}
          <FaEnvelopeOpen></FaEnvelopeOpen>
          <p className="mx-4">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularInstrutorData;

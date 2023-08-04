import { useEffect } from "react";
import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const InstructorsData = ({ datas }) => {
  const { name, email, number, photo } = datas;
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="card card-compact rounded-none shadow-xl"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className=" text-center py-6">
        <h2 className=" text-2xl font-semibold text-design">{name}</h2>

        <div className="flex items-center justify-center py-4">
          {" "}
          <FaPhoneAlt></FaPhoneAlt>
          <p className="mx-4">{number}</p>
        </div>
        <div className="flex items-center justify-center ">
          {" "}
          <FaEnvelopeOpen></FaEnvelopeOpen>
          <p className="mx-4">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorsData;

import { Link } from "react-router-dom";
import weAreImg from "../../../assets/WhoAreImages/whoweare.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WeAre = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 my_container mt-20 gap-10 mb-16">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="850"
      >
        <img
          src={weAreImg}
          alt="Who We Are"
          className=" md:h-[400px] lg:h-[550px] transform transition duration-300 ease-in-out hover:rounded-3xl"
        />
      </div>{" "}
      <div className=" flex items-center p-4 md:p-0">
        <div>
          <h4
            className="text-4xl  font-bold text-design overflow-hidden"
            data-aos="fade-down-righ"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            Who we are
          </h4>
          <p
            className="text-xl  font-normal mt-3 "
            data-aos="fade-down-righ"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            Unveiling the Beauty of Art and <br></br>Craft at Re-zanSchool.
          </p>
          <p
            className="font-normal my-3 md:w-[300px] lg:w-[500px]"
            data-aos="fade-down-righ"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="450"
          >
            At Re-zanSchool, we are purveyors of artistic excellence, fostering
            a sanctuary where individuals can unleash their ingenuity. Our
            avant-garde approach cultivates a profound appreciation for art and
            craft, empowering boundless creativity to flourish.
          </p>
          <Link
            className="btn bg_gradient_design text-white my-4"
            data-aos="fade-down-righ"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            Exlpore About US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeAre;

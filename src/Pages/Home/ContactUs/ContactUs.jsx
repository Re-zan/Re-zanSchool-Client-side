import { FaEnvelopeOpen, FaLocationArrow, FaYoutube } from "react-icons/fa";
import conact from "../../../assets/ContactImage/contact imge.jpg";
const ContactUs = () => {
  return (
    <div className="card w-full bg-black bg-opacity-50 rounded-none  image-full  h-[1000px] md:h-[800px] lg:h-[650px]">
      <figure>
        <img src={conact} alt="contact Imge" className=" w-full rounded-none" />
      </figure>
      <div className=" my_container z-20  mx-auto text-white py-40 px-3 lg:px-0">
        <h2 className=" uppercase text-center text-6xl  font-semibold font-[grand]">
          Join us now
        </h2>
        <p className="text-center my-6">
          {` "Let's create together and embark on a journey of artistic expression and boundless imagination`}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-16">
          <div className=" text-white  ">
            <FaEnvelopeOpen className="text-[#ca3423] text-5xl    w-full mx-auto my-4"></FaEnvelopeOpen>
            <p className="text-base text-center">Ask Your Question</p>{" "}
          </div>
          <div className=" text-white ">
            <FaLocationArrow className="text-[#ca3423]  text-5xl w-full mx-auto my-4"></FaLocationArrow>
            <p className="text-base text-center">Get Our Location</p>{" "}
          </div>
          <div className=" text-white ">
            <FaYoutube className="text-[#d13e2d]  text-5xl  w-full mx-auto my-4"></FaYoutube>
            <p className="text-base text-center">Join Our Youtube Channel</p>{" "}
          </div>
        </div>

        <div className="relative mt-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-full pr-16"
          />
          <button className="btn  m-0 text-white bg_gradient_design absolute top-0 right-0 rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

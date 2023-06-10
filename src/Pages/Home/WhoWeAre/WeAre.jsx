import { Link } from "react-router-dom";
import weAreImg from "../../../assets/WhoAreImages/whoweare.jpg";
const WeAre = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 my_container mt-20 gap-10 mb-16">
      <div>
        <img
          src={weAreImg}
          alt="Who We Are"
          className=" md:h-[400px] lg:h-[550px] transform transition duration-300 ease-in-out hover:rounded-3xl"
        />
      </div>{" "}
      <div className=" flex items-center p-4 md:p-0">
        <div>
          <h4 className="text-4xl  font-bold text-design">Who we are</h4>
          <p className="text-xl  font-normal mt-3 ">
            Unveiling the Beauty of Art and <br></br>Craft at Re-zanSchool.
          </p>
          <p className="text-base  font-normal my-3  text-black md:w-[300px] lg:w-[500px]">
            At Re-zanSchool, we are purveyors of artistic excellence, fostering
            a sanctuary where individuals can unleash their ingenuity. Our
            avant-garde approach cultivates a profound appreciation for art and
            craft, empowering boundless creativity to flourish.
          </p>
          <Link to="/login" className="btn bg_gradient_design text-white my-4">
            Exlpore About US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeAre;

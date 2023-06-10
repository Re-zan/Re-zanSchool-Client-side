import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import bannerImage1 from "../../../assets/BannerImages/watercolor-paint-box-plastic-bottle-easter-egg-paint-brushes-black-background.jpg";
import bannerImage2 from "../../../assets/BannerImages/fugdf.jpg";
import bannerImage3 from "../../../assets/BannerImages/uioi.jpg";
import { Link } from "react-router-dom";
import "./Banner.css";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          className="h-[800px]"
          style={{
            backgroundImage: `url(${bannerImage1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center pt-[200px] md:pt-[250px] text-white font-[grand] w-[300px] md:w-[500px] mx-auto ">
            {" "}
            <Fade cascade>
              <h2 className=" text-2xl">
                Where creativity knows no bounds, Re-zanSchool is your artistic
                playground.
              </h2>
              <p className="my-4 ">
                Welcome to Re-zanSchool, where art and craft come alive with
                boundless creativity. Step into our vibrant studio and unlock
                the doors to your imagination. With expertly curated programs
                and workshops, we are here to ignite your artistic potential and
                guide you on a transformative journey of self-expression.
                Immerse yourself in the joy of crafting as you explore a diverse
                range of mediums and techniques.
              </p>
              <div className="md:flex items-center justify-center">
                <Link
                  to="/our-classes"
                  className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white border-0"
                >
                  Explore Classes
                </Link>
                <Link
                  to="/instructors"
                  className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white my-4 md:my-0 ml-0 md:ml-4 border-0"
                >
                  Meet Our Instructor
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[800px] relative"
          style={{
            backgroundImage: `url(${bannerImage2})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" absolute bg-black bg-opacity-50 w-full h-full"></div>
          <div className="text-center pt-[200px] md:pt-[250px] text-white font-[grand] w-[300px] md:w-[500px] mx-auto  z-50 ">
            <Fade cascade>
              <p className=" text-2xl ">
                Ignite your creativity with Re-zanSchool's expertly curated art
                and craft programs.
              </p>
              <p className="my-4 ">
                Discover the enchanting world of Re-zanSchool, where art and
                craft intertwine to create mesmerizing wonders. Immerse yourself
                in our nurturing environment, where creativity knows no limits.
                With a diverse array of workshops and programs, we provide the
                perfect platform to explore and expand your artistic skills.
                Whether you're an aspiring painter, a skilled sculptor, or a
                craft enthusiast, our expert guidance will help you unlock your
                true potential.
              </p>
              <div className="md:flex items-center justify-center">
                <Link
                  to="/our-classes"
                  className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white border-0"
                >
                  Explore Classes
                </Link>
                <Link
                  to="/instructors"
                  className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white my-4 md:my-0 ml-0 md:ml-4 border-0"
                >
                  Meet Our Instructor
                </Link>
              </div>
            </Fade>{" "}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="h-[800px] bg-black bg-opacity-50 relative"
          style={{
            backgroundImage: `url(${bannerImage3})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" absolute bg-black bg-opacity-50 w-full h-full"></div>
          <div className="text-center pt-[200px] md:pt-[250px] text-white font-[grand] w-[300px] md:w-[500px] mx-auto z-50">
            {" "}
            <Fade cascade>
              <p className=" text-2xl ">
                Crafting dreams, one masterpiece at a time, at Re-zanSchool's
                nurturing environment.
              </p>
              <p className="my-4 ">
                Welcome to Re-zanSchool, a sanctuary of creativity where art and
                craft thrive in harmony. Step into our inspiring studio and
                unlock the endless possibilities of your imagination. With
                meticulously designed programs and workshops, we aim to awaken
                your artistic potential and guide you on a transformative
                journey of self-discovery. Immerse yourself in the sheer joy of
                crafting as you explore a rich tapestry of mediums and
                techniques.
              </p>
              <div className=" md:flex items-center justify-center">
                <Link
                  to="/our-classes"
                  className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white border-0"
                >
                  Explore Classes
                </Link>
                <Link
                  to="/instructors"
                  className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white my-4 md:my-0 ml-0 md:ml-4 border-0"
                >
                  Meet Our Instructor
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

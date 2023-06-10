const Heading = ({ title, des }) => {
  return (
    <div className=" my-16 text-center">
      <h2 className="text-2xl md:text-5xl  font-bold text-design ">{title}</h2>
      <p className="text-base text-black  font-normal w-[200px] md:w-[600px] mx-auto my-10 ">
        {des}
      </p>
    </div>
  );
};

export default Heading;

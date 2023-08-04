const PolpuarClassData = ({ dats }) => {
  const { image, class_name, instructor_name, price } = dats;
  return (
    <div
      className="card bg-white  shadow-xl"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <figure>
        <img src={image} alt={class_name} className=" h-[260px]" />
      </figure>
      <p className=" bg-slate-700 text-white  text-sm p-3">
        Teacher Name: {instructor_name}
      </p>
      <div className="card-body items-center justify-center">
        <h2 className="card-title text-center text-design">{class_name}</h2>

        <p className="text-black font-semibold">Price: $ {price} </p>
      </div>
    </div>
  );
};

export default PolpuarClassData;

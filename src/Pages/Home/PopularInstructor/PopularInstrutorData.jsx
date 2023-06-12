import { FaEnvelopeOpen } from "react-icons/fa";

const PopularInstrutorData = ({ datas }) => {
  const { name, email, photo } = datas;
  return (
    <div className="lg:flex ">
      <div className="avatar">
        <div className="w-28 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={photo} className=" mx-auto" />
        </div>
      </div>
      <div className="py-6 ml-5">
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

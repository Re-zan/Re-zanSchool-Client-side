import { FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
const InstructorsData = ({ datas }) => {
  const { name, email, number, photo } = datas;
  return (
    <div className="card card-compact rounded-none shadow-xl">
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
        <div className="flex items-center justify-center">
          {" "}
          <FaEnvelopeOpen></FaEnvelopeOpen>
          <p className="mx-4">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorsData;

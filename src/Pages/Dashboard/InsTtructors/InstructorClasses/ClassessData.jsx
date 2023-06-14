const ClassessData = ({ classData, index }) => {
  const {
    instructor_name,
    image,
    price,
    available_seats,
    class_name,
    status,
    feedBack,
    enrolled_student,
  } = classData;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{class_name}</td>

      <td>
        {" "}
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt={instructor_name} />
          </div>
        </div>
      </td>
      <td>$ {price}</td>
      {status === "pending" && (
        <>
          <td className=" text-orange-500 text-base">pending</td>
        </>
      )}
      {status === "approved" && (
        <>
          <td className=" text-green-700 text-base">approved</td>
        </>
      )}
      {status === "dined" && (
        <>
          <td className=" text-red-800 text-base">dined</td>
        </>
      )}
      <td>{available_seats}</td>
      <td> {enrolled_student ? enrolled_student : 0}</td>
      {(status === "pending" || status === "approved") && (
        <>
          <td>======</td>
        </>
      )}
      {status === "dined" && (
        <>
          <td>{feedBack}</td>
        </>
      )}
      <td>
        {" "}
        <button className="btn ">Update</button>
      </td>
    </tr>
  );
};

export default ClassessData;

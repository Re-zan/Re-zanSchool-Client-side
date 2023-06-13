const ClassessData = ({ classData, index }) => {
  const { instructor_name, image, price, available_seats, class_name, status } =
    classData;
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
      <td>{price}</td>
      {status === "pending" && (
        <>
          <td>pending</td>
        </>
      )}
      {status === "approved" && (
        <>
          <td>approved</td>
        </>
      )}
      {status === "dined" && (
        <>
          <td>dined</td>
        </>
      )}
      <td>{available_seats}</td>
      <td>0</td>
      <td>===</td>
      <td>
        {" "}
        <button className="btn ">Update</button>
      </td>
    </tr>
  );
};

export default ClassessData;

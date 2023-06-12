const ClassessData = ({ classData, index }) => {
  const { instructor_name, image, price, available_seats, class_name } =
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
      <td>{available_seats}</td>
      <td>0</td>
      <td>Feedback</td>
      <td>
        {" "}
        <button className="btn ">Update</button>
      </td>
    </tr>
  );
};

export default ClassessData;

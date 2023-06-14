import axios from "axios";

import Swal from "sweetalert2";

const MyClassesData = ({ classData, index, refetch }) => {
  const { _id, image, price, class_name } = classData;
  const handdleDelte = (_id) => {
    axios
      .delete(`https://re-school-camp-server.vercel.app/my_classes/${_id}`)
      .then(() => {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Your data has been deleted`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{class_name}</td>

      <td>
        {" "}
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} />
          </div>
        </div>
      </td>
      <td>$ {price}</td>

      <td>
        {" "}
        <button
          className="btn btn-error  text-white mx-4"
          onClick={() => handdleDelte(_id)}
        >
          Delete
        </button>
        <button className="btn  btn-info text-white">Pay</button>
      </td>
    </tr>
  );
};

export default MyClassesData;

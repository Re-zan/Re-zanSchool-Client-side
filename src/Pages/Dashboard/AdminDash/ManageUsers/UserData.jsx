import { useState } from "react";
import Swal from "sweetalert2";

const UserData = ({ userData, index, refetch }) => {
  //datas
  const { _id, email, name, photo, role, number } = userData;

  //disabled
  const [disabledadmin, setDisabledadmin] = useState(false);
  const [disabledinstructor, setDisabledinstructor] = useState(false);

  //

  //make admin
  const handleadmin = (_id) => {
    setDisabledadmin(true);
    fetch(`https://re-school-camp-server.vercel.app/users/admin/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has become admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  //make instructor
  const handleinstructor = (_id) => {
    setDisabledinstructor(true);

    fetch(`https://re-school-camp-server.vercel.app/users/instructor/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has become instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {" "}
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={photo} alt={name} />
          </div>
        </div>
      </td>
      <td>{number ? number : "98693463946"} </td>
      {role === "admin" && <td>admin</td>}
      {role === "instructor" && <td>instructor</td>}
      {role === "admin" || role === "instructor" || <td>student</td>}

      <td className="flex items-center ">
        <button
          disabled={disabledadmin}
          className={`btn ${
            role === "admin" ? "bg-gray-400" : "bg_gradient_design"
          }   text-white mx-4`}
          onClick={() => handleadmin(_id)}
        >
          {role == "admin" ? " Admin" : "Make admin"}
        </button>
        <button
          disabled={disabledinstructor}
          className={`btn ${
            role === "instructor" ? "bg-gray-400" : "bg_gradient_design"
          }   text-white mx-4`}
          onClick={() => handleinstructor(_id)}
        >
          {role == "instructor" ? " Instructor" : " Make Instructor"}
        </button>
      </td>
    </tr>
  );
};

export default UserData;

import { useState } from "react";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const ManageClassesData = ({ datas, index, refetch }) => {
  const {
    class_name,
    image,
    instructor_email,
    instructor_name,
    price,
    _id,
    status,
    available_seats,
  } = datas;

  const [approvedStatus, setApprovedStatus] = useState(false);
  const handleApproved = (_id) => {
    fetch(`https://re-school-camp-server.vercel.app/classes/approved/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setApprovedStatus(true);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${class_name} has been  approved now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDined = (_id) => {
    fetch(`https://re-school-camp-server.vercel.app/classes/deny/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setApprovedStatus(true);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${class_name} has been  dined now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
            <img src={image} alt={class_name} />
          </div>
        </div>
      </td>
      <td>{instructor_name}</td>
      <td>{instructor_email}</td>
      <td>{available_seats}</td>
      <td>$ {price}</td>
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

      <td>
        {" "}
        <button
          disabled={approvedStatus}
          className="btn btn-success"
          onClick={() => handleApproved(_id)}
        >
          Approve
        </button>
        <button
          disabled={approvedStatus}
          className="btn btn-error m-2"
          onClick={() => handleDined(_id)}
        >
          Deny{" "}
        </button>
        <Link to={`/dashboard/manage_classes/${_id}`}>
          <button className="btn btn-info">feedback</button>
        </Link>
      </td>
    </tr>
  );
};

export default ManageClassesData;

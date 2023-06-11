const UserData = ({ userData, index }) => {
  const { email, name, photo } = userData;
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
      <td>98693463946</td>
      <td>Student</td>
      <td className="flex items-center">
        <button className="btn bg_gradient_design  text-white mx-4">
          Make admin
        </button>
        <button className="btn bg_gradient_design text-white mx-4">
          Make Instructor
        </button>
      </td>
    </tr>
  );
};

export default UserData;

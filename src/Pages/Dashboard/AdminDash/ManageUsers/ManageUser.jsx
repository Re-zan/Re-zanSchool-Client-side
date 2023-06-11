import axios from "axios";
import { useEffect, useState } from "react";
import UserData from "./UserData";

const ManageUser = () => {
  const [allUser, setAllUser] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setAllUser(res.data);
    });
  }, []);
  console.log(allUser);
  return (
    <div className="text-center my-7">
      <h2 className=" font-semibold text-3xl">
        Total Users: {allUser?.length}
      </h2>

      <div className="overflow-x-auto m-8">
        <table className="table table-xs ">
          <thead className="text-center text-base font-semibold">
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Phone Numer</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center text-base font-semibold">
            {allUser?.map((datas, index) => (
              <UserData
                key={datas._id}
                userData={datas}
                index={index}
              ></UserData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;

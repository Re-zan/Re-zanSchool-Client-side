import UserData from "./UserData";
import useUers from "../../../../hooks/useUers";

const ManageUser = () => {
  const [user, refetch] = useUers();

  return (
    <div className="text-center my-7">
      <h2 className=" font-semibold text-3xl">Total Users: {user?.length}</h2>

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
            {user?.map((datas, index) => (
              <UserData
                key={datas._id}
                userData={datas}
                index={index}
                refetch={refetch}
              ></UserData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;

import useAllClasses from "../../../../hooks/useAllClasses";
import ManageClassesData from "./ManageClassesData";

const ManageClasses = () => {
  const [allClasses, refetch] = useAllClasses();
  // console.log(allClasses);
  return (
    <div className="text-center my-7">
      <h2 className=" font-semibold text-3xl">
        Total Classes: {allClasses?.length}
      </h2>

      <div className="overflow-x-auto m-8">
        <table className="table table-xs ">
          <thead className="text-center text-base font-semibold">
            <tr>
              <th>Serial No</th>
              <th>Class Name</th>
              <th>Class Image</th>
              <th>Instructor name</th>
              <th>Instructor Email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center text-base font-semibold">
            {allClasses?.map((datas, index) => (
              <ManageClassesData
                key={datas._id}
                index={index}
                datas={datas}
                refetch={refetch}
              ></ManageClassesData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

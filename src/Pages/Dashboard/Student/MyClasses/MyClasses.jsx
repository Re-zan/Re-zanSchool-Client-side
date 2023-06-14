import useMyClasses from "../../../../hooks/useMyClasses";
import MyClassesData from "./MyClassesData";

const MyClasses = () => {
  const [myClasses, refetch] = useMyClasses();
  console.log(myClasses);

  return (
    <div>
      <div className="text-center my-7">
        <h2 className=" font-semibold text-3xl">
          My Classes: {myClasses?.length}
        </h2>

        <div className="overflow-x-auto m-8">
          <table className="table table-xs bg-white ">
            <thead className="text-center text-black font-semibold">
              <tr>
                <th>Serial No</th>
                <th>Class Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-black font-semibold">
              {myClasses?.map((datas, index) => (
                <MyClassesData
                  key={datas._id}
                  classData={datas}
                  index={index}
                  refetch={refetch}
                ></MyClassesData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;

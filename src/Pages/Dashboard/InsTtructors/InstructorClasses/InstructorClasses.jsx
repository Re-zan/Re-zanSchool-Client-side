import useInstructorClass from "../../../../hooks/useInstructorClass";
import ClassessData from "./ClassessData";

const InstructorClasses = () => {
  const [insTructorClassesData] = useInstructorClass();
  console.log(insTructorClassesData);
  return (
    <div>
      <div className="text-center my-7">
        <h2 className=" font-semibold text-3xl">
          My Classes: {insTructorClassesData?.length}
        </h2>

        <div className="overflow-x-auto m-8">
          <table className="table table-xs ">
            <thead className="text-center text-base font-semibold">
              <tr>
                <th>Serial No</th>
                <th>Class Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Status</th>
                <th>Available seats</th>
                <th>Total Enrolled Students</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center text-base font-semibold">
              {insTructorClassesData?.map((datas, index) => (
                <ClassessData
                  key={datas._id}
                  classData={datas}
                  index={index}
                ></ClassessData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorClasses;

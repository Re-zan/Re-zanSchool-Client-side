import CommonBanner from "../../components/CommonBanner/CommonBanner";
import Heading from "../../components/Heading/Heading";
import useUsers from "../../hooks/useUers";
import InstructorsData from "./InstructorsData";

const Instructors = () => {
  const [user] = useUsers();
  const getOnlyInstructor = user.filter((datas) => datas.role === "instructor");

  return (
    <div>
      <CommonBanner></CommonBanner>
      <div className="my_container">
        <Heading
          title="Meet with our instructors"
          des="Discover what parents are saying about Re-zanSchool: A nurturing environment that sparks creativity, unlocks potential, and fosters a love for art and craft in our children."
        ></Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
          {getOnlyInstructor?.map((datas) => (
            <InstructorsData key={datas._id} datas={datas}></InstructorsData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;

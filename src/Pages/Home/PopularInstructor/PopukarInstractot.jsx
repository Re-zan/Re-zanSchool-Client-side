import Heading from "../../../components/Heading/Heading";
import useUsers from "../../../hooks/useUers";
import PopularInstrutorData from "./PopularInstrutorData";
const PopukarInstractot = () => {
  const [user] = useUsers();
  const getOnlyInstructor = user
    .filter((datas) => datas.role === "instructor")
    .slice(0, 6);

  return (
    <div className="my_container">
      <Heading
        title=" Our Popular instructors"
        des="Discover what parents are saying about Re-zanSchool: A nurturing environment that sparks creativity, unlocks potential, and fosters a love for art and craft in our children."
      ></Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-20 p-3 lg:p-0">
        {getOnlyInstructor?.map((datas) => (
          <PopularInstrutorData
            key={datas._id}
            datas={datas}
          ></PopularInstrutorData>
        ))}
      </div>
    </div>
  );
};

export default PopukarInstractot;

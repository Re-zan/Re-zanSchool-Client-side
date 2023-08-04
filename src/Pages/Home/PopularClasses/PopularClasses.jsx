import Heading from "../../../components/Heading/Heading";
import useAllClasses from "../../../hooks/useAllClasses";
import PolpuarClassData from "./PolpuarClassData";

const PopularClasses = () => {
  const [allClasses] = useAllClasses();
  const onlyApprovedClasses = allClasses
    ?.filter((datas) => datas.price > 30)
    .slice(0, 4);
  return (
    <div>
      {" "}
      <Heading
        title="Our Classes"
        des="Explore the Boundless World of Art and Craft at Re-zanSchool's Inspiring and Engaging Classes."
      ></Heading>
      <div className="my_container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-12">
          {onlyApprovedClasses?.map((dats) => (
            <PolpuarClassData key={dats._id} dats={dats}></PolpuarClassData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;

import useAuth from "./useAuth";
import { useEffect, useState } from "react";

const useInstructorClass = () => {
  const { user } = useAuth();

  const [insTructorClassesData, setInsTructorClasses] = useState();
  useEffect(() => {
    fetch(`https://re-school-camp-server.vercel.app/classes/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInsTructorClasses(data);
      });
  }, []);
  return [insTructorClassesData];
};

export default useInstructorClass;

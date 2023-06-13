import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const [isInstructor, setIsInstructor] = useState();
  const { user, loader } = useAuth();

  useEffect(() => {
    fetch(
      `https://re-school-camp-server.vercel.app/users/instructor/${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsInstructor(data.user);
      });
  }, []);

  return [isInstructor, loader];
};

export default useInstructor;

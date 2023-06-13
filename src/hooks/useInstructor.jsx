import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useInstructor = () => {
  const [isInstructor, setIsInstructor] = useState();
  const { user, loader } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/users/instructor/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsInstructor(data.user);
      });
  }, []);

  return [isInstructor, loader];
};

export default useInstructor;

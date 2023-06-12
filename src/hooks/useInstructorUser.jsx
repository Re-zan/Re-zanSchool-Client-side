import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstructorUser = () => {
  const { user, loader } = useAuth();
  const { data: userInstructor } = useQuery({
    queryKey: ["userInstructor", user?.email],
    enabled: !loader && !!user?.email,
    queryFn: async () => {
      const res = axios.get(
        `http://localhost:5000/users/instructor/${user?.email}`
      );
      console.log(res.data);
      // return res.data;
    },
  });
  return [userInstructor];
};

export default useInstructorUser;

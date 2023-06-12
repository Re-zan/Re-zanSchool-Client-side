import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstruct = () => {
  const { user } = useAuth();
  const { data: isisInstructor = [] } = useQuery({
    queryKey: ["isisInstructor", user?.email],

    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/instructor/${user?.email}`
      );

      return res.data.result.instructor;
    },
  });
  return [isisInstructor];
};

export default useInstruct;

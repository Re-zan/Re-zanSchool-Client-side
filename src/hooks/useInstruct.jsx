import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstruct = () => {
  const { user, loader } = useAuth();
  const { data: isisInstructor = [] } = useQuery({
    queryKey: ["isisInstructor", user?.email],
    enabled: !loader && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `https://re-school-camp-server.vercel.app/users/instructor/${user?.email}`
      );

      return res.data.result.instructor;
    },
  });
  return [isisInstructor];
};

export default useInstruct;

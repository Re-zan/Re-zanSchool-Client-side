import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstruct = () => {
  const { user, loader } = useAuth();
  const token = localStorage.getItem("access-token");
  const { data: isisInstructor = [] } = useQuery({
    queryKey: ["isisInstructor", user?.email],
    enabled: !loader && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/instructor/${user?.email}`,
        {
          headers: {
            authorization: `beare ${token}`,
          },
        }
      );

      return res.data.result.instructor;
    },
  });
  return [isisInstructor];
};

export default useInstruct;

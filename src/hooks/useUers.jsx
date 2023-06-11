import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUers = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/users");
      //   console.log(response.data);
      return response.data;
    },
  });
  return [user, refetch];
};

export default useUers;

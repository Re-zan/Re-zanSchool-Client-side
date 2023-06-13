import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUers = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get(
        "https://re-school-camp-server.vercel.app/users"
      );
      //   console.log(response.data);
      return response.data;
    },
  });
  return [user, refetch];
};

export default useUers;

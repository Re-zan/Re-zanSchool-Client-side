import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useMyClasses = () => {
  const { user } = useAuth();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["myClasses"],
    queryFn: async () => {
      const res = await axios.get(
        `https://re-school-camp-server.vercel.app/my_classes/${user?.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });
  return [myClasses, refetch];
};

export default useMyClasses;

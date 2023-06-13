import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllClasses = () => {
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/classes");

      return res.data;
    },
  });
  return [allClasses, refetch];
};

export default useAllClasses;

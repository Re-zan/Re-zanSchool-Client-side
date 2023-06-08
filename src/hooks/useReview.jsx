import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReview = () => {
  const { data: review = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const dsfsd = await axios.get("parents_reivew.json");
      return dsfsd.data;
    },
  });
  return [review];
};

export default useReview;

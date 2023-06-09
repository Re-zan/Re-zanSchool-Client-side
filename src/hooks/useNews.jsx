import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useNews = () => {
  const { data: news = [] } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get("news.json");
      return res.data;
    },
  });
  return [news];
};

export default useNews;

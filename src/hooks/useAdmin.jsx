import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useAdmin = () => {
  //   const [isadmin, setIsadmin] = useState();
  const { user } = useAuth();
  const { data: isadmin = [], refetch } = useQuery({
    queryKey: ["isadmin", user?.email],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/users/admin/${user?.email}`
      );

      console.log(response.data);
      return response.data;
    },
  });
  return [isadmin, refetch];
};

export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useAdmin = () => {
  //   const [isadmin, setIsadmin] = useState();
  const { user, loader } = useAuth();
  const token = localStorage.getItem("access-token");
  const {
    data: isadmin = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["isadmin", user?.email],
    enabled: !loader && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `beare ${token}`,
          },
        }
      );

      return response.data.admin;
    },
  });
  return [isadmin, refetch, isLoading];
};

export default useAdmin;

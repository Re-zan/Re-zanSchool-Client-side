import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useInstruct from "../../hooks/useInstruct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ClasseesData = ({ dats }) => {
  const { _id, image, class_name, instructor_name, price, available_seats } =
    dats;
  const { user } = useAuth();
  const [isadmin] = useAdmin();
  console.log(isadmin);
  const [isisInstructor] = useInstruct();

  const navigate = useNavigate();
  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: "Please login to select this class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    } else {
      const myClassesData = {
        image,
        class_name,
        instructor_name,
        price,
        email: user?.email,
      };
      axios
        .post(
          "https://re-school-camp-server.vercel.app/my_classes",
          myClassesData
        )
        .then((data) => {
          if (data.status === 200) {
            toast("You classe has been added successfully");
          }
        });
    }
  };

  return (
    <div
      className={`card ${
        available_seats === 0 ? "bg-red-400" : "bg-white"
      }  shadow-xl`}
    >
      <ToastContainer></ToastContainer>
      <figure>
        <img src={image} alt={class_name} className=" h-[260px]" />
      </figure>
      <p className=" bg-slate-700 text-white p-3 text-sm">
        Teacher Name: {instructor_name}
      </p>
      <div className="card-body items-center justify-center">
        <h2 className="card-title text-center text-design">{class_name}</h2>

        <p className="text-black font-semibold">Price: $ {price} </p>
        <p className="text-black font-semibold">
          Available Seats: {available_seats}{" "}
        </p>
        <div className="card-actions justify-center">
          {!user ? (
            <button
              className="btn bg_gradient_design text-white border-0"
              onClick={() => handleSelect(_id)}
            >
              Select
            </button>
          ) : (
            <button
              disabled={isadmin || isisInstructor || available_seats === 0}
              className="btn bg_gradient_design text-white border-0"
              onClick={() => handleSelect(_id)}
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClasseesData;

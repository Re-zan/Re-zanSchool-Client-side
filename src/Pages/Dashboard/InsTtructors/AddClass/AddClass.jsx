import axios from "axios";

import { useForm } from "react-hook-form";
import useInstructor from "../../../../hooks/useInstructor";
import { ToastContainer, toast } from "react-toastify";

const token = import.meta.env.VITE_IMAGE_TOKEN;

const AddClass = () => {
  const [isInstructor] = useInstructor();

  const imag_url_Link = `https://api.imgbb.com/1/upload?key=${token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imag_url_Link, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === 200) {
          const imagData_url = resData.data.display_url;
          const { class_name, available_seats, price } = data;
          const classData = {
            instructor_name: isInstructor?.name,
            instructor_email: isInstructor?.email,
            class_name,
            available_seats: parseInt(available_seats),
            price: parseFloat(price),
            image: imagData_url,
            status: "pending",
          };
          axios
            .post("https://re-school-camp-server.vercel.app/classes", classData)
            // .then((res) => res.json())
            .then((data) => {
              toast("A New Class Added Successfully");
              reset();
              console.log(data);
            });
          // console.log(classData);
        }
      });
  };

  return (
    <div className=" m-10">
      <ToastContainer></ToastContainer>
      <h2 className="text-2xl text-center my-3 font-semibold">
        Add A New Class
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className=" bg-slate-400 p-10">
          <div className="form-control w-full  my-4">
            <input
              type="text"
              value={isInstructor?.name}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full  my-4">
            <input
              type="email"
              value={isInstructor?.email}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full  my-4">
            <input
              type="text"
              placeholder="class name"
              className="input input-bordered w-full "
              {...register("class_name", { required: true })}
            />
            {errors.class_name?.type === "required" && (
              <p className="text-red-800 my-3">First name is required</p>
            )}
          </div>
          <div className="form-control w-full  my-4">
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              {...register("image", { required: true })}
            />
          </div>
          <div className="form-control w-full  my-4">
            <input
              type="number"
              placeholder="available seats"
              className="input input-bordered w-full "
              {...register("available_seats", { required: true })}
            />
            {errors.available_seats?.type === "required" && (
              <p className="text-red-800 my-3">First name is required</p>
            )}
          </div>
          <div className="form-control w-full  my-4">
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
            {errors.price?.type === "required" && (
              <p className="text-red-800 my-3">First name is required</p>
            )}
          </div>

          <button type="submit" className=" btn btn-primary">
            Add Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;

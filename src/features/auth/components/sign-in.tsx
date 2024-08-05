import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getUser } from "../../redux/slices/auth";
import { FaArrowsToDot } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { SignInSchema } from "../schema";
import TextInput from "../../../components/elements/text-field";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/slices/auth-slice";

interface FormValue {
  email: string;
  password: string;
}
const SignIn = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues: FormValue = {
    email: "",
    password: "",
  };
  const { handleSubmit, handleChange, values, errors, touched } =
    useFormik<FormValue>({
      initialValues: initialValues,
      validationSchema: SignInSchema,
      onSubmit: (value: FormValue) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, value.email, value.password)
          .then((userCredential) => {
            // Signed in
            setIsLoading(false);
            const user = userCredential.user;
            dispatch(getUser(user));
            navigate("/movies");
            // ...
          })
          .catch((error) => {
            toast.error(error.message.split(" ").pop());
            setIsLoading(false);
          });
      },
    });

  return (
    <section className="px-6 py-4">
      <div className="flex text-black items-center gap-x-2">
        <FaArrowsToDot size={24} className="text-yellow-500" />
        <h1 className="text-2xl font-serif text-black font-bold">
          Star <span className="text-yellow-500">War</span>
        </h1>
      </div>
      <div className=" max-w-[600px] px-4 mx-auto flex flex-col justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="md:w-[500px] shadow-md rounded-lg shadow-[grey] p-4"
        >
          <h2 className="font-bold text-2xl text-center">SIGN IN</h2>
          <TextInput
            label="Email"
            name="email"
            type="text"
            placeHolder="Enter email ..."
            value={values.email}
            onChange={handleChange}
            err={!!errors?.email && touched?.email}
            errMessage={errors.email}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeHolder="Enter password ..."
            value={values.password}
            onChange={handleChange}
            err={!!errors?.password && touched?.password}
            errMessage={errors.password}
          />

          <button
          type="submit"
            className={`  bg-yellow-500 text-white px-4 py-2 rounded-md `}
          >
            {isLoading ? (
              <FiLoader className="animate-spin text-white" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p className="mt-3">
          Don't have an account{" "}
          <span className="text-yellow-500">
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignIn;

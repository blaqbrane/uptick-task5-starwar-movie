import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowsToDot } from "react-icons/fa6";
import { FiLoader } from "react-icons/fi";
import { toast } from "react-toastify";
import TextInput from "../../../components/elements/text-field";
import { useFormik } from "formik";
import { SignUpSchema } from "../schema";


  export interface FormValue {
    email:string 
    password:string
  } 
  const SignUp = () => {
 
    const[isLoading, setIsLoading]  = useState(false)
    const navigate = useNavigate()
     const initialValue:FormValue ={
        email:'',
        password:''
     }
    const { handleSubmit, handleChange, values,errors,touched} = useFormik<FormValue>({
      initialValues:initialValue,
      validationSchema:SignUpSchema,
      onSubmit(value:FormValue) {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
            // Signed up 
            setIsLoading(false)
            const user = userCredential.user;
            console.log('user',(user ) )
            navigate('/')
        })
        .catch((error) => {
            const errorMessage = error.message.split(' ').pop();
            toast.error(errorMessage) 
        });
      },
    })
 
    return (
        <section className="px-6 py-4">
             <div className="flex text-black items-center gap-x-2">
          <FaArrowsToDot size={24} className="text-yellow-500"/>
          <h1 className="text-2xl font-serif text-black font-bold">Star <span className="text-yellow-500">War</span></h1>
          </div>
        
      <div className=" max-w-[600px] px-4 mx-auto flex flex-col justify-center min-h-screen">
        <form onSubmit={ handleSubmit} className="md:w-[500px] shadow-md rounded-lg shadow-[grey] p-4">
         <h2 className="font-bold text-2xl text-center">SIGN UP</h2>
             
               <div>
               <TextInput
               label="Email"
               name="email"
               type="text"
               placeHolder="Enter email ..."
               value={values.email}
               onChange={handleChange}
               err= {!!errors?.email && touched?.email}
               errMessage={errors.email}
              />
               </div>

               <div>
               <TextInput
               label="Password"
               name="password"
               type="password"
               placeHolder="Enter password ..."
               value={values.password}
               onChange={handleChange}
               err= {!!errors?.password && touched?.password}
               errMessage={errors.password}
              />
               </div>
               

                <button  className={` bg-yellow-500 text-white px-4 py-2 rounded-md `}>{isLoading ? <FiLoader className="animate-spin text-white"/> : 'Sign Up'}</button>
        </form>

        <p className="mt-3">Have an account already <span className="text-yellow-500"><Link to='/'>Sign In</Link></span></p>
      </div>
      </section>
    )
  }
  
  export default SignUp
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage('')

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successful");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error?.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result =>{
      const loggedUser = result?.user
      toast.success('Login Successful.')
    })
    .catch(error =>{
      toast.error('something is wrong, try Again !!')
    })
  };



  return (
    <div className="hero min-h-screen mt-10 md:mt-0">
      <div className="hero-content flex-col lg:flex-row items-center gap-16">
        <div className="w-1/2">
          <img src={loginImg} alt="login-image" />
        </div>
        <div className="w-full border-2 rounded-lg shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body md:p-16">
            <h1 className="text-4xl font-semibold text-center mb-12">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <label className="text-center ">
              <p className="label-text-alt text-[#FF3811] font-bold link link-hover">
                {errorMessage}
              </p>
            </label>
            <div className="form-control mt-6">
              <input
                className="btn btn-error bg-[#FF3811] text-white normal-case"
                type="submit"
                value="Sign In"
              />
            </div>
            <div className="mt-7 mb-12 text-center">
              <h5 className="text-lg font-medium mb-7">Or Sign In With</h5>
              <div className="flex justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center cursor-pointer">
                  <FaFacebookF className="text-xl text-[#3B5998]" />
                </div>
                <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center cursor-pointer">
                  <FaLinkedinIn className="text-xl text-[#0A66C2]" />
                </div>
                <div 
                onClick={handleGoogleSignIn}
                className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center cursor-pointer"
                >
                  <FcGoogle className="text-xl" />
                </div>
              </div>
            </div>
            <label className="text-center text-gray-500">
              <p>
                <span>Didn't Have an Account?</span>
                <Link
                  to="/register"
                  className="link link-hover ml-1 text-[#FF3811] font-semibold"
                >
                  Sign Up
                </Link>
              </p>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import loginImg from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen mt-10 md:mt-0">
        <div className="hero-content flex-col lg:flex-row items-center gap-16">
          <div className="w-1/2">
            <img src={loginImg} alt="login-image" />
          </div>
          <div className="w-full border-2 rounded-lg shadow-2xl bg-base-100">
            <form  className="card-body md:p-16">
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
                />
              </div>
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
                  <div className="w-14 h-14 rounded-full bg-base-200 flex items-center justify-center cursor-pointer">
                    <FcGoogle className="text-xl" />
                  </div>
                </div>
              </div>
              <label className="text-center text-gray-500">
                <p>
                  <span>Forgot password?</span>
                  <Link
                    to="/register"
                    className="link link-hover ml-1 text-[#FF3811] font-semibold"
                  >
                    Sign In
                  </Link>
                </p>
              </label>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
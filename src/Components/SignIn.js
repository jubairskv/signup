import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggin", true);
      navigate("/home");
    } else {
      alert("Wrong Email or Password");
    }
  };
  return (
    <div className="flex flex-row">
      <div className="pl-36 pt-32">
        <div>
          <h1 className="font-bold text-4xl">Welcome back !</h1>
          <p className="pt-2">
            Enter to get unlimited access to data & information
          </p>
        </div>
        <div className="pt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="pr-36 font-medium text-base">
                Email <span class="text-red-500">*</span>{" "}
              </label>
              <input
                type="text"
                name="email"
                value={input.email}
                placeholder="Enter your mail address"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="border rounded-lg w-96 h-12 p-2 mt-2"
              />
            </div>
            <div className="flex flex-col pt-2">
              <label className="pr-28 font-medium text-base">
                Password <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="password"
                value={input.password}
                placeholder="Enter password"
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="border rounded-lg  w-96 h-12 p-2 mt-2"
              />
            </div>
            <div className="flex gap-28 mt-4 text-nowrap">
              <p>Remember Me</p>
              <Link
                className="flex text-blue-800 font-medium"
                to="/forgotpassword"
              >
                Forgot your password ?
              </Link>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="border bg-blue-700 rounded-lg shadow-lg w-96 h-12 text-white"
              >
                Login
              </button>
            </div>

            <div className="mt-8 flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="icon"
                className="w-7 h-7 absolute ml-20"
              />
              <button
                type="submit"
                className="border bg-white rounded-lg  w-96 h-12 text-black"
              >
                Sign up with google
              </button>
            </div>
            <div className="ml-16 mt-8">
              <p className="flex gap-2 ">
                Don't have an account?
                <Link to="/signup">
                  <h6 className="underline text-blue-800 font-medium">
                    Register here
                  </h6>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-blue-800 border w-screen h-svh ml-96"></div>
    </div>
  );
};

export default SignIn;

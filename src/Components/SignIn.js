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
    <div className="pl-32 pt-32">
      <div>
        <h1 className="font-bold text-4xl">Welcome back!</h1>
        <p className="pt-2">
          Enter to get unlimited access to data & information
        </p>
      </div>
      <div className="pt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="pr-36 font-medium text-base">Email : </label>
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
            <label className="pr-28 font-medium text-base">password : </label>
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
          <div className="flex gap-10 mt-4">
            <p>Remember Me</p>
            <p className="flex">
              Forgot your password ?
              <Link to="/forgotpassword">
                <h6>Reset Here</h6>
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="border bg-blue-700 rounded-lg shadow-lg w-96 h-12 text-white"
            >
              Login
            </button>
          </div>
          <div className="">
            <p className="flex">
              Don't have an account?
              <Link to="/signup">
                <h6>Sign up</h6>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

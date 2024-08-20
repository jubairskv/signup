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
    const loggedUser = JSON.parse(localStorage.getItemItem("user"));
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={input.email}
            placeholder="Enter the email"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="border"
          />
        </div>
        <div>
          <label>password : </label>
          <input
            type="text"
            name="password"
            value={input.password}
            placeholder="Enter the password"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="border"
          />
        </div>
        <div>
          <button type="submit" className="border">
            Login
          </button>
        </div>
        <div>
          <p>
            Don't have an account?
            <Link to="/signup">
              <h6>Sign up</h6>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(JSON.stringify(input));
    navigate("/")
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter the email"
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            className="border"
          />
        </div>
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
            Have already an acount?
            <Link to="/">
              <h6>Signin</h6>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;

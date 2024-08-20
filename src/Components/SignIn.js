import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
          />
        </div>
        <div>
          <button>Login</button>
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

import React, { useState } from "react";

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
          <label>Email</label>
          <input
            type="text"
            value={input}
            placeholder="Enter the email"
            onChange={(e) =>
              setInput({ ...input, [e.target.email]: e.target.value })
            }
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="text"
            value={input}
            placeholder="Enter the password"
            onChange={(e) =>
              setInput({ ...input, [e.target.password]: e.target.value })
            }
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser && email === storedUser.email) {
      const updatedUser = { ...storedUser, password: newPassword };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("Password reset successfully!");
    } else {
      alert("Email not found!");
    }
  };

  return (
    <div>
      <div>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;

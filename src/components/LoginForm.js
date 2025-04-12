import React from "react";

const LoginForm = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    // simulate login action
    setIsLoggedIn(true);
  };

  return (
    <div>
      <label htmlFor="username">Username :</label>
      <input id="username" type="text" placeholder="User Name" />
      <br />
      <br />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" placeholder="Password" />
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginForm;

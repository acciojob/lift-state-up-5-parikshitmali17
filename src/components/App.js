
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(false); // ✅ Correct syntax

  const handleClick = () => {
    setIsLogin(true); // ✅ use setState to update state
  };

  return (
    <div>
     {!isLogin && <div> <label htmlFor="username">User Id</label>
     <input id="username" type="text" placeholder="User Name" />
      <br />
      <br />
      <label htmlFor="password">Password</label>
     <input id="password" type="password" placeholder="Password" />
      <br />
      <button onClick={handleClick}>Log In</button></div>}

      {isLogin && <p>You are now logged in!</p>}
    </div>
  );
};

export default App;

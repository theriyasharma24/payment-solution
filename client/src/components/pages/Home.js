import React, { useContext } from "react";

import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div>
      Welcome <h1>{user && user.name}</h1>
    </div>
  );
};

export default Home;

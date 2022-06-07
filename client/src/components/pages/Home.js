import React, { useContext } from "react";
import Box from '@mui/material/Box';

import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <div>
      Welcome <h1>{user && user.name}</h1>
      <Box sx={{ flexGrow: 1 }}>
      <div
          style={{
         textAlign: 'center'
  }}
 >
 <p>The payment solution, an app for managing manual data into a digital manner.</p>
<p>Features contained are:-</p>
<p># Stores all the clients information.</p>

<p># Schedules meeting and reminder.</p>
<p>#  Notes for specific tasks can be added.</p>
<p># Provides an intellectual environment to the users.</p>
    </div>
    </Box>
    </div>
    
  );
};

export default Home;

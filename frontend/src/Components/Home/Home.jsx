import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [isHomeSelected, setIsHomeSelected] = useState(false);
  const headerHeight = 56; // Adjust as needed
  const availableHeight = window.innerHeight - headerHeight;

  return (
    <>
  <div  >
   
      <h1 className="text-white text-center font-anonymous text-6xl font-normal text-normal leading-normal">
        Welcome to <br />
        <b>Dubbewar & Associates</b>
      </h1>
    </div>
  
</>

  );
};

export default Home;

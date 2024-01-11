import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [isHomeSelected, setIsHomeSelected] = useState(false);

  return (
    <>
  <div className="bg-black bg-opacity-80" >
   
      <h1 className="text-white text-center font-anonymous text-6xl font-normal text-normal leading-normal">
        Welcome to <br />
        <b>Dubbewar & Associates</b>
      </h1>
    </div>
  
</>

  );
};

export default Home;

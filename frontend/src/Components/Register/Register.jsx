import axios from 'axios';
import React, { useState } from 'react'

function  Register() {
  
  
    const [userData, setUserData] = useState({
      user: "",
      password: "",
      email: "",
    });
  
    const handleInputs = async (e) => {
      e.preventDefault();
      const { user, password, email } = userData;
    
      try {
        const response = await axios.post('/api/register', {
          user,
          password,
          email,
        });
    
        console.log('Data sent successfully:', response.data);
      } catch (error) {
        console.error('Error sending data to the backend:', error);
      }
    
      setUserData({
        ...userData,
        user,
        password,
        email,
      });
    
      console.log(user);
      console.log(email);
      console.log(password);
    };    
      
      
      
   

  return (
    <>
    
 
   
 <div
  
 className="">
     <h2 className="">Login</h2>
     <form action='post'>
       <div className="">
            <input
            placeholder='Username'value={userData.user}
            onChange={(e) => setUserData({ ...userData, user: e.target.value })}
            type="text"
            id="username"
            className=""/>
        </div>
        <div className="">
            <input 
            placeholder='Email'
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })} 
            id="email"
            className=""/>
        </div>
        <div className="">
         
          <input 
          placeholder='Password'
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          id="password"
          className=""/>
        </div>
      <button type="submit" onClick={handleInputs}
      className="">Login</button>
    </form>
 </div>
 </>
      
    
  )
  };

export default Register

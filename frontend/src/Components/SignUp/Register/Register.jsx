import axios from 'axios';
import React, { useState } from 'react'
import LR from '../L&R';

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
    {/* onChange={(e) => setUserData({ ...userData, user: e.target.value })}*/}
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
      <div className='ml-5 bg backdrop-opacity-40 h-full w-96'>
        <LR/>
      <div className=' p-6 space-y-4 md:space-y-6 sm:p-8'>
      <input 
        type="username" 
        name="username" 
        onChange={(e) => setUserData({ ...userData, user: e.target.value })}
        id="username" 
        class=" rounded-md p-2.5 w-full " placeholder="Username" required=""/>

      <input 
        type="email" 
        name="email" 
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        id="email" 
        class=" rounded-md p-2.5 w-full " placeholder="Email" required=""/>

      <input 
        type="password" 
        name="password" 
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        id="password" 
        class=" rounded-md p-2.5 w-full " placeholder="Password" required=""/>

      <button
        onClick={handleInputs}
        type='submit'
        className=' rounded-lg bg-yellow-c font-mono  px-2 relative bottom-0 left-1/2 -translate-x-1/2'

        >
          Submit
        </button>
        <br/>
        <h2 className='relative bottom-0 left-1/2 -translate-x-1/2'>OR</h2>
        </div>
       
      </div>
    
 
   
    </>
      
    
  )
  };

export default Register

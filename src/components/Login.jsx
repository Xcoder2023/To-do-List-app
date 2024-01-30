import React from 'react'
import {useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const validateForm = () => {
    navigate("/dashboard");
  };
  return (
    <>
       <div className=' flex flex-col items-center m-auto   gap-12 p-4 shadow-xl bg-white' >
          <p className=' text-[rgb(62,180,158)] text-[30px]'>Enter Your Login details</p>
          <form onSubmit={validateForm} action="" id="data-form" className='flex flex-col gap-10'>
            <input type="email" placeholder='E-Mail' className='bg-[rgb(241,245,244)] p-4 w-[20rem]'required/>
            <input type="password" placeholder='password' className='bg-[rgb(241,245,244)] p-4'required/>
            <div className=' flex justify-center mt-[-10px]'><button className=' bg-[rgb(62,180,158)] px-8 h-10 rounded-full text-white'>SIGN IN</button></div>
          </form>
       </div>
    </>
  )
}

export default Login
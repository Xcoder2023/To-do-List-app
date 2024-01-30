import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import Login from "./Login";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <>
      <div className=" flex flex-col h-[100vh] w-[100%] lg:flex-row">
        <div className=" bg-[rgb(62,180,158)] text-white rounded-2xl p-4 lg:w-[40%] w-[100%]">
          <p className=" text-[28px]">LOGO</p>
          <div className=" flex flex-col items-center gap-10">
            <p className=" text-[20px]">Welcome to task manager</p>
            <p className=" w-[70%] text-center text-[20px]">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={handleToggle}
              className=" border-2 px-8 h-10 rounded-full"
            >
              SIGN IN
            </button>
            <p>or</p>
            <p className=" flex items-center gap-3">
              sign up to create an account <FaArrowRight />
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center m-auto  mt-10 gap-12 p-4 shadow-xl">
          <p className=" text-[rgb(62,180,158)] text-[30px]">Create Account</p>
          <form action="" className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="UserName"
              className="bg-[rgb(241,245,244)] p-4 w-[20rem] "
              required
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="bg-[rgb(241,245,244)] p-4"
              required
            />
            <input
              type="password"
              placeholder="password"
              className="bg-[rgb(241,245,244)] p-4"
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              className="bg-[rgb(241,245,244)] p-4"
              required
            />
            <div className=" flex justify-center mt-[-10px] text-white">
              <button className=" bg-[rgb(62,180,158)] px-8 h-10 rounded-full">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={toggle ? "login active" : "login"}>
        <TiDeleteOutline
          className=" absolute left-[350px] top-[0px] bg-[red]"
          onClick={handleToggle}
        />
        <Login />
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import CreateTask from "./CreateTask";

const Dashboard = () => {
  const [swipe, setSwipe] = useState(false);
  const handleSwiped = () => setSwipe(!swipe);

  const [checked, setChecked] = useState(false);

  function handlChecked(e) {
    setChecked(e.target.checked);
  }

  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-col items-center gap-5 py-8 lg:w-[20%] w-[40%] bg-[rgb(62,180,158)] top-0 sticky h-[100vh] justify-between">
          <div className=" gap-3 lg:hidden flex flex-col">
            <p>welcome</p>
            <img src="" alt=" dp" />
            <p> Your Name</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[24px] lg:text-[30px]">To Do Task</p>
            <button
              onClick={handleSwiped}
              className="border-2 rounded-full lg:px-8 text-white"
            >
              Create Task
            </button>
          </div>

          <button className="border-2 rounded-full px-8 text-white">
            <Link to='/'>Log out</Link>
          </button>
        </div>

        <div className="lg:w-[80%] w-[60%]">
          <div className="flex flex-col lg:flex-row justify-between p-2 lg:p-10 bg-[rgb(62,180,158) bg-[#000] text-white fixed lg:w-[80%] w-[60%]">
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <p className="text-[20px] ">Dashboard</p>

              <div className="flex bg-[rgb(241,245,244) border-2 rounded-md justify-center">
                <input
                  type="text"
                  placeholder="search"
                  className=" p-1 text-black w-[100%]"
                />
                <button>
                  <IoSearchOutline />
                </button>
              </div>
            </div>
            <div className=" gap-3 hidden lg:flex">
              <img src="" alt=" dp" />
              <p>Your Name</p>
            </div>
          </div>

          <div className=" flex flex-col items-center p-5 mt-32">
            <p className=" text-[30px] ">All Tasks</p>
            <div className="flex flex-col lg:grid lg:grid-cols-2 mt-10 gap-5">
              <div className=" flex flex-col gap-5 items-cente">
                <p>watch match</p>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum aperiam nisi molestias voluptatibus voluptas obcaecati
                  adipisci. Dolores consectetur in excepturi necessitatibus
                  optio numquam dignissimos, amet possimus quidem, et sequi
                  mollitia.
                </p>
                <div className=" flex gap-5 justify-around" key="">
                  <div className="items-center flex flex-col-reverse">
                    <input
                      type="checkbox"
                      value="test"
                      onChange={handlChecked}
                    />
                    {checked ? (
                      <p className="text-[green] text-[18px]">
                        successfully completed
                      </p>
                    ) : (
                      <p>Mark completed?</p>
                    )}
                  </div>
                  <div className="flex text-[30px] ga">
                    {" "}
                    <TiEdit className="text-[blue] " />
                    <RiDeleteBin6Line className=" text-[red]" />
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-5 items-center">
                <p>wash plates</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum aperiam nisi molestias voluptatibus voluptas obcaecati
                  adipisci. Dolores consectetur in excepturi necessitatibus
                  optio numquam dignissimos, amet possimus quidem, et sequi
                  mollitia.
                </p>
                <div className=" flex gap-5 justify-around">
                  <div className="items-center flex flex-col-reverse">
                    <input
                      type="checkbox"
                      value="test"
                      onChange={handlChecked}
                    />
                    {checked ? (
                      <p className="text-[green] text-[18px]">
                        {" "}
                        successfully completed
                      </p>
                    ) : (
                      <p>Mark completed?</p>
                    )}
                  </div>
                  <div className="flex text-[30px] ga">
                    {" "}
                    <TiEdit className="text-[blue] " />
                    <RiDeleteBin6Line className=" text-[red]" />
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-5 items-center">
                <p>cook food</p>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum aperiam nisi molestias voluptatibus voluptas obcaecati
                  adipisci. Dolores consectetur in excepturi necessitatibus
                  optio numquam dignissimos, amet possimus quidem, et sequi
                  mollitia.
                </p>
                <div className=" flex gap-8 text-[50px]">
                  <TiEdit className="text-[blue] " />
                  <RiDeleteBin6Line className=" text-[red]" />
                </div>
              </div>
              <div className=" flex flex-col gap-5 items-center">
                <p>fill gas</p>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum aperiam nisi molestias voluptatibus voluptas obcaecati
                  adipisci. Dolores consectetur in excepturi necessitatibus
                  optio numquam dignissimos, amet possimus quidem, et sequi
                  mollitia.
                </p>
                <div className=" flex gap-8  text-[50px]">
                  <TiEdit className="text-[blue] " />
                  <RiDeleteBin6Line className=" text-[red]" />
                </div>
              </div>
              <div className=" flex flex-col gap-5 items-center">
                <p>go shopping</p>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum aperiam nisi molestias voluptatibus voluptas obcaecati
                  adipisci. Dolores consectetur in excepturi necessitatibus
                  optio numquam dignissimos, amet possimus quidem, et sequi
                  mollitia.
                </p>
                <div className=" flex gap-8 text-[50px]">
                  <TiEdit className="text-[blue] " />
                  <RiDeleteBin6Line className=" text-[red]" />
                </div>
              </div>
              <div className=" flex flex-col gap-5 items-center">
                <p>go to school</p>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum aperiam nisi molestias voluptatibus voluptas obcaecati
                  adipisci. Dolores consectetur in excepturi necessitatibus
                  optio numquam dignissimos, amet possimus quidem, et sequi
                  mollitia.
                </p>
                <div className=" flex gap-8 text-[50px]">
                  <TiEdit className="text-[blue] " />
                  <RiDeleteBin6Line className=" text-[red]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={swipe ? "create active" : "create"}>
        <TiDeleteOutline
          className=" absolute left-[330px] top-[43px] bg-[red]  text-[white]"
          onClick={handleSwiped}
        />
        <CreateTask />
      </div>
    </>
  );
};

export default Dashboard;

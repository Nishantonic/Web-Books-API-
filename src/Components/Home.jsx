import React from "react";
import { Link } from "react-router-dom";
// import "./tailwind.css";

const BookAnimation = () => {
  return (
    <div className="h-screen flex justify-center bg-blue-300 items-center relative ">
      <div className=" flex flex-col justify-censter items-center  h-4/5  md:w-2/5 xl:1/2 bg-white transform-style rotate-y-180 animate-open-book ">
        <h1 className=" text-4xl text-bold top-6 text-blue-900 font-bold underline">
          Books Store
        </h1>
        <img
          className="  h-64 w-64 top-8"
          src="..\src\assets\icon1.png"
          alt=""
        />
        <Link to="/books">
          <button className="relative bottom-5 bg-blue-500 text-white h-8 w-32 rounded-2xl">
            Open Book
          </button>
        </Link>
        <h6 className="text-xs flex p-1 border-t-2 w-72">
          A Learning Manegement System - web development product app to manage
          books record.
        </h6>
      </div>
    </div>
  );
};

export default BookAnimation;
{
  /* 
//    <div className="absolute inset-0 bg-blue-800 backface-hidden"></div>
// <div className="absolute inset-0 bg-green-900 transform rotate-y-180 backface-hidden">
//   <div className="p-4 absolute z-50 inset-0 bg-black">
// <h1 className="text-2xl font-bold absolute z-30">Book Title</h1>
//     <p className="mt-2">This is the content of the book.</p>
//   </div> */
}
{
  /* <div className="flex justify-center items-center h-screen bg-gray-300">
<div className="relative w-80 h-96 perspective">
  <div className="absolute inset-0 bg-red-900 flex justify-center space-x-reverse">
    <h1 className="bg-green-900 ">Hello world</h1>
  </div>
  <div className="absolute inset-0 transform-style preserve-3d animate-open-book">
    <div className="absolute inset-0 bg-white shadow-lg transform-style preserve-3d"></div>
  </div>
  <div className="absolute inset-0 bg-yellow-400 transform rotate-y-180 backface-hidden -z-10"></div>
</div>
</div> */
}
// </div>

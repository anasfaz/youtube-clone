import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

// 3 section
// 1 -menu toggle button logo
// 2 - search bar mic
// 3- account notification icons


function Head() {

  const dispatch=useDispatch()

  const toggleMenuHandler = () => {
     dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col items-center w-full h-16 bg-white ">
      <div className="flex ml-10">
        <img
          onClick={()=>toggleMenuHandler()}
          className="p-2 rounded-full h-12 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
        />
        <img
          className="bg-transparent p-2 h-12"
          alt="logo"
          src="https://as1.ftcdn.net/v2/jpg/05/07/46/84/1000_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </div>
      <div className="px-10">
        <input className="border h-10 w-3/4 border-gray-700 mr-[2px] p-2 rounded-l-full "
          type="text" placeholder="search" />
        <button className="border h-10 border-gray-700 p-2 rounded-r-full bg-gray-300 hover:bg-gray-400 hover:text-white">Search</button>
      </div>
      <div>
        <div className="flex justify-end mr-7">
          <img
            className="h-10"
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Head;

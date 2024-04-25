import React from "react";
import { useSelector } from "react-redux";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return
  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="m-2 w-[13%] ">
      <ul className="p-2 font-bold">
        <li className="font-bold py-3">
          <span>icon</span> <span>Home</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>shorts</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>Subscription</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>Youtube Music</span>
        </li>
      </ul>
      <hr className="border" />
      <h1 className="font-bold ml-2 py-2">You</h1>
      <ul className="p-2 font-bold">
        <li className="font-bold py-3">
          <span>icon</span> <span>Home</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>shorts</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>Subscription</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>Youtube Music</span>
        </li>
      </ul>
      <hr className="border" />
      <ul className="p-2 font-bold">
        <li className="font-bold py-3">
          <span>icon</span> <span>Home</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>shorts</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>Subscription</span>
        </li>
        <li className="py-3">
          <span>icon</span> <span>Youtube Music</span>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SideBar;

import React from "react";
import { NavLink } from "react-router-dom";

function NavTop() {
  return (
    <div className="fixed top-0 left-0 h-12 w-screen flex flex-col bg-slate-100 dark:bg-zinc-900">
      <h1 className="text-4xl dark:text-white text-center">
        <NavLink to="/" className="font-EduVICWANTBeginner">
          Whet
          <span className="text-4xl font-metamasie dark:text-white">SLi</span>
        </NavLink>
      </h1>
    </div>
  );
}

export default NavTop;

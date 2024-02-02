import React from "react";

import Ellipse from "../assests/icons/combined-Shape.png";
function Header({ title }) {
  return (
    <main className="">
      <div className="flex items-center justify-between  md:w-[362px] bg-zinc-100 rounded-[15px] px-4 py-3">
        <div>
          <p className="font-normal">{title}</p>
        </div>
        <div>
          <img src={Ellipse} alt="Icon" />
        </div>
      </div>
    </main>
  );
}

export default Header;

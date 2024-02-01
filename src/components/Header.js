import React from "react";
import Ellipse from "../assests/icons/combined-Shape.png";

function Header() {
  return (
    <main>
      <div className="flex items-center justify-between bg-zinc-100 rounded-lg px-4 py-3 w-[288px]  md:w-[362px] ">
        <div>
          <p className="font-normal">Design</p>
        </div>
        <div>
          <img src={Ellipse} alt="Ellipse" />
        </div>
      </div>
    </main>
  );
}

export default Header;

import React from "react";
import Ellipse from "../assests/icons/Combined-Shape.png";

function Header() {
  return (
    <main >
      <div className="flex items-center justify-between w-[362px]  bg-zinc-100 rounded-lg px-4 py-3   ">
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








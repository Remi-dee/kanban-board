import React from "react";
import Ellipse from "../assests/icons/Combined-Shape.png";

function Header() {
  return (
    <div>
      <div className="flex justify-between w-[362px]  bg-zinc-100 rounded-[25px]">
        <p>Design</p>
        <div>
          <img src={Ellipse} alt="Ellipse" />
        </div>
      </div>
    </div>
  );
}

export default Header;

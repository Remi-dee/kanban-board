import React from "react";
import Heart from "../../assests/icons/Heart.png";
import Globe from "../../assests/icons/globe-2-outline.png";
import Hard from "../../assests/icons/Hard.png";

function BottomMenu() {
  return (
    <div>
      <div>
        <h1 className=' className="text-black text-[26px] font-medium'>
          Brackets
        </h1>

        <div className="flex items-center space-x-[9px] ">
          <div className="">
            <img src={Heart} alt="Logo" />
          </div>
          <div className="flex space-x-2.5">
            <div class="border-l-[1px] opacity-10 border-black h-8 hidden md:block"></div>
            <div className=" flex items-center  space-x-[4px] ">
              <img src={Globe} alt="Logo" className="w-[19px] h-[19px]" />
              <span className="opacity-10 text-black text-lg font-normal ">
                Public
              </span>
            </div>
          </div>
          <div className="">
            <img src={Hard} alt="Hard Drive" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomMenu;

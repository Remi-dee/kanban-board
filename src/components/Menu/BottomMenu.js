import React from "react";
import Heart from "../../assests/icons/Heart.png";
import Globe from "../../assests/icons/globe-2-outline.png";
import Hard from "../../assests/icons/Hard.png";
import Oval from "../../assests/avatars/Oval.png";
import Oval2 from "../../assests/avatars/OvalCopy2.png";
import Oval3 from "../../assests/avatars/OvalCopy3.png";
import Oval4 from "../../assests/avatars/OvalCopy4.png";

function BottomMenu() {
  return (
    <div>
      <div className="md:flex px-3 py-5 md:px-[30px] md:py-[30px]">
        <div className="mb-[9px]  mr-[100px]">
          <h1 className=' className="text-black text-[26px] font-medium'>
            Brackets
          </h1>
        </div>

        <div className="flex w-full ">
          <div className="flex items-center space-x-[9px]  ">
            <div className="">
              <img src={Heart} alt="Logo" />
            </div>
            <div className="flex space-x-2.5">
              <div class="border-l-[1px] opacity-10 border-black h-8 "></div>
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

          <div className="flex space-x-[10px] md:space-x-[109px] ml-auto">
            <div className="flex ">
              <div>
                <img src={Oval} alt="Person 1" />
              </div>

              <div className="-ml-[26px] md:-ml-5 ">
                <img src={Oval2} alt="Person 2" />
              </div>

              <div className="-ml-[26px] md:-ml-5">
                <img src={Oval3} alt="Person 3" />
              </div>

              <div className="-ml-[26px] md:-ml-5 ">
                <img src={Oval4} alt="Person 4" />
              </div>
              <div className="flex bg-black -ml-[26px] md:-ml-5 text-xs font-normal text-white  p-2 rounded-full w-[40px] h-[40px] items-center justify-center">
                44+
              </div>
            </div>
            <div>
              <h2 className=' className="text-black text-[26px] font-normal'>
                Menu
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomMenu;

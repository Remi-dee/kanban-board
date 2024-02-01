import React from "react";
import Heart from "../../assests/icons/heart.png";
import Globe from "../../assests/icons/globe-2-outline.png";

import Oval from "../../assests/avatars/oval.png";
import Oval2 from "../../assests/avatars/ovalCopy2.png";
import Oval3 from "../../assests/avatars/ovalCopy3.png";
import Oval4 from "../../assests/avatars/ovalCopy4.png";

function BottomMenu() {
  return (
    <main>
      <div className="md:flex px-4 py-5 md:px-[30px] md:py-[30px]">
        <div className="mb-[9px]  mr-[100px]">
          <h1 className=' className="text-black text-[26px] font-medium'>
            Brackets
          </h1>
        </div>

        <div className="flex w-full ">
          <div className="flex items-center space-x-[7px] md:space-x-[10px]  ">
            <div className="">
              <img src={Heart} alt="Logo" />
            </div>
            <div class="border-l-[1px] opacity-10 border-black h-8 "></div>
            <div className="flex space-x-2.5">
              <div className=" flex items-center  space-x-[4px] ">
                <img src={Globe} alt="Logo" className="w-[19px] h-[19px]" />
                <span className="opacity-10 text-black md:text-lg  font-normal ">
                  Publi
                </span>
              </div>
            </div>
            <div class="border-l-[1px] opacity-10 border-black h-8 "></div>
            <div>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4588 6.9775L11.8146 1.68917C11.4118 0.882338 10.5868 0.373232 9.68501 0.375005H5.31501C4.41322 0.373232 3.58823 0.882338 3.18543 1.68917L0.541262 6.9775C0.43098 7.19877 0.374043 7.44278 0.375012 7.69V12.25C0.375012 13.5617 1.43834 14.625 2.75001 14.625H12.25C13.5617 14.625 14.625 13.5617 14.625 12.25V7.69C14.626 7.44278 14.569 7.19877 14.4588 6.9775ZM4.60251 2.39375C4.73794 2.12498 5.01405 1.95624 5.31501 1.95834H9.68501C9.98597 1.95624 10.2621 2.12498 10.3975 2.39375L12.5508 6.70834H2.44918L4.60251 2.39375ZM2.75001 13.0417H12.25C12.6872 13.0417 13.0417 12.6872 13.0417 12.25V8.29167H1.95835V12.25C1.95835 12.6872 2.31279 13.0417 2.75001 13.0417Z"
                  fill="currentColor"
                />
              </svg>
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
    </main>
  );
}

export default BottomMenu;

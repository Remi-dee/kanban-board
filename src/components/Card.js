import React from "react";
import MessageBar from "../assests/icons/message-square-outline.png";
import Heart from "../assests/icons/Heart.png";
import Attach from "../assests/icons/attach-outline.png";
import Oval from "../assests/avatars/Oval.png";
import Oval2 from "../assests/avatars/OvalCopy2.png";
import Oval3 from "../assests/avatars/OvalCopy3.png";
import Oval4 from "../assests/avatars/OvalCopy4.png";
import Plus from "../assests/icons/plus.png";

function Card() {
  return (
    <main>
      <div className="bg-zinc-100 rounded-lg px-4 py-3 w-[362px] ">
        <div className="flex space-x-2">
          <div className="bg-yellow-500 rounded-md  w-[60px] h-[8px]"></div>
          <div className="bg-yellow-500 rounded-md  w-[60px] h-[8px]"></div>
          <div className="bg-yellow-500 rounded-md  w-[60px] h-[8px]"></div>
          <div className="bg-yellow-500 rounded-md  w-[60px] h-[8px]"></div>
        </div>

        <div className="mt-[9px]">
          <h3 className="text-base leading-6 ">
            Home business advertising ideas
          </h3>
          <p className="text-xs leading-5  opacity-40">
            Successful businesses know the importance of building and
            maintaining good working.
          </p>
        </div>

        <div className="flex justify-between mt-[26px]">
          <div className="flex ">
            <div>
              <img src={Oval} alt="Person 1" className="w-[24px] md:w-[30px]" />
            </div>

            <div className="-ml-[14px]  md:-ml-[17px] ">
              <img
                src={Oval2}
                alt="Person 2"
                className="w-[24px] md:w-[30px]"
              />
            </div>

            <div className="-ml-[14px] md:-ml-[17px] ">
              <img
                src={Oval3}
                alt="Person 3"
                className="w-[24px] md:w-[30px]"
              />
            </div>

            <div className="-ml-[14px] md:-ml-[17px] ">
              <img
                src={Oval4}
                alt="Person 4"
                className="w-[24px] md:w-[30px]"
              />
            </div>
            <div className="flex items-center justify-center bg-black md:-ml-[17px] -ml-[14px] text-xl font-normal text-white  p-2 rounded-full w-[24px] md:w-[30px] h-[24px] md:h-[30px] ">
            <img
                src={Plus}
                alt="Plus"
                className="w-[24px] md:w-[30px]"
              />
            </div>
          </div>

          <div className="flex  text-black text-opacity-20 space-x-[23px]">
            <div className="flex items-center space-x-[1px]">
              <span>33</span>
              <div>
                <img src={MessageBar} alt="Message" />
              </div>
            </div>
            <div className="flex items-center space-x-[1px]">
              <span>45</span>
              <div>
                <img src={Heart} alt="Like" />
              </div>
            </div>
            <div className="flex items-center space-x-[1px]">
              <span>33</span>
              <div>
                <img src={Attach} alt="Like" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;

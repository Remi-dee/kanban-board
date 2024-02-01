import React from "react";
import MessageBar from "../assests/icons/message-square-outline.png";
import Heart from "../assests/icons/Heart.png";
import Attach from "../assests/icons/attach-outline.png";

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

        <div className="flex">
          <div></div>

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

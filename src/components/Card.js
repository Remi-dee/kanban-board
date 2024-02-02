import React from "react";

import Plus from "../assests/icons/plus.png";

function Card({
  imageUrl,
  title,
  description,
  avatars,
  stats,
  avatarDivCount,
  avatarDivColors,
}) {
  return (
    <main>
      <div className="bg-zinc-100  rounded-lg px-4 py-4 md:py-5 md:px-5 md:w-[362px]">
        {imageUrl && (
          <div className="mb-3 md:mb-4 ">
            <img src={imageUrl} alt={title} className="4 w-[380px]" />
          </div>
        )}

        <div className="flex space-x-2">
          {Array.from({ length: avatarDivCount }).map((_, index) => (
            <div
              key={index}
              className={`${avatarDivColors[index]} rounded-md w-[60px] h-[8px]`}
            ></div>
          ))}
        </div>

        <div className="mt-[6px] md:mt-[9px]">
          <h3 className="text-base leading-6">{title}</h3>
          <p className="text-xs leading-5 opacity-40">{description}</p>
        </div>

        <div className="flex justify-between mt-[26px]">
          <div className="flex ">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={index > 0 ? "-ml-[14px] md:-ml-[17px]" : ""}
              >
                <img
                  src={avatar}
                  alt={`Person ${index + 1}`}
                  className={`w-[24px] md:w-[30px]`}
                />
              </div>
            ))}
            <div className="flex items-center justify-center bg-black md:-ml-[17px] -ml-[14px] text-xl font-normal text-white p-2 rounded-full w-[24px] md:w-[30px] h-[24px] md:h-[30px] ">
              <img
                src={Plus}
                alt="Plus"
                className="w-[9.6px] md:w-[12px] h-[9.6px] md:h-[12px]"
              />
            </div>
          </div>

          <div className="flex text-black text-opacity-20 space-x-[23px]">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-[1px]">
                <span>{stat.value}</span>
                <div>
                  <img src={stat.icon} alt={stat.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;

import React from "react";

import Logo from "../../assests/logo/Logo.png";
import Trello from "../../assests/icons/trello-mark-blue.png";
import PlusCircle from "../../assests/icons/plus-circle-outline.png";
import AlertCircle from "../../assests/icons/alert-circle-outline.png";
import BellOutline from "../../assests/icons/bell-outline.png";
import Avatar from "../../assests/avatars/Oval.png";
import SearchIconBlack from "../SearchIconBlack";
import SearchIcon from "../SearchIcon";

function TopMenu() {
  return (
    <main>
      <div className="flex items-center justify-between border-b-2 border-opacity-10 border-black px-3 py-4 md:px-[30px] md:py-[9px]">
        <div className="flex items-center space-x-[20px] ">
          <div className="hidden md:block">
            <img src={Logo} alt="Logo" />
          </div>
          <div class="border-l-2 opacity-10 border-black h-8 hidden md:block"></div>
          <div className="flex items-center gap-x-[7px] md:gap-x-[5px]">
            <img src={Trello} alt="Logo" className="m-0" />
            <p className="hidden md:block">Boards</p>
            <div className="md:hidden block">
              <SearchIcon />
            </div>
          </div>

          <div class="hidden md:block border-l-2 opacity-10 border-black h-8"></div>
          <div className="hidden md:block md:relative">
            <input className="w-[512px] h-[30px] bg-zinc-100 rounded-[25px] pl-10" />
            <div className="absolute right-[15px] top-[7px]">
              <SearchIconBlack />
            </div>
          </div>
        </div>
        <div className="flex space-x-[10px] md:space-x-[30px] items-center">
          <img src={PlusCircle} className="w-5 h-5" alt="PlusCircle" />
          <img src={AlertCircle} className="w-5 h-5" alt="AlertCircle" />
          <img src={BellOutline} className="w-5 h-5" alt="BellOutline" />

          <img
            src={Avatar}
            className="md:w-[40px] md:h-[40px]  w-[30px] h-[30px]"
            alt="Avatar"
          />
        </div>
      </div>
    </main>
  );
}

export default TopMenu;

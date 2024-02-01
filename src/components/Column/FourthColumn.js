import React from "react";
import Card from "../Card";
import MessageBar from "../../assests/icons/message-square-outline.png";
import Heart from "../../assests/icons/heart.png";
import Attach from "../../assests/icons/attach-outline.png";

import Oval8 from "../../assests/avatars/ovalCopy8.png";
import Oval2 from "../../assests/avatars/ovalCopy2.png";

import Photo1 from "../../assests/images/photo1.png";
import Header from "../Header";

function FourthColumn() {
  const dynamicColors1 = ["bg-blue-500", "bg-red-500", "bg-purple-600"];
  const dynamicColors2 = ["bg-blue-500", "bg-red-500", "bg-teal-500"];

  return (
    <div className="flex flex-col space-y-2.5 mb-9 md:mb-0">
      <Header title={"Test"} />
      <Card
        title="Home business advertising ideas"
        description="Successful businesses know the importance of building and maintaining good working."
        avatarDivCount={3}
        avatars={[Oval8]}
        avatarDivColors={dynamicColors1}
        stats={[
          { value: 78, icon: MessageBar, label: "Message" },
          { value: 45, icon: Heart, label: "Like" },
          { value: 12, icon: Attach, label: "Attachment" },
        ]}
      />

      <Card
        title="Home business advertising ideas"
        description="Successful businesses know the importance of building and maintaining good working."
        avatars={[Oval8]}
        avatarDivCount={3}
        avatarDivColors={dynamicColors1}
        stats={[
          { value: 78, icon: MessageBar, label: "Message" },
          { value: 45, icon: Heart, label: "Like" },
          { value: 12, icon: Attach, label: "Attachment" },
        ]}
      />

      <Card
        imageUrl={Photo1}
        title="Cosmetic surgery abroad making the right choice"
        description=""
        avatars={[Oval8, Oval2]}
        avatarDivCount={4}
        avatarDivColors={dynamicColors2}
        stats={[
          { value: 54, icon: MessageBar, label: "Message" },
          { value: 16, icon: Heart, label: "Like" },
          { value: 33, icon: Attach, label: "Attachment" },
        ]}
      />

      <div className="flex border border-dashed border-gray-300 rounded-lg  w-[408px] md:w-[362px] h-[100px] md:h-[160px] items-center justify-center ">
        + Add new card
      </div>
    </div>
  );
}

export default FourthColumn;

import React from "react";
import Card from "../Card";
import Header from "../Header";
import MessageBar from "../../assests/icons/message-square-outline.png";
import Heart from "../../assests/icons/heart.png";
import Attach from "../../assests/icons/attach-outline.png";
import Oval8 from "../../assests/avatars/ovalCopy8.png";

import Oval7 from "../../assests/avatars/ovalCopy7.png";
import Oval2 from "../../assests/avatars/ovalCopy2.png";
import Photo1 from "../../assests/images/photo1.png";

function ThirdColumn() {
  const dynamicColors1 = ["bg-yellow-500", "bg-teal-500"];
  const dynamicColors2 = [
    "bg-blue-500",
    "bg-red-500",
    "bg-purple-600",
    "bg-teal-500",
  ];

  return (
    <div className="flex flex-col space-y-2.5 mb-9 md:mb-0">
      <Header title={"Trello"} />
      <Card
        title="Old fashioned recipe for preventing allergies and chemical sensitivities"
        description=""
        avatars={[Oval7]}
        avatarDivCount={1}
        avatarDivColors={dynamicColors1}
        stats={[
          { value: 13, icon: MessageBar, label: "Message" },
          { value: 14, icon: Heart, label: "Like" },
          { value: 34, icon: Attach, label: "Attachment" },
        ]}
      />

      <Card
        title="Home business advertising ideas"
        description="Successful businesses know the importance of building and maintaining good working."
        avatars={[Oval8, Oval2]}
        avatarDivCount={4}
        avatarDivColors={dynamicColors2}
        stats={[
          { value: 23, icon: MessageBar, label: "Message" },
          { value: 12, icon: Heart, label: "Like" },
          { value: 43, icon: Attach, label: "Attachment" },
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

      <div className="flex border border-dashed border-gray-300 rounded-lg  w-[288px] md:w-[362px] h-[100px] md:h-[160px] items-center justify-center ">
        + Add new card
      </div>
    </div>
  );
}

export default ThirdColumn;

import React from "react";
import Card from "../Card";
import MessageBar from "../../assests/icons/message-square-outline.png";
import Heart from "../../assests/icons/heart.png";
import Attach from "../../assests/icons/attach-outline.png";

import Oval8 from "../../assests/avatars/ovalCopy8.png";

import Photo1 from "../../assests/images/photo1.png";
import Header from "../Header";

function SecondColumn() {
  const dynamicColors1 = ["bg-blue-500", "bg-red-500", "bg-purple-600"];

  return (
    <div className="flex flex-col space-y-2.5">
      <Header title={"Design"} />
      <Card
        title="Home business advertising ideas"
        description="Successful businesses know the importance of building and maintaining good working."
        avatarDivCount={3}
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
    </div>
  );
}

export default SecondColumn;

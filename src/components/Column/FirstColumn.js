import React from "react";
import Card from "../Card";
import Header from "../Header";
import MessageBar from "../../assests/icons/message-square-outline.png";
import Heart from "../../assests/icons/heart.png";
import Attach from "../../assests/icons/attach-outline.png";

import Oval7 from "../../assests/avatars/ovalCopy7.png";

import Photo1 from "../../assests/images/photo1.png";

function FirstColumn() {
  return (
    <div className="flex flex-col space-y-2.5">
      <Header />
      <Card
        imageUrl={Photo1}
        title="Home business advertising ideas"
        description="Successful businesses know the importance of building and maintaining good working."
        avatars={[ Oval7]}
        avatarDivCount = {1}
        stats={[
          { value: 33, icon: MessageBar, label: "Message" },
          { value: 45, icon: Heart, label: "Like" },
          { value: 33, icon: Attach, label: "Attachment" },
        ]}
      />
    </div>
  );
}

export default FirstColumn;

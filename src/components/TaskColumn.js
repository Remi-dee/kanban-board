import React from "react";

import FirstColumn from "./Column/FirstColumn";
import SecondColumn from "./Column/SecondColumn";
import ThirdColumn from "./Column/ThirdColumn";
import FourthColumn from "./Column/FourthColumn";

function TaskColumn() {
  return (
    <main className="md:flex  md:space-x-[30px] mx-4 my-5 md:mx-[30px] md:my-[30px]">
      <FirstColumn />
      <SecondColumn />
      <ThirdColumn />
      <FourthColumn />
    </main>
  );
}

export default TaskColumn;

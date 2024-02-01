import React from "react";

import FirstColumn from "./Column/FirstColumn";

function TaskColumn() {
  return (
    <main className="flex flex-col space-y-2.5 mx-4 my-5 md:mx-[30px] md:my-[30px]">
      <FirstColumn />
    </main>
  );
}

export default TaskColumn;

import React from "react";
import Header from "./Header";
import Card from "./Card";

function TaskColumn() {
  return (
    <main className="flex flex-col space-y-2.5 mx-4 my-5 md:mx-[30px] md:my-[30px]">
      <Header />
      <Card />
    </main>
  );
}

export default TaskColumn;

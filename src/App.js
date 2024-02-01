import "./App.css";

import Navbar from "./components/Navbar";
import TaskColumn from "./components/TaskColumn";

function App() {
  return (
    <div className="  max-w-[700px] md:max-w-[1920px]">
      <Navbar />
      <TaskColumn />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TaskColumn from "./components/TaskColumn";

function App() {
  return (
    <div>
      <Navbar />
      <TaskColumn/>
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "12/2/2002",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "13/2/2002",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "14/2/2002",
      reminder: false,
    },
    {
      id: 4,
      text: "Cinema Day",
      day: "15/2/2002",
      reminder: false,
    },
    {
      id: 5,
      text: "Weekend FootBall",
      day: "16/2/2002",
      reminder: true,
    },
  ]);

  // Delete function
  const deleteTask = (id) => {
    console.log(id);
  };
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

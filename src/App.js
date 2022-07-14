import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { TbMoodEmpty } from "react-icons/tb";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "12/8/2022",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "13/8/2022",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "14/8/2022",
      reminder: false,
    },
    {
      id: 4,
      text: "Cinema Day",
      day: "15/8/2022",
      reminder: false,
    },
    {
      id: 5,
      text: "Weekend FootBall",
      day: "16/8/2022",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder toggle
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h1
          style={{
            textAlign: "center",
            marginTop: "60px",
            color: "#ff5555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TbMoodEmpty style={{ marginRight: "10px" }} />
          No Task to do
        </h1>
      )}
    </div>
  );
}

export default App;

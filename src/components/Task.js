import { AiFillDelete } from "react-icons/ai";
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <AiFillDelete
          color="#ff5555"
          cursor="pointer"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

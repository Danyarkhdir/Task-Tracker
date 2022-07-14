import { AiFillDelete } from "react-icons/ai";
import { BsAlarmFill } from "react-icons/bs";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <AiFillDelete
          color="#ff5555"
          cursor="pointer"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <div className="date">
        <p>{task.day}</p>
        {task.reminder ? <BsAlarmFill /> : null}
      </div>
    </div>
  );
};

export default Task;

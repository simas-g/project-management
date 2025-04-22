import { useState } from "react";

export default function NewTask({onDeleteTask, onAddTask}) {
  const [task, setTask] = useState("");
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleClick() {
    if(task.trim() ==="" ) {
        return
    }
    onAddTask(task)
    setTask('')
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={task}
        type="text"
        className="w-64 py-1 px-2 rounded-sm bg-stone-200"
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
}

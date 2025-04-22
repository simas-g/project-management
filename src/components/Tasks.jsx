import NewTask from "./NewTask";
export default function Tasks({ onDeleteTask, onAddTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onDeleteTask={onDeleteTask} onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-otne-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between m-4">
              <span>{task.text}</span>
              <button onClick={() => onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

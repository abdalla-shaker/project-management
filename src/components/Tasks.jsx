import NewTask from "./NewTask";

import SecondaryButton from "./re_usable components/SecondaryButton";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section className="w-full ">
      <h2 className="text-4xl font-semibold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {tasks.length === 0 ? (
        <p className="font-medium mt-8">
          This project doesn't have any tasks yet.
        </p>
      ) : (
        <div className="mt-8 w-full" id="taskList">
          <ul className="p-10 bg-stone-300">
            {tasks.map((task) => (
              <li className="flex justify-between items-center" key={task.id}>
                <p className="font-medium text-xl text-stone-900">
                  {task.text}
                </p>
                <SecondaryButton
                  hoverColor="hover:text-stone-500"
                  fontWeight="font-bold"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Clear
                </SecondaryButton>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

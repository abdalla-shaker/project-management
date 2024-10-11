import { useState } from "react";

import SecondaryButton from "./re_usable components/SecondaryButton";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEneteredTask] = useState("");

  const handleChange = (event) => {
    setEneteredTask(event.target.value);
  };

  const handleAddTask = () => {
    if (enteredTask.trim === "") {
      return;
    }
    onAdd(enteredTask);
    setEneteredTask("");
  };

  return (
    <div className="flex gap-2 items-center mt-4" id="addTask">
      <input
        type="text"
        name="task"
        id="task"
        onChange={handleChange}
        value={enteredTask}
        className="bg-stone-400 p-1 pl-3 h-fit w-1/2 text-stone-800"
      />
      <SecondaryButton
        hoverColor="hover:text-stone-500"
        onClick={handleAddTask}
      >
        Add Task
      </SecondaryButton>
    </div>
  );
}

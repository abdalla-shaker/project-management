import { useState, useRef } from "react";

import Tasks from "./Tasks.jsx";

import SecondaryHeader from "./re_usable components/SecondaryHeader.jsx";
import SecondaryButton from "./re_usable components/SecondaryButton.jsx";

export default function ProjectDetails({
  project,
  deleteProject,
  handleAddTasks,
  handleDeleteTasks,
  styling,
  tasks,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section
      className={`${styling} w-1/3 text-left absolute left-1/2 -translate-x-1/3`}
    >
      <div
        className="w-full flex justify-between items-center"
        id="header-container"
      >
        <SecondaryHeader customFontSize="text-7xl">
          {project.title}
        </SecondaryHeader>
        <SecondaryButton
          hoverColor="hover:text-stone-400"
          onClick={deleteProject}
        >
          Delete
        </SecondaryButton>
      </div>
      <div className="w-full pl-1" id="project-details">
        <h3 className="text-lg opacity-60">{formattedDate}</h3>
        <p className="text-xl font-medium mt-5 whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
      <span className="line"></span>
      <Tasks
        onAddTask={handleAddTasks}
        onDeleteTask={handleDeleteTasks}
        tasks={tasks}
      />
    </section>
  );
}

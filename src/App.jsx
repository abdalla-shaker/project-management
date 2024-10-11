import { useState } from "react";

import Header from "./components/Header.jsx";
import NoSelectedProject from "./components/NoSelectedProject.jsx";
import SelectProject from "./components/SelectProject.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  const commonClasses =
    "h-full flex flex-col justify-center items-center gap-3";

  const handleAddTasks = (taskText) => {
    setProjectState((prevState) => {
      const newTask = {
        text: taskText,
        projectId: prevState.selectedProject,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTasks = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  };

  const handleProjectSelectionTab = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  };

  const handleCloseCreateProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );

  console.log(projectState);

  let content = (
    <ProjectDetails
      project={selectedProject}
      deleteProject={handleDeleteProject}
      styling={commonClasses}
      handleAddTasks={handleAddTasks}
      handleDeleteTasks={handleDeleteTasks}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProject === null) {
    content = (
      <SelectProject
        styling={commonClasses}
        onAdd={handleAddProject}
        closeCreateProject={handleCloseCreateProject}
      />
    );
  } else if (projectState.selectedProject === undefined) {
    content = (
      <NoSelectedProject
        handleClick={handleProjectSelectionTab}
        styling={commonClasses}
      />
    );
  }

  return (
    <>
      <Header
        createProjectTab={handleProjectSelectionTab}
        closeCreateProject={handleCloseCreateProject}
        listOfProjects={projectState.projects}
        selectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProject}
      />
      <main className="w-full flex justify-center items-center">{content}</main>
    </>
  );
}

export default App;

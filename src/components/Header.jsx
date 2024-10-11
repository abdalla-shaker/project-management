import PrimaryButton from "./re_usable components/PrimaryButton.jsx";
import SecondaryButton from "./re_usable components/SecondaryButton.jsx";

export default function Header({
  createProjectTab,
  closeCreateProject,
  listOfProjects,
  selectProject,
  selectedProjectId,
}) {
  return (
    <header className="h-full w-96 flex flex-col gap-8 bg-stone-900 text-stone-100 rounded-tr-3xl">
      <div className="header-container flex flex-col justify-left gap-8 w-3/4 ml-10 mt-20">
        <h1 className="font-bold text-3xl uppercase">
          <button onClick={closeCreateProject}>Your projects</button>
        </h1>
        <PrimaryButton additionalClasses="w-fit" onClick={createProjectTab}>
          + Add project
        </PrimaryButton>
        {listOfProjects.length > 0 && (
          <nav className="mt-4">
            <ul>
              {listOfProjects.map((project) => {
                let cssClasses = `py-3 px-5 rounded-md font-medium transition-all	 w-full text-left hover:text-stone-100 hover:bg-stone-800`;

                if (project.id === selectedProjectId) {
                  cssClasses += " bg-stone-800 text-stone-200";
                } else {
                  cssClasses += " text-stone-400";
                }

                return (
                  <li key={project.id} className="mb-3">
                    <button
                      className={cssClasses}
                      onClick={() => {
                        selectProject(project.id);
                      }}
                    >
                      {project.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

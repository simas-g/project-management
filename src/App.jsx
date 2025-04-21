import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSiderbar";
function App() {
  const [projectsState, setProjectsState] = useState({ selectedProjectId: undefined, projects: [] });
  function handleStartAddProject() {
    setProjectsState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    })
  }
  function handleAddProject(projectData) {
    setProjectsState(prev => {
      const newProject = {...projectData, id: Math.random()}
      return {
        ...prev, 
        projects: [...prev.projects, newProject]
      }
    })
  }
  let content;
  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;

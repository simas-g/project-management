import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSiderbar";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter(
          (tasks) => tasks.id !== id
        ),
      };
    });
  }
  function handleSelectProject(projectId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: projectId,
      };
    });
  }
  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prev) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => projectsState.selectedProjectId === project.id
  );
  let content = (
    <SelectedProject
      onDeleteTask={handleDeleteTask}
      onAddTask={handleAddTask}
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        selectedId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;

import "./App.css";
import FilterComponent from "./components/FilterComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import CardComponent from "./components/CardComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);

  // Function to handle adding new projects
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-12">
        <aside className="h-56 col-span-2">
          <SidebarComponent />
        </aside>
        <main className="min-h-svh col-span-10 flex flex-col bg-gray-300">
          <TopNavbarComponent />
          <div className="flex">
            <section className="flex col-span-7 w-9/12 h-full">
              <section>
                <DashboardComponent />
                <div className="flex justify-between mt-10">
                  {/* Pass handleAddProject to AddNewProjectComponent */}
                  <AssignmentsComponent projects={projects} />
                  <AddNewProjectComponent onAddProject={handleAddProject} />
                </div>
              </section>
            </section>
            {/* Learning Material */}
            <div className="w-3/12">
              <LearningMaterialsComponent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import React, { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setFilteredProjects((prevProjects) => [...prevProjects, newProject]);
  };

  const handleSearch = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredProjects(filtered);
  };

  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-12">
        <aside className="h-56 col-span-2">
          <SidebarComponent />
        </aside>
        <main className="min-h-svh col-span-10 flex flex-col bg-gray-300">
          <TopNavbarComponent onSearch={handleSearch} />
          <div className="flex justify-between ">
            <section className="flex col-span-7 w-8/12 h-full">
              <section>
                <DashboardComponent />
                <div className="flex justify-between mb-4 mt-10">
                  <h1 className="text-xl font-semibold">Assignments</h1>
                  <AddNewProjectComponent onAddProject={handleAddProject} />
                </div>
                <div className="flex justify-between overflow-auto h-[60vh]">
                  <AssignmentsComponent projects={filteredProjects} />   
                </div>
              </section>
            </section>
            {/* LEARNING MATERIAL */}
            <div className="w-3.5/12 mt-5">
              <LearningMaterialsComponent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
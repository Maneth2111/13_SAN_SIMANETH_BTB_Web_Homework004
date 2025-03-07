import React from "react";
import CardComponent from "./CardComponent"; 

export default function AssignmentsComponent({ projects }) {
  return (
    <div>
        <div className="grid grid-cols-3 gap-4"> 
          {projects.map((project, index) => (
            <CardComponent key={index} project={project} />
          ))}
        </div>      
    </div>
  );
}
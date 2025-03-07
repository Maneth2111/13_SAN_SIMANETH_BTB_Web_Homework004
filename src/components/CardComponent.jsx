import { EllipsisVertical } from "lucide-react";
import React from "react";



export default function CardComponent({ project }) {
  // CONVERT date = "Day, Month Date, Year"
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const progressColor = (progress) => {
    switch (progress) {
      case "100":
        return "bg-custom-sky-blue text-white"; 
      case "75":
        return "bg-custom-carrot text-white"; 
      case "50":
        return "bg-custom-yellow-500 text-black";
      case "25":
        return "bg-custom-pink text-black";
      default:
        return "bg-gray-200 text-black"; 
    }
  };
  // FOR DATE COLOR THAT MATCH WITH PROGRESS
  const dateColor = (color) =>{
    switch (color) {
      case "100":
        return "text-custom-sky-blue"; 
      case "75":
        return "text-custom-carrot"; 
      case "50":
        return "text-custom-yellow-500";
      case "25":
        return "text-custom-pink ";
      default:
        return "text-gray-200"; 
    }
  }
  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const difference = due - today;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };
  // COSTOM DUE DATE
  const formattedDueDate = formatDate(project.dueDate);
  const daysLeft = calculateDaysLeft(project.dueDate);
  const dueDateColorClass = dateColor(project.progress);
  return (
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between mb-5">
        <p className={`font-medium ${dueDateColorClass}`}>
          {formattedDueDate}
        </p>
        <EllipsisVertical size={20} color="#374957"/>
      </div>

      <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {project.name}
      </h5>
      <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
        {project.description}
      </p>
      <div className="w-full flex justify-between font-medium mb-1">
        <p>Progress</p>
        <p>{project.progress}%</p>
      </div>
      <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${progressColor(project.progress)} h-2.5 rounded-full`}
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <div className="flex justify-end">
        <p className="font-medium bg-light-gray py-1.5 rounded-lg max-w-28 text-center">
          {daysLeft} day{daysLeft !== 1 ? "s" : ""} left
        </p>
      </div> 
    </div>
    
  );
}
import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function AddNewProjectComponent({ onAddProject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    dueDate: "",
    progress: "",
    description: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    dueDate: '',
    progress: '',
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setErrorMessages({
      name: '',
      dueDate: '',
      progress: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const selectedDate = new Date(newProject.dueDate);

    // Reset error messages
    setErrorMessages({
      name: '',
      dueDate: '',
      progress: '',
    });

    // VALIDATE DATE
    if (selectedDate < today.setHours(0, 0, 0, 0)) {
      setErrorMessages((prev) => ({ ...prev, dueDate: "* Please choose the dateline of your project." }));
      return;
    }

    //  validate name
    if (!newProject.name) {
      setErrorMessages((prev) => ({ ...prev, name: "* Project name is required." }));
      return;
    }

    // validate progress if choose nothing
    if (!newProject.progress) {
      setErrorMessages((prev) => ({ ...prev, progress: "* Please select your project progress." }));
      return;
    }

    if (!newProject.description) {
      newProject.description = "You should make web design pack with 30 different poses and with other components on the internet as well.";
    }

    onAddProject(newProject);

    setNewProject({
      name: "",
      dueDate: "",
      progress: "",
      description: "",
    });

    toggleModal();
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-3 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center flex items-center gap-2"
        type="button"
      >
        <Plus size={22} /> <span className="text-base">New Project</span>
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ">
          <div className="relative p-4 w-full max-w-md bg-white rounded-2xl shadow-md dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
                Create New Project
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form className="p-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4">
                <div>
                  <label
                    htmlFor="projectName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="name"
                    value={newProject.name}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    placeholder="Type Project Name"
                  />
                  {errorMessages.name && <p className="text-red-600">{errorMessages.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="dueDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Due Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={newProject.dueDate}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                  {errorMessages.dueDate && <p className="text-red-600">{errorMessages.dueDate}</p>}
                </div>

                <div>
                  <label
                    htmlFor="progress"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Progress <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="progress"
                    name="progress"
                    value={newProject.progress}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  >
                    <option value="">Select Progress</option>
                    <option value="100">100%</option>
                    <option value="75">75%</option>
                    <option value="50">50%</option>
                    <option value="25">25%</option>
                  </select>
                  {errorMessages.progress && <p className="text-red-600">{errorMessages.progress}</p>}
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full p-2.5 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    placeholder="Write project description here"
                  ></textarea>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="text-white bg-custom-sky-blue hover:bg-custom-sky-blue-500 focus:ring-4 focus:outline-none focus:ring-custom-sky-blue-500 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
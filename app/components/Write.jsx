"use client";
import { ArrowDropDown, AttachFile, Person } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";

const Write = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

 
  const projects = ["Project A", "Project B", "Project C"];

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    console.log(dropdownRef.current);
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {

      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-lg w-full">
      <div className="flex w-full items-center justify-center space-x-5 font-RedHat font-semibold">
        <div>
          <Person className="border-2 p-1 text-4xl rounded-full" />
        </div>
        <textarea
          className="text-black p-2 rounded-xl outline-none border-2 cursor-text text-sm border-slate-500 w-full resize-none"
          placeholder="Write something"
          rows="2"
          style={{ maxHeight: "200px" }}
        />
      </div>
      <div className="flex items-center justify-between font-RedHat font-semibold text-sm space-y-4 relative">
        <div>
          <AttachFile />
        </div>
        <div className="space-x-2 flex" ref={dropdownRef}>
          <button
            className="py-1 px-4 rounded-full border-2 flex items-center border-slate-700"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedProject || "Projects"}
            <ArrowDropDown className="text-base" />
          </button>
          {showDropdown && (
            <ul className="absolute top-full mt-2 w-fit bg-white text-black rounded-lg shadow-lg">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleProjectSelect(project)}
                >
                  {project}
                </li>
              ))}
            </ul>
          )}
          <button className="py-1 px-5 rounded-full bg-green-600 drop-shadow-xl shadow-green-500">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;

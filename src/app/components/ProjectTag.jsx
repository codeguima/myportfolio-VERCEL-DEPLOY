import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white  bg-gradient-to-br from-primary-500 to-secondary-500" 
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3`}
      onClick={() => onClick(name)}
    >
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
      {name}
      </span>
     
    </button>
  );
};

export default ProjectTag;

import React from "react";
import Arrow from "@/components/Svg/Arrow/Arrow.js";

const ProjectBlock = ({ title, description, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
  >
    <div className="flex flex-col">
      <h4 className="font-medium text-neutral-900 dark:text-neutral-100">
        {title}
      </h4>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </div>
    <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
      <Arrow />
    </div>
  </a>
);

export default ProjectBlock;

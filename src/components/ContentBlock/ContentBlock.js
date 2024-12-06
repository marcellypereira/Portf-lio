import React from "react";
import Arrow from "@/components/Svg/Arrow/Arrow.js";

const ContentBlock = ({ title, description, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="flex bg-primary-head-onyx rounded border border-primary-head-mediumGray px-5 py-5 w-96">
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
    </div>
  </a>
);

export default ContentBlock;

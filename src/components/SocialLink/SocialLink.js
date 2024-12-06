import React from "react";

const SocialLink = ({ url, icon, text }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-primary-head-onyx px-2 py-1 rounded border border-primary-head-mediumGray gap-2"
  >
    {icon}
    <span className="text-white">{text}</span>
  </a>
);

export default SocialLink;

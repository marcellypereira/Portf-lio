import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = ({ to, children, className = "" }) => (
  <Link to={to} className={`underline ${className}`}>
    {children}
  </Link>
);

export default NavigationLink;

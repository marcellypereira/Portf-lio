import React from "react";
import Link from "next/link";

const NavigationLink = ({ to, children, className = "" }) => (
  <Link href={to} className={`underline ${className}`}>
    {children}
  </Link>
);

export default NavigationLink;

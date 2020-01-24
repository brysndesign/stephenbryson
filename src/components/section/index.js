import React from "react";
import './style.scss'

function Section({ children, className }) {
	return <section className={`section ${className}`}>{children}</section>;
}

Section.defaultProps = {
  className: '', 
}

export default Section;

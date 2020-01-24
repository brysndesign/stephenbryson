import React from "react";
import './style.scss'

function Container({ children, className }) {
	return <div className={`container ${className}`}>{children}</div>;
}

Container.defaultProps = {
  className: '', 
}

export default Container;

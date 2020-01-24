import React from "react";
import { Icon } from "../index";
import "./style.scss";

function Button({ Wrapper, wrapperProps, className, href, label, icon }) {
	return (
		<>
			<Wrapper href={href} {...wrapperProps} className={`button ${className}`}>
				<p className="w--medium m--none">{label}</p>
				{icon && <Icon className="button__icon" type="far" icon={icon} />}
			</Wrapper>
		</>
	);
}

Button.defaultProps = {
  Wrapper: 'a',
  wrapperProps: {},
  label: '',
  icon: '',
  className: '',
}

export default Button;

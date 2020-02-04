import React, { Component } from "react";
import "./style.scss";

class Tag extends Component {
	getVariant() {
		switch (this.props.label) {
			case "ui":
				return "tag--ui";
			case "ux":
				return "tag--ux";
			case "react":
				return "tag--react";
			case "scss":
				return "tag--scss";
			default:
				break;
		}
	}

	render() {
		const props = this.props;

		return (
			<>
				<p
					className={`tag ${this.getVariant()} f--xsmall w--medium ${props.className}`}
				>
					{props.label}
				</p>
			</>
		);
	}
}

Tag.defaultProps = {
	Wrapper: "a",
	wrapperProps: {},
	label: "",
	icon: "",
	className: ""
};

export default Tag;

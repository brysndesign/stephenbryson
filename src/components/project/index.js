import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Project extends Component {
	truncateDescription() {
		return (
			this.props.desc
				.split(" ")
				.splice(0, 14)
				.join(" ") + "..."
		);
	}
	getUrl() {
		return `/${this.props.title.replace(/\s+/g, '-').toLowerCase()}`;
	}

	render() {
		const props = this.props;

		return (
			<Link to={this.getUrl()}>
				<div className={`project ${props.className}`}>
					<img className="project__image" src={props.image} alt="" title="" />
					<p className="project__title f--large w--bold">{props.title}</p>
					<p className="project__desc m--none">{this.truncateDescription()}</p>
				</div>
			</Link>
		);
	}
}

export default Project;

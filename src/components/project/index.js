import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tag } from "../../components";
import "./style.scss";

class Project extends Component {
	state = { tags: this.props.tags };
	
	truncateDescription() {
		return (
			this.props.desc
				.split(" ")
				.splice(0, 14)
				.join(" ") + "..."
		);
	}

	render() {
		const props = this.props;

		return (
			<Link to={props.url}>
				<div className={`project ${props.className}`}>
					<img className="project__image" src={props.image} alt="" title="" />
					<p className="project__title f--large w--bold">{props.title}</p>
					{this.state.tags && (
						<div className="project__tags">
							{this.state.tags.map(tag => (
								<Tag className="project__tags-item" key={tag} label={tag} />
							))}
						</div>
					)}
					<p className="project__desc">{this.truncateDescription()}</p>
				</div>
			</Link>
		);
	}
}

export default Project;

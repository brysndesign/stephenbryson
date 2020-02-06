import React, { Component } from "react";
import { Hero, Container, Section, Project, Contact } from "../components";
import HeroImage from "../assets/img/hero.jpeg";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
	accessToken: "fBBlGUH5Sfj3r2HuM3XXpAtt",
	cache: {
		clear: "auto",
		type: "memory"
	}
});

class Home extends Component {
	state = { projects: [] };

	componentDidMount() {
		this.getProjectsFromStoryblok();
	}

	getProjectsFromStoryblok = () => {
		Storyblok.get("cdn/stories", {
			starts_with: "projects/"
		})
			.then(projectsResponse => {
				this.handleReportData(projectsResponse);
			})
			.catch(error => {
				if (error.projectsResponse && error.projectsResponse.status === 404) {
					this.getProjectsFromStoryblok();
				} else console.error(error);
			});
	};

	handleReportData = projectsResponse => {
		const { stories } = projectsResponse.data;
		if (stories) {
			const projects = stories;
			this.setState({
				projects
			});
		}
	};
	render = () => (
		<>
			<Hero
				title="Hi, I'm Stephen. Front End Developer &amp; Designer"
				img={HeroImage}
			/>
			<Container>
				<Section>
					{this.state.projects.length > 0 && (
						<>
						<h3>Latest projects</h3>
						<div className="g--grid g--grid--gutters-small">
							{this.state.projects.map(project => (
								<div key={project.id} className="g--grid__col g--grid__col--6 g--grid__col--tablet-3">
									<Project
										url={project.full_slug}
										image={project.content.thumbnail}
										title={project.name}
										desc={project.content.description}
										tags={project.tag_list}
									/>
								</div>
							))}
						</div>
						</>
					)}
				</Section>
			</Container>
			<Contact />
		</>
	);
}

export default Home;

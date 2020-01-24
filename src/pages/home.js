import React from "react";
import { Hero, Container, Section, Project, Contact } from "../components";

function Home() {
	return (
		<>
			<Hero 
				title="Hero title"
				desc="Welcome to my site..."
			/>
			<Container>
				<Section>
					<h3>Projects</h3>
					<div className="g--grid">
						<div className="g--grid__col">
							<Project
								image="https://via.placeholder.com/440x220/F7F7F7?text=stephenbryson.com"
								title="Hult edu"
								desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							/>
						</div>
						<div className="g--grid__col">
							<Project
								image="https://via.placeholder.com/440x220/F7F7F7?text=stephenbryson.com"
								title="Career Mapper"
								desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							/>
						</div>
					</div>
				</Section>
			</Container>
			<Contact />
		</>
	);
}

export default Home;

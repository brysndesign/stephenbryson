import React from "react";
import { Container, Section, Button } from "../index";
import "./style.scss";

function Contact() {
	return (
		<div className="contact">
			<Container>
				<Section>
					<h3>Get in touch</h3>
					<p className="m--bottom-large">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
					<Button 
						href="mailto:stephen.bryson1@gmail.com"
						className="button--link"
						label="stephen.bryson1@gmail.com"
						icon="arrow-right"
					/>
				</Section>
			</Container>
		</div>
	);
}

export default Contact;

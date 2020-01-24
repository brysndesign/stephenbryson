import React from "react";
import { Container, Section, Button } from "../index";
import "./style.scss";

function Contact() {
	return (
		<div className="contact">
			<Container>
				<Section>
					<h3>Get in touch title</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
					<Button 
						href="mailto:stephenbryson1@gmail.com"
						className="button--primary"
						label="Get in touch via email"
						icon="envelope"
					/>
				</Section>
			</Container>
		</div>
	);
}

export default Contact;

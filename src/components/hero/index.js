import React from "react";
import { Container, Section, Button } from "../index";
import "./style.scss";

function Hero({title, desc, buttonLabel}) {
	return (
		<div className="hero">
			<Container>
				<Section>
					{title && (
						<h1>{title}</h1>
					)}
					{desc && (
						<p>{desc}</p>
					)}
					{buttonLabel && (
						<Button label="Click here" icon="check" />
					)}
				</Section>
			</Container>
		</div>
	);
}

export default Hero;

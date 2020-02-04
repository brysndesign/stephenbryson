import React from "react";
import { Container, Section, Button } from "../index";
import "./style.scss";

function Hero({ title, desc, buttonLabel, img }) {
	return (
		<div className="hero" style={{ backgroundImage: `url(${img})`}}>
			<Container>
				<Section>
					{title && <h1 className={`${desc ? "h1--accent" : ""}`}>{title}</h1>}
					{desc && <p>{desc}</p>}
					{buttonLabel && <Button label="Click here" icon="check" />}
				</Section>
			</Container>
		</div>
	);
}

export default Hero;

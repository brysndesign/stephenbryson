import React from "react";
import "./style.scss";
import { Container } from "../index";

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<p className="m--none">&copy; 2020 stephenbryson.com | All rights reserved</p>
			</Container>
		</footer>
	);
}

export default Footer;

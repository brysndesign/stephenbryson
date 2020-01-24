import React from "react";
import { Container, Button, Icon } from "../index";
import { Link } from "react-router-dom";
import "./style.scss";

function Header() {
	return (
		<header className="header">
			<Container className="header__container">
				<Link to="/">
					<Icon icon="code" className="f--xxlarge"/>
				</Link>
				<Button
					href="mailto:stephenbryson1@gmail.com"
					className="button--small button--primary"
					label="Get in touch"
				/>
			</Container>
		</header>
	);
}

export default Header;

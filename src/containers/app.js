import React from "react";
import { Header, Footer, ScrollToTop } from "../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../utils/routes";

export default function RouteConfigExample() {
	return (
		<Router>
			<ScrollToTop>
				<Header />
				<Switch>
					{routes.map((route, i) => (
						<Route key={i} {...route} />
					))}
				</Switch>
				<Footer />
			</ScrollToTop>
		</Router>
	);
}

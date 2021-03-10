import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Cards } from "./Cards.js";
import { Footer } from "./Footer.js";

export function Home() {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col">
					<Cards />
				</div>
				<div className="col">
					<Cards />
				</div>
				<div className="col">
					<Cards />
				</div>
				<div className="col">
					<Cards />
				</div>
			</div>
			<div className="container" style={{ paddingTop: 20 }}>
				<Footer />
			</div>
		</div>
	);
}

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				aut esse deleniti distinctio. Iusto eum libero ut vero
				perferendis asperiores accusantium provident sapiente,
				repellendus, placeat commodi facere nam eligendi labore?
			</p>
			<a
				className="btn btn-primary btn-lg"
				href="https://getbootstrap.com/"
				role="button">
				Call to action!
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

ReactDOM.render(
	<Jumbotron
		title="A Warm Welcome!"
		description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aut esse deleniti distinctio. 
                    Iusto eum libero ut vero perferendis asperiores accusantium provident sapiente, repellendus, 
                    placeat commodi facere nam eligendi labore?"
		buttonLabel="Call to action!"
		buttonURL="https://getbootstrap.com/"
	/>,

	document.querySelector("#app")
);

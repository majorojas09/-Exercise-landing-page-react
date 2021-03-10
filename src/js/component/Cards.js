import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className="container-fluid">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Card Title</h5>
					<p className="card-text">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Animi aut esse deleniti distinctio. Iusto eum
						libero ut vero perferendis asperiores accusantium
						provident sapiente, repellendus, placeat commodi facere
						nam eligendi labore?
					</p>
					<a
						href="https://getbootstrap.com/"
						className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

ReactDOM.render(
	<Cards
		title="Card Title"
		description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aut esse deleniti distinctio. 
                    Iusto eum libero ut vero perferendis asperiores accusantium provident sapiente, repellendus, 
                    placeat commodi facere nam eligendi labore?"
		buttonLabel="Find Out More!"
		buttonURL="https://getbootstrap.com/"
	/>,

	document.querySelector("#app")
);

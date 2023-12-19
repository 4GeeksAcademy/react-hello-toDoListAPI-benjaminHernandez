import React from "react";

const Home = () => {
	return (
		<body>
			<div className="container">
				<h1>To-Dos</h1>
				<ul>
					<li><input type="text" placeholder="Input task here"/></li>
					<li>hola<i className="fa-solid fa-x fa-lg" style="color: #000000;"></i></li>
					<li>hola<i className="fa-solid fa-x fa-lg" style="color: #000000;"></i></li>
					<li>hola<i className="fa-solid fa-x fa-lg" style="color: #000000;"></i></li>
				</ul> 
				<footer>3 tasks left! Keep it up!</footer>
			</div>
		</body>
	);
};

export default Home;

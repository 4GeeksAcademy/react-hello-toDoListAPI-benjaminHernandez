import { useState } from "react";
import React from "react";

const Home = () => {
	const [InputValue, setInputValue] = useState("")
	const [ToDos, setToDos] = useState([])
	return (
		<body>
			<div className="container">
				<h1>To-Dos</h1>
				<ul>
					<li><input type="text" placeholder="Input task here" onChange = { (e) => setInputValue(e.target.value)} value={InputValue} onKeyPress={(e) => { if (e.key === "Enter"){ setToDos(ToDos.concat(InputValue)); setInputValue("")}}}/></li>
					{ToDos.map((a, index) => (
					<li>{a}<button onClick={ () => setToDos(ToDos.filter((a, currentIndex) => index != currentIndex))}>X</button></li>
					))}
				</ul> 
				<footer>{ToDos.length} tasks left! Keep it up!</footer>
			</div>
		</body>
	);
};

export default Home;

import React from 'react';
import { useLocation } from "react-router-dom";
import ShowCat from '../components/Showcat/showcat';

const Adopt = () => {
	const location = useLocation();
	console.log(location);
	if (location.state && "id" in location.state) {
		const id = location.state["id"];
		console.log(id);
	}
	return (
		<>
			<h1>View the pets we have in our care!</h1>
			<ShowCat numOfCats={50} />
		</>
	);
};

export default Adopt;

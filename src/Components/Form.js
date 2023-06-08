import React, { useState } from "react";

function Form() {
	const [name, setName] = useState("");
	const [favoriteColor, setFavoriteColor] = useState("");
	const [favoriteMovie, setFavoriteMovie] = useState(["", "", ""]);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleColorChange = (e) => {
		setFavoriteColor(e.target.value);
	};
	const handleMovieChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		//make a copy of the original state
		const newFavoriteMovies = [...favoriteMovie];
		if (name === "movie1") {
			newFavoriteMovies[0] = value;
		}
		if (name === "movie2") {
			newFavoriteMovies[1] = value;
		}
		if (name === "movie3") {
			newFavoriteMovies[2] = value;
		}
		setFavoriteMovie(newFavoriteMovies);
	};
	//handles 3 inputs
	return (
		<div>
			<label htmlFor="name">Name:</label>
			<input type="text" name="name" value={name} onChange={handleNameChange} />
			<label htmlFor="color">Favorite Color:</label>
			<input
				type="text"
				name="color"
				value={favoriteColor}
				onChange={handleColorChange}
			/>
			<label htmlFor="movie1">Movie 1:</label>
			<input name="movie1" onChange={handleMovieChange} />
			<label htmlFor="movie2">Movie 2:</label>
			<input name="movie2" onChange={handleMovieChange} />
			<label htmlFor="movie3">Movie 3:</label>
			<input name="movie3" onChange={handleMovieChange} />
		</div>
	);
}
//add label and input for favorite color, then add function that handles favorite color change

export default Form;

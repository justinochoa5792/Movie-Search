import React from "react";

const Home = ({ movie }) => {
  const renderMovie = () => {
    return movie.map((movies) => {
      return (
        <ul>
          <img src={movies.Poster} alt={movies.Title} />
          <li>{movies.Title}</li>
          <li>
            <strong>Year it was made :</strong>
            {movies.Year}
          </li>
        </ul>
      );
    });
  };
  return (
    <div className="App">
      <h1>Search for a Movie!</h1>
      {renderMovie()}
    </div>
  );
};

export default Home;

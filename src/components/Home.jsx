import React from "react";

const Home = ({ movie }) => {
  const renderMovie = () => {
    return movie.map((movies) => {
      return (
        <div className="movie">
          <ul>
            <img src={movies.Poster} alt={movies.Title} />
            <li>{movies.Title}</li>
            <li>
              <strong>Year it was made :</strong>
              {movies.Year}
            </li>
          </ul>
        </div>
      );
    });
  };
  return <div className="App">{renderMovie()}</div>;
};

export default Home;

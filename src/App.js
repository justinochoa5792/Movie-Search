import { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";

import Home from "./components/Home";
import NavBar from "./components/Nav";

function App() {
  const [movie, setMovie] = useState([]);
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const getMovie = async (e) => {
    e.preventDefault();
    const response = await Axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: "d9835cc5",
        s: term,
      },
    });
    console.log(response.data.Search);
    setMovie(response.data.Search);
  };

  return (
    <div className="App">
      <NavBar />
      <form onSubmit={getMovie}>
        <input type="text" onChange={handleChange} />
      </form>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} movie={movie} />}
        />
      </Switch>
    </div>
  );
}

export default App;

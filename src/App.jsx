import axios from "axios";

import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
import HomePage from "./Pages/Home.pages";

import Movie from "./Pages/Movie.page";

import Plays from "./Pages/Plays.pages";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;




function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    <MovieHOC path="/movie/:id" exact component={Movie}/>
    <DefaultHOC path="/plays" exact component={Plays}/>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./Axios";
import requests from "./Requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  console.log("movie", movie);

  function truncate(text, n) {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      {movie ? (
        <>
          <div className="banner_content">
            <h1 className="banner_title">
              {movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
              <button className="banner_button">play</button>
              <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
              {truncate(movie.overview, 150)}
            </h1>
          </div>
          <div className="banner--fadeBottom" />
        </>
      ) : (
        <h1>Loding</h1>
      )}
    </header>
  );
}

export default Banner;

import React from "react";
import "./HomeScreen";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;

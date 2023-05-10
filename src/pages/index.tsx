import React from "react";
import MovieList from "../components/MovieList";

const IndexPage: React.FC = () => {
  return (
      <div>
        <h1>Welcome to the Movie Database!</h1>
        <MovieList />
      </div>
  );
};

export default IndexPage;

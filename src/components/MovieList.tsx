import React, { useEffect, useState } from "react";

interface Movie {
    id: number;
    title: string;
}

function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch("https://localhost:7270/api/movies")
            .then((response) => response.json())
            .then((data: Movie []) => setMovies(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;

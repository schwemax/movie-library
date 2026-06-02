"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMovies();
    }, []);

    async function fetchMovies() {
        const { data, error } = await supabase
            .from("movies")
            .select("*");

        if (error) {
            console.log(error);
        }

        setMovies(data || []);
        setLoading(false);
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold">
                    Movies
                </h1>

                <Link
                    href="/movies/new"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Movie
                </Link>
            </div>

            {loading && (
                <p className="text-gray-500">
                    Loading...
                </p>
            )}

            {!loading && movies.length === 0 && (
                <p className="text-gray-500">
                    No movies found
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <MovieCard movie={movie} />

                        <Link
                            href={`/movies/${movie.id}`}
                            className="text-blue-500"
                        >
                            Detail
                        </Link>

                        <Link
                            href={`/movies/${movie.id}/edit`}
                            className="text-green-500 ml-4"
                        >
                            Edit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

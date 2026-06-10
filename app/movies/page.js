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
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from("movies")
                .select("*");

            if (error) {
                setMovies([]);
                throw error;
            }
            setMovies(data || []);
        } catch (err) {
            console.error('fetchMovies failed:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold">
                    Movies
                </h1>
            </div>

{movies.length === 0 && (
                <p className="text-gray-500">
                    No movies found
                </p>
            )}

            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onDeleted={(deletedId) =>
                            setMovies((currentMovies) =>
                                currentMovies.filter((currentMovie) => currentMovie.id !== deletedId)
                            )
                        }
                    />
                ))}
            </div>
        </div>
    );
}

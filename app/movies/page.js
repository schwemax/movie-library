"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);

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
    }

    return (
        <div className="p-6">
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

            <div className="grid gap-4">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="border p-4 rounded"
                    >
                        <h2 className="font-bold">
                            {movie.title}
                        </h2>

                        <p>{movie.director}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
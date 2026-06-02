"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function MovieDetail() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            const { data } = await supabase
                .from("movies")
                .select("*")
                .eq("id", id)
                .single();

            setMovie(data);
        }

        if (id) {
            fetchMovie();
        }
    }, [id]);

    async function handleDelete() {
        const confirmed = confirm(
            "Are you sure?"
        );

        if (!confirmed) return;

        await supabase
            .from("movies")
            .delete()
            .eq("id", id);

        router.push("/movies");
    }

    if (!movie) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold">
                    Movie not found
                </h1>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <Link
                href="/movies"
                className="text-blue-500"
            >
                Back
            </Link>

            <h1 className="text-4xl font-bold mt-4 mb-6">
                {movie.title}
            </h1>

            <div className="space-y-3">
                <p>
                    <strong>Director:</strong>{" "}
                    {movie.director}
                </p>

                <p>
                    <strong>Year:</strong>{" "}
                    {movie.year}
                </p>

                <p>
                    <strong>Genre:</strong>{" "}
                    {movie.genre}
                </p>

                <p>
                    <strong>Rating:</strong>{" "}
                    {movie.rating}
                </p>

                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                >
                    Delete Movie
                </button>
            </div>
        </div>
    );
}

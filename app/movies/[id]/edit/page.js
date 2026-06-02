"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function EditMoviePage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [movie, setMovie] = useState({
        title: "",
        director: "",
        year: "",
        genre: "",
        rating: "",
    });

    useEffect(() => {
        async function fetchMovie() {
            const { data } = await supabase
                .from("movies")
                .select("*")
                .eq("id", id)
                .single();

            if (data) {
                setMovie({
                    title: data.title || "",
                    director: data.director || "",
                    year: data.year || "",
                    genre: data.genre || "",
                    rating: data.rating || "",
                });
            }
        }

        if (id) {
            fetchMovie();
        }
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await supabase
            .from("movies")
            .update(movie)
            .eq("id", id);

        if (error) {
            console.log(error);
            return;
        }

        router.push(`/movies/${id}`);
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Edit Movie
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    value={movie.title}
                    onChange={(e) =>
                        setMovie({
                            ...movie,
                            title: e.target.value,
                        })
                    }
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    value={movie.director}
                    onChange={(e) =>
                        setMovie({
                            ...movie,
                            director: e.target.value,
                        })
                    }
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    value={movie.year}
                    onChange={(e) =>
                        setMovie({
                            ...movie,
                            year: e.target.value,
                        })
                    }
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    value={movie.genre}
                    onChange={(e) =>
                        setMovie({
                            ...movie,
                            genre: e.target.value,
                        })
                    }
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    step="0.1"
                    value={movie.rating}
                    onChange={(e) =>
                        setMovie({
                            ...movie,
                            rating: e.target.value,
                        })
                    }
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}

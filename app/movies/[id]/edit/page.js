"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";

export default function EditMoviePage({ params }) {
    const router = useRouter();

    const [movie, setMovie] = useState({
        title: "",
        director: "",
        year: "",
        genre: "",
        rating: "",
    });

    useEffect(() => {
        fetchMovie();
    }, []);

    async function fetchMovie() {
        const { data } = await supabase
            .from("movies")
            .select("*")
            .eq("id", params.id)
            .single();

        if (data) {
            setMovie(data);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await supabase
            .from("movies")
            .update(movie)
            .eq("id", params.id);

        if (error) {
            console.log(error);
            return;
        }

        router.push(`/movies/${params.id}`);
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

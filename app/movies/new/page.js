"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function NewMoviePage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await supabase
            .from("movies")
            .insert([
                {
                    title,
                    director,
                    year,
                    genre,
                    rating,
                },
            ]);

        if (error) {
            console.log(error);
            return;
        }

        router.push("/movies");
    }

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4">
                Add Movie
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    placeholder="Director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="number"
                    step="0.1"
                    placeholder="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
}

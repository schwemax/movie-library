"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

const movieSchema = z.object({
    title: z.string().min(2, "Title is too short"),
    director: z.string().min(2, "Director is too short"),
    year: z.coerce.number().min(1900),
    genre: z.string().min(2),
    rating: z.coerce.number().min(1).max(10),
});

export default function NewMoviePage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(movieSchema),
    });

    async function onSubmit(data) {
        const { error } = await supabase
            .from("movies")
            .insert([data]);

        if (error) {
            console.log(error);
            return;
        }

        router.push("/movies");
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">
                Add Movie
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
            >
                <input
                    type="text"
                    placeholder="Title"
                    {...register("title")}
                    className="border p-2 rounded"
                />
                <p className="text-red-500">
                    {errors.title?.message}
                </p>

                <input
                    type="text"
                    placeholder="Director"
                    {...register("director")}
                    className="border p-2 rounded"
                />
                <p className="text-red-500">
                    {errors.director?.message}
                </p>

                <input
                    type="number"
                    placeholder="Year"
                    {...register("year")}
                    className="border p-2 rounded"
                />
                <p className="text-red-500">
                    {errors.year?.message}
                </p>

                <input
                    type="text"
                    placeholder="Genre"
                    {...register("genre")}
                    className="border p-2 rounded"
                />
                <p className="text-red-500">
                    {errors.genre?.message}
                </p>

                <input
                    type="number"
                    step="0.1"
                    placeholder="Rating"
                    {...register("rating")}
                    className="border p-2 rounded"
                />
                <p className="text-red-500">
                    {errors.rating?.message}
                </p>

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
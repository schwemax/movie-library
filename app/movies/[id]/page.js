import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default async function MovieDetail({ params }) {
    const { id } = params;

    const { data: movie } = await supabase
        .from("movies")
        .select("*")
        .eq("id", id)
        .single();

    if (!movie) {
        return <h1>Movie not found</h1>;
    }

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">
                {movie.title}
            </h1>

            <p className="mb-2">
                <strong>Director:</strong> {movie.director}
            </p>

            <p className="mb-2">
                <strong>Year:</strong> {movie.year}
            </p>

            <p className="mb-2">
                <strong>Genre:</strong> {movie.genre}
            </p>

            <p className="mb-4">
                <strong>Rating:</strong> {movie.rating}
            </p>

            <Link
                href={`/movies/${movie.id}/edit`}
                className="bg-yellow-500 text-white px-4 py-2 rounded inline-block"
            >
                Edit Movie
            </Link>
        </div>
    );
}
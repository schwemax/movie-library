import Link from "next/link";

export default function MovieCard({ movie }) {
    return (
        <div className="border p-4 rounded shadow">
            <Link
                href={`/movies/${movie.id}`}
                className="text-xl font-bold text-blue-500"
            >
                {movie.title}
            </Link>

            <p>{movie.director}</p>

            <p className="text-sm text-gray-500">
                {movie.genre} • {movie.year}
            </p>
        </div>
    );
}

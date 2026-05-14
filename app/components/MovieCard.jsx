import Link from "next/link";

export default function MovieCard({ movie }) {
    return (
        <div className="border p-4 rounded shadow">
            <Link href={`/movies/${movie.id}`}>
                <h2 className="text-xl font-bold hover:text-blue-500">
                    {movie.title}
                </h2>
            </Link>

            <p>{movie.director}</p>

            <p className="text-sm text-gray-500">
                {movie.genre} • {movie.year}
            </p>
        </div>
    );
}
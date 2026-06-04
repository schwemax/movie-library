import Link from "next/link";

export default function MovieCard({ movie }) {
    return (
        <div className="movie-row">
            <div className="movie-info">
                <Link href={`/movies/${movie.id}`} className="movie-title">
                    {movie.title}
                </Link>

                <div className="movie-director">{movie.director}</div>

                <div className="movie-meta">
                    {movie.genre && <span className="meta-tag">{movie.genre}</span>}
                    {movie.year && <span className="meta-tag">{movie.year}</span>}
                    {movie.rating != null && <span className="meta-rating">{movie.rating}</span>}
                </div>
            </div>

            <div className="movie-actions">
                <Link href={`/movies/${movie.id}`} className="btn btn-secondary">Detail</Link>
                <Link href={`/movies/${movie.id}/edit`} className="btn btn-primary">Edit</Link>
            </div>
        </div>
    );
}

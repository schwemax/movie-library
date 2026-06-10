"use client";

import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function MovieCard({ movie, onDeleted }) {
    async function handleDelete() {
        const confirmed = window.confirm(`Delete "${movie.title}"?`);

        if (!confirmed) {
            return;
        }

        const { error } = await supabase
            .from("movies")
            .delete()
            .eq("id", movie.id);

        if (error) {
            console.error("Delete failed:", error);
            return;
        }

        onDeleted?.(movie.id);
    }

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
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

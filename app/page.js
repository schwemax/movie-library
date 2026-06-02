import Link from "next/link";

export default function HomePage() {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="bg-white border rounded shadow p-6">
                <h1 className="text-4xl font-bold mb-4">
                    Movie Library
                </h1>

                <p className="text-gray-600 mb-6">
                    Manage your movie collection with full create, read, update, and delete functionality.
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/movies"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        View Movies
                    </Link>

                    <Link
                        href="/movies/new"
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Add Movie
                    </Link>
                </div>
            </div>
        </div>
    );
}

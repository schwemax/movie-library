import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-900"
                >
                    Movie Library
                </Link>

                <div className="flex gap-4">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-500"
                    >
                        Home
                    </Link>

                    <Link
                        href="/movies"
                        className="text-gray-600 hover:text-blue-500"
                    >
                        Movies
                    </Link>

                    <Link
                        href="/movies/new"
                        className="text-gray-600 hover:text-blue-500"
                    >
                        Add Movie
                    </Link>
                </div>
            </div>
        </nav>
    );
}

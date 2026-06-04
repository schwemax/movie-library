"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [time, setTime] = useState("");

    useEffect(() => {
        function update() {
            const d = new Date();
            setTime(d.toLocaleTimeString());
        }
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-inner container">
                <div className="nav-left">
                    <Link href="/" className="navbar-brand">
                        Movie Library
                    </Link>
                </div>

                <div className="nav-center">
                    <div className="nav-clock" aria-live="polite">{time}</div>
                </div>

                <div className="nav-right">
                    <Link href="/" className="nav-link">
                        Home
                    </Link>

                    <Link href="/movies" className="nav-link">
                        Movies
                    </Link>

                    <Link href="/movies/new" className="btn btn-primary">
                        Add Movie
                    </Link>
                </div>
            </div>
        </nav>
    );
}

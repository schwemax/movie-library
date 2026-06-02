import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Movie Library",
  description: "A movie library CRUD app built with Next.js and Supabase",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

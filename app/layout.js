import Navbar from "./components/Navbar";

export const metadata = {
  title: "Movie Library",
  description: "A movie library CRUD app built with Next.js and Supabase",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

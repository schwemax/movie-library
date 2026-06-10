# Movie Library

Movie Library is a Next.js App Router project for managing a movie collection. It uses Supabase as the database and supports full CRUD operations: create, read, update, and delete movies.

## Features

- Movie list with responsive cards
- Dynamic movie detail pages
- Add movie form with React Hook Form and Zod validation
- Edit movie page
- Delete movie action with confirmation
- Loading and empty states
- Navbar navigation

## Technologies

- Next.js 15
- React 19
- Supabase
- React Hook Form
- Zod
- CSS utility classes

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://lmtuuifkaqeyxxjzaqmk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_J4OYms2JjFliT_VNu6LHDg_8m7EOWg_
```


## Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build

```bash
npm run build
```

## Database Table

The app expects a Supabase table named `movies` with fields similar to:

- `id`
- `title`
- `director`
- `year`
- `genre`
- `rating`

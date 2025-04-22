"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-rose-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-10 space-y-6 text-gray-800">
        <h1 className="text-3xl font-bold text-pink-600">📖 About Recipe Explorer Lite</h1>

        <p>
          <strong>Recipe Explorer Lite</strong> is a lightweight and delightful web application that
          allows users to browse and explore recipes using the{' '}
          <a
            href="https://www.themealdb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 underline hover:text-pink-600"
          >
            TheMealDB API
          </a>. The project is built as part of a web development assignment to showcase skills in
          modern front-end technologies.
        </p>

        <h2 className="text-xl font-semibold text-pink-600">📌 Tech Stack</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Next.js 15 with App Router (app directory)</li>
          <li>TypeScript</li>
          <li>Tailwind CSS for clean and responsive styling</li>
          <li>React Query for data fetching and caching</li>
        </ul>

        <h2 className="text-xl font-semibold text-pink-600">⚙️ Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>View a list of recipes fetched from a public API</li>
          <li>Click a recipe to view detailed instructions and ingredients</li>
          <li>Submit feedback and ratings for each recipe</li>
          <li>Loading and error states for smooth user experience</li>
        </ul>

        <h2 className="text-xl font-semibold text-pink-600">🚀 Purpose</h2>
        <p>
          This project was developed to learn and demonstrate real-world application
          structure using Next.js, focusing on best practices for routing, data fetching,
          UI/UX design, and user feedback handling.
        </p>

        <h2 className="text-xl font-semibold text-pink-600">🔗 Extra Links</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <Link href="/" className="text-pink-500 underline hover:text-pink-600">
              Home Page
            </Link>
          </li>
          <li>
            <a
              href="https://www.themealdb.com/api.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 underline hover:text-pink-600"
            >
              TheMealDB API Documentation
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
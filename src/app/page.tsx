'use client';

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';

interface Meal {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("a");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`);
        const data = await res.json();
        setMeals(data.meals || []); // fallback if no meals returned
      } catch (err) {
        console.error("Error fetching meals:", err);
      }
    }

    fetchRecipes();
  }, [selectedLetter]);

  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  return (
    <div className="bg-rose-50 min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">🍽️ Recipes</h2>

        {/* Letter filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter.toLowerCase())}
              className={`px-3 py-1 rounded ${
                selectedLetter === letter.toLowerCase()
                  ? "bg-pink-500 text-white"
                  : "bg-white text-pink-600 border border-pink-300"
              } hover:bg-pink-400 hover:text-white transition`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        {meals.length === 0 ? (
          <p className="text-gray-500">No recipes found for letter "{selectedLetter.toUpperCase()}".</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <Link href={`/recipes/${meal.idMeal}`} key={meal.idMeal}>
                <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition block">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="rounded-lg w-full h-48 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold text-pink-600">{meal.strMeal}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

"use client";

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ArrowBigLeft } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Feedback from './_components/feedback';

interface MealDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
}

export default function RecipeDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split('/').pop();

  const [meal, setMeal] = useState<MealDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchMeal() {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setMeal(data.meals[0]);
      } catch (err) {
        console.error('Error fetching meal:', err);
      }
    }

    fetchMeal();
  }, [id]);

  if (!meal) return <div className="p-6">Loading...</div>;

  return (
    <div className="bg-rose-50 min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => router.push('/')}
        className="flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-colors text-xl font-semibold p-2"
        >
        <ArrowBigLeft className="size-8" />
        Go back
    </button>

        <h1 className="text-3xl font-bold text-pink-600 mb-4">{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-50 h-auto rounded-lg mb-4" />
        <p className="text-sm text-pink-500 mb-2">Category: {meal.strCategory}</p>

        <div className="mt-6">
          <h2 className="text-2xl text-pink-600 font-bold mb-2">📝 Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];
              if (!ingredient || ingredient.trim() === '') return null;

              return (
                <li key={i}>
                  {measure} {ingredient}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl text-pink-600 font-bold mb-2">📖 Instructions</h2>
          <p className="whitespace-pre-wrap text-gray-700">{meal.strInstructions}</p>
        </div>
      </div>
      <Feedback recipeId={id!} />
      <Footer />
    </div>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

import { Link } from "lucide-react";

export default function Header() {
    return(
        <header className="w-full bg-pink-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center space-y-2">
            <a className="text-3xl font-bold text-pink-600 flex items-center gap-2 hover:text-pink-700 transition duration-200 cursor-pointer" href="/">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ml-2">🍓 Mouth-Watering Bites Recipes</h1>
            </a>
          <p className="text-sm text-pink-500 italic">
            Serving joy, one recipe at a time 💕
          </p>
        </div>
      </header>
    );
}
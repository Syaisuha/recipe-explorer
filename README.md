# 🍽️ Recipe Explorer Lite

A lightweight recipe browsing web app built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **React Query**, allowing users to explore meals and view detailed cooking instructions. Developed for a web development assignment.

---

## 🚀 Live Demo
[🔗 Deployed Site](https://recipe-explorer-rho.vercel.app/)

---

## 📌 Features

- 🍱 Browse recipes from [TheMealDB API](https://www.themealdb.com/api.php)
- 🔍 Filter recipes by starting letter (A-Z)
- 📄 View detailed information about each recipe
- 📝 Submit feedback and star ratings for individual recipes
- 🗂️ Responsive layout with Tailwind CSS
- ❌ Graceful error handling and loading states

---

## 🧰 Tech Stack

- [Next.js 15](https://nextjs.org/docs) (App Router + `app/` directory)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🗄️ Folder Structure
src/
├── app/
│   ├── (layout)/
│   │   └── recipes/
│   │       └── [id]/
│   │           ├── _components/
│   │           │   └── feedback.tsx
│   │           └── page.tsx
│   ├── components/
│   │   └── layout/
│   │       ├── header.tsx

## 🧪 Data Fetching

- **Home Page:** uses `fetch` inside `useEffect` to fetch recipes by letter (e.g., `?f=a`)
- **Recipe Details:** fetches detailed recipe info using `?i={id}`

---

## ✨ Feedback System

- Users can submit feedback (name, comment, star rating)
- Feedback is stored in `localStorage` (for demo purposes)
- Feedback is displayed per recipe and managed via reusable `<Feedback />` component

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repo
git clone

# 2. Navigate to the project
cd recipe-explorer-lite

# 3. Install dependencies
npm install

# 4. Run the dev server
npm run dev

📌 Assumptions
- No user authentication needed
- Feedback is stored client-side
- TheMealDB’s free tier is sufficient for this app’s needs
"use client";

import { useEffect, useState } from 'react';

interface Feedback {
  recipeId: string;
  name: string;
  comment: string;
  rating: number;
  timestamp: string;
}

interface FeedbackProps {
  recipeId: string;
}

export default function FeedbackComponent({ recipeId }: FeedbackProps) {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('feedback');
    const parsed: Feedback[] = stored ? JSON.parse(stored) : [];
    setFeedbackList(parsed.filter((f) => f.recipeId === recipeId));
  }, [recipeId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback: Feedback = {
      recipeId,
      name,
      comment,
      rating,
      timestamp: new Date().toISOString(),
    };

    const updated = [...feedbackList, newFeedback];
    setFeedbackList(updated);

    const all = localStorage.getItem('feedback');
    const allParsed: Feedback[] = all ? JSON.parse(all) : [];
    const newAll = [...allParsed, newFeedback];
    localStorage.setItem('feedback', JSON.stringify(newAll));

    setName('');
    setComment('');
    setRating(0);
  };

  return (
    <div className="mt-10 px-20">
      <h2 className="text-2xl text-pink-600 font-bold mb-4">💬 Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded p-2 h-24"
          required
        />
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-2xl ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          Submit Feedback
        </button>
      </form>

      <div className="space-y-4">
        {feedbackList.map((fb, index) => (
          <div key={index} className="bg-white rounded p-4 shadow">
            <p className="font-semibold text-pink-600">{fb.name}</p>
            <p className="text-sm text-gray-600 italic">
              {new Date(fb.timestamp).toLocaleString()} —{' '}
              {Array.from({ length: fb.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </p>
            <p className="mt-2 text-gray-700">{fb.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
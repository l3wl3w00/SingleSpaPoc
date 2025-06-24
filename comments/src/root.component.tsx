import React, { useEffect } from "react";
import { COMMENTS } from "../../common/comments.data";

export default function Root() {
  useEffect(() => {
    if (!document.getElementById("tailwind-script")) {
      const script = document.createElement("script");
      script.id = "tailwind-script";
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }
  }, []);

  const parts = window.location.pathname.split("/");
  const dinoName = decodeURIComponent(parts[2] || "");
  const comments = COMMENTS[dinoName] || [];

  if (!dinoName) {
    return (
      <div className="p-4 text-center text-gray-600">
        Select a dinosaur to see comments.
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto p-4 space-y-4">
      <h3 className="text-2xl font-bold">Community comments</h3>
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first!</p>
      ) : (
        comments.map((c, idx) => (
          <article
            key={idx}
            className="bg-white/80 backdrop-blur p-4 rounded-xl shadow"
          >
            <header className="flex justify-between mb-2">
              <span className="font-medium">{c.author}</span>
              <time className="text-sm text-gray-400">{c.date}</time>
            </header>
            <p className="text-gray-700">{c.text}</p>
          </article>
        ))
      )}
    </section>
  );
}

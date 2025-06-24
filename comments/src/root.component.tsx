import React, { useEffect, useState } from "react";
import { COMMENTS, Comment } from "../../common/comments.data";

export default function Root() {

  const parts = window.location.pathname.split("/");
  const dinoName = decodeURIComponent(parts[2] || "");
  const [comments, setComments] = useState<Comment[]>(
    () => COMMENTS[dinoName] || []
  );
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setComments(COMMENTS[dinoName] || []);
  }, [dinoName]);

  if (!dinoName) {
    return (
      <div className="max-w-2xl p-4 text-center text-gray-600">
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

      <form
        className="bg-white/90 backdrop-blur p-4 rounded-xl shadow space-y-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!author.trim() || !text.trim()) return;
          const newComment: Comment = {
            author: author.trim(),
            text: text.trim(),
            date: new Date().toISOString().split("T")[0],
          };
          if (!COMMENTS[dinoName]) {
            COMMENTS[dinoName] = [];
          }
          COMMENTS[dinoName].push(newComment);
          setComments([...COMMENTS[dinoName]]);
          setAuthor("");
          setText("");
        }}
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="author">
            Name
          </label>
          <input
            id="author"
            className="w-full p-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="text">
            Comment
          </label>
          <textarea
            id="text"
            className="w-full p-2 border rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Comment
        </button>
      </form>
    </section>
  );
}

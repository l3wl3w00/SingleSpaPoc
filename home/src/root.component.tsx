import React, { useEffect, useMemo } from "react";
import { DINOSAURS } from "../../common";

export default function Root() {
  const randomDino = useMemo(
    () => DINOSAURS[Math.floor(Math.random() * DINOSAURS.length)],
    []
  );
  useEffect(() => {
    if (!document.getElementById("tailwind-script")) {
      const script = document.createElement("script");
      script.id = "tailwind-script";
      script.src = "https://cdn.tailwindcss.com/3.4.17";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 py-20 space-y-10">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Microfrontend Demo
        </h1>
        <p className="text-lg text-gray-600">
          This page demonstrates how multiple frameworks can live together
          thanks to <span className="font-medium">single-spa</span>. Explore the
          sections below to see it in action.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        <a
          href="/dino-list"
          className="group bg-white/90 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            Dinosaur List
          </h3>
          <p className="text-gray-600">
            Browse a catalog of prehistoric creatures built with Angular.
          </p>
        </a>
        <a
          href={`/dino-details/${encodeURIComponent(randomDino.name)}`}
          className="group bg-white/90 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            Dinosaur Details
          </h3>
          <p className="text-gray-600">
            Dive deeper into individual dinos and add comments.
          </p>
        </a>
        <a
          href="https://single-spa.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white/90 backdrop-blur rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
            Learn about single-spa
          </h3>
          <p className="text-gray-600">
            Find out how microfrontends work under the hood.
          </p>
        </a>
      </div>
    </div>
  );
}

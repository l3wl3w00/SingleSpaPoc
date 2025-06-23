import React from "react";
import "./root.component.css";

interface Dino {
  name: string;
  period: string;
  info: string;
}

const dinosaurs: Dino[] = [
  {
    name: "Tyrannosaurus Rex",
    period: "Late Cretaceous",
    info: "One of the largest land carnivores.",
  },
  {
    name: "Triceratops",
    period: "Late Cretaceous",
    info: "Herbivore with three distinctive horns.",
  },
  {
    name: "Stegosaurus",
    period: "Late Jurassic",
    info: "Known for plates along its back.",
  },
];

export default function Root() {
  return (
    <div className="home-container">
      <h1>Welcome to the Dinosaur Database</h1>
      <p>Your gateway to the prehistoric world</p>
      <div className="dino-grid">
        {dinosaurs.map((dino) => (
          <div key={dino.name} className="dino-card">
            <div className="dino-emoji">🦖</div>
            <h3>{dino.name}</h3>
            <p className="dino-period">{dino.period}</p>
            <p>{dino.info}</p>
          </div>
        ))}
      </div>
      <p className="link-to-list">
        ...and even more! <a href="/dino-list">Browse them all</a>
      </p>
    </div>
  );
}

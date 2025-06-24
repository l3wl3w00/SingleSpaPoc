import React from "react";
import "./root.component.css";

export interface RootProps {
  name?: string;
}

export default function Root({ name }: RootProps) {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Dinosaur Database
      </a>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dino-list">Dinos</a>
        </li>
      </ul>
    </nav>
  );
}

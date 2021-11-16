import React, { useState } from "react";
import { AddCategory } from "./components/AddCategoy";
import { GifGrid } from "./components/GifGrid";

export const App = () => {
  const [categories, setCategories] = useState(["Luffy"]);

  return (
    <div>
      <div className="card-box">
        <h2>Gif ExpertApp</h2>
        <AddCategory setCategories={setCategories} />
      </div>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

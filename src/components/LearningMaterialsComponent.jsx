import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials as initialData } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [materials, setMaterials] = useState(initialData);
  const [sortOrder, setSortOrder] = useState(""); // Store selected sort option

  // Toggle Favorite Function
  const toggleFavorite = (id) => {
    setMaterials((prevMaterials) =>
      prevMaterials.map((material) =>
        material.id === id ? { ...material, isFavorite: !material.isFavorite } : material
      )
    );
  };

  // Sorting Function
  const sortedMaterials = [...materials].sort((a, b) => {
    if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
    if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
    return 0; // No sorting by default
  });

  return (
    <div className="bg-white drop-shadow-lg w-full rounded-2xl overflow-auto h-[80vh]">
      {/* Filter Component with Sort Handler */}
      <FilterComponent setSortOrder={setSortOrder} />

      {/* Title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* Materials List */}
      <div className="space-y-3">
        {sortedMaterials.map((material) => (
          <div key={material.id} className="bg-gray-100 px-4 py-2 flex gap-5 items-center rounded-lg">
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl object-contain"
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={20}
                  fill={material.isFavorite ? "gold" : "none"}
                  stroke="black"
                  className="cursor-pointer"
                  onClick={() => toggleFavorite(material.id)}
                />
              </div>
              <p className="text-gray-400 text-sm">Posted at: {material.postedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

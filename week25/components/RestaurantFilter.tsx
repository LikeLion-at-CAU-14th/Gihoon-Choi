
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Restaurant } from "@/data/restaurants";

export default function RestaurantFilter({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  const [selectedCategory, setSelectedCategory] =
    useState("전체");

  const categories = [
    "전체",
    ...new Set(restaurants.map((item) => item.category)),
  ];

  const filteredRestaurants =
    selectedCategory === "전체"
      ? restaurants
      : restaurants.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2 font-bold transition ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "border border-orange-300 bg-white text-orange-500 hover:bg-orange-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        총 {filteredRestaurants.length}개의 맛집
      </p>

      <ul className="grid grid-cols-2 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              href={`/restaurants/${restaurant.id}`}
              className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <span className="text-4xl">
                {restaurant.emoji}
              </span>

              <span className="text-lg font-bold">
                {restaurant.name}
              </span>

              <span className="text-sm text-gray-500">
                {restaurant.category} · {restaurant.menu}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {filteredRestaurants.length === 0 && (
        <p className="py-10 text-center text-gray-500">
          해당 카테고리에 등록된 맛집이 없어요.
        </p>
      )}
    </div>
  );
}
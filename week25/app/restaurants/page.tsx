import Link from "next/link";
import { restaurants } from "@/data/restaurants";

export default function RestaurantsPage() {
  console.log("맛집 목록 페이지가 렌더링됐어요!");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">맛집 목록</h1>
      <ul className="grid grid-cols-2 gap-4">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              href={`/restaurants/${restaurant.id}`}
              className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md"
            >
              <span className="text-4xl">{restaurant.emoji}</span>
              <span className="text-lg font-bold">{restaurant.name}</span>
              <span className="text-sm text-gray-500">
                {restaurant.category} · {restaurant.menu}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
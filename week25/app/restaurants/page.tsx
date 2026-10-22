
import { restaurants } from "@/data/restaurants";
import RestaurantFilter from "@/components/RestaurantFilter";

export default function RestaurantsPage() {
  console.log("맛집 목록 페이지가 렌더링됐어요!");

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">맛집 목록</h1>

      <RestaurantFilter restaurants={restaurants} />
    </div>
  );
}
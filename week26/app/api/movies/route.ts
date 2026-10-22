// 실습 - Data Fetching
import { movies } from "@/data/movies";
export async function GET() {
    return Response.json(movies);
}

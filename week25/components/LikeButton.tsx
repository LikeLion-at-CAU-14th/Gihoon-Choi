"use client";

import { useState } from "react";

export default function LikeButton() {
    const [count, setCount] = useState(0);

    return (
        <button
            onClick={() => setCount(count + 1)}
            className="w-fit rounded-full border border-orange-500 px-4 py-2 font-bold text-orange-500 hover:bg-orange-500 hover:text-white">
                ❤️ 또 가고 싶어요 {count}
            </button>
    );
}
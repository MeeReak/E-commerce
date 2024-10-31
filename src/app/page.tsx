"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex gap-5 ">
        {[1, 2, 3, 4, 5].map((id) => (
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            href={`/product/${id} `}
            key={id}
          >
            Product {id}
          </Link>
        ))}
      </div>
    </>
  );
}

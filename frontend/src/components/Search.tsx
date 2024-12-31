"use client";

import { SearchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

// Sample list of products
const products = [
  "Apple",
  "Fresh Cauliflower",
  "Chinese Cabbage",
  "Corn",
  "Eggplant",
  "Green Chili",
  "Green Lettuce",
  "Okras",
  "Indian Malta",
  "Red Capsicum",
  "Red Tomatoes",
  "Red Cherry",
  "Fresh Broccoli",
  "Vegetable",
  "Meat",
  "Fish",
  "Bakery",
  "Beverages",
  "Diabetic Food",
  "Oil",
  "Cooking",
  "Snacks",
  "Fruits",
  "Can Food",
  "Sea Food",
  "Beef",
];

// Custom hook for debouncing input
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

// Function to filter products based on query (using startsWith)
const filterProducts = (query: string) => {
  if (!query) return [];
  return products.filter(
    (product) => product.toLowerCase().includes(query.toLowerCase()) // Change to startsWith for prefix match
  );
};

export const Search = () => {
  const [query, setQuery] = useState(""); // Holds search input
  const [loading, setLoading] = useState(false); // To simulate loading state
  const [results, setResults] = useState<string[]>([]); // Filtered products based on search
  const debouncedQuery = useDebounce(query, 500); // Debounce the query input

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true); // Set loading to true when filtering starts

      // Simulate an async operation
      setTimeout(() => {
        setResults(filterProducts(debouncedQuery));
        setLoading(false); // Set loading to false once filtering is done
      }, 500); // Adjust delay to simulate async behavior
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.location.href = `/shop/1?q=${query}`;
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <Input
          className="w-[400px] py-[21px] rounded-tr-none rounded-br-none"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          onKeyDown={handleKeyDown} // Listen for the Enter key press
          leftIcon={<SearchIcon className=" text-gray-900 stroke-[1.5px]" />}
        />
        <Link href={`/shop/1?q=${query.trim()}`}>
          <Button
            onClick={() => setQuery("")}
            // onClick={handleSearchClick}
            className="py-3 px-6 rounded-tl-none rounded-bl-none"
          >
            Search
          </Button>
        </Link>
      </div>

      {/* Display search results dynamically */}
      {query && (
        <div className="absolute w-[490px]  bg-white shadow-md rounded-lg z-10">
          {loading ? (
            <div className="py-3 px-4 text-gray-500">Loading...</div>
          ) : (
            <>
              {/* Show results if query is non-empty */}
              {query && results.length > 0 && (
                <>
                  <div className="py-2 px-4 text-gray-600 text-base font-semibold">
                    Results
                  </div>
                  {results.map((result, index) => (
                    <Link
                      onClick={() => {
                        setQuery("");
                      }}
                      href={`/shop/1?q=${result}`}
                      key={index}
                      className={`py-2 px-4 flex items-center gap-x-4 hover:bg-gray-200 text-sm cursor-pointer ${
                        index === results.length - 1 && "hover:rounded-b-lg"
                      }`}
                    >
                      <SearchIcon className="stroke-[1.5px] size-5 text-gray-500" />
                      <p className="text-gray-600">{result}</p>
                    </Link>
                  ))}
                </>
              )}

              {/* If no results, show a "no results" message */}
              {query && results.length === 0 && (
                <div className="py-3 px-4 text-base text-gray-500">
                  No results found
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

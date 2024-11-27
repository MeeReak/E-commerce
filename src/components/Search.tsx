"use client";

import { SearchIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    if (query.trim()) {
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
          leftIcon={<SearchIcon />}
        />
        <Button
          onClick={handleSearchClick}
          className="py-3 px-6 rounded-tl-none rounded-bl-none"
        >
          Search
        </Button>
      </div>

      {/* Display search results dynamically */}
      {query && (
        <div className="absolute w-[400px] mt-2 bg-white shadow-md rounded-lg z-10">
          {loading ? (
            <div className="py-3 px-4 text-gray-500">Loading...</div>
          ) : (
            <>
              {/* Show results if query is non-empty */}
              {query && results.length > 0 && (
                <>
                  <div className="py-2 px-4 text-gray-600 font-semibold">
                    Results
                  </div>
                  {results.map((result, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        (window.location.href = `/shop/1?q=${result}`)
                      }
                      className="py-1 px-4 flex items-center gap-x-4 hover:bg-gray-200 cursor-pointer"
                    >
                      <SearchIcon className="stroke-[1.5px] size-5 text-gray-500" />
                      <p className="text-gray-600">{result}</p>
                    </div>
                  ))}
                </>
              )}

              {/* If no results, show a "no results" message */}
              {query && results.length === 0 && (
                <div className="py-3 px-4 text-gray-500">No results found</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

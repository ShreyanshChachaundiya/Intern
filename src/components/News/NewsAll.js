import React, { useEffect, useState } from "react";
import NewsCard from "../../shared/card/NewsCard";
import NewsSlider from "./NewsSlider";
import { data } from "../../shared/Data/data";

const NewsAll = () => {
  const [filterNews, setFilterNews] = useState(data);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState(data);
  console.log(filterData);

  const handleFilter = (value) => {
    if (value === "") {
      setFilterData(data);
      return;
    }
    const filteredItems = data.filter((item) => item.type === value);
    setFilterData(filteredItems);
  };

  useEffect(() => {
    handleFilter("");
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    // console.log(value);

    const filterResult = value
      ? filterNews.filter((item) =>
          item.review.toLowerCase().includes(value.toLowerCase())
        )
      : data;
    setFilterData(filterResult);
  };

  return (
    <div>
     <input
        type="text"
        placeholder="Search Your News..."
        value={search}
        onChange={handleSearch}
        className="px-4 py-2 border mb-3 w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
        Trending News
      </h2>
      <NewsSlider/>
      <div className="flex gap-5">
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("Sports");
          }}
        >
          Sports
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("Politics");
          }}
        >
          Politics
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("Health");
          }}
        >
          Health
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("business");
          }}
        >
          Business
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("finance");
          }}
        >
          Finance
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("");
          }}
        >
          All
        </button>
      </div>
      {filterData.map((item) => (
        <NewsCard item={item} />
      ))}
    </div>
  );
};

export default NewsAll;

import React, { useContext, useEffect, useState } from "react";
import ShopCard from "../../shared/card/ShopCard";
import ShopCardSm from "../../shared/card/ShopCardSm";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import ShopForm from "./ShopForm";
import { data } from "../../shared/Data/data";
import Loader from "../../shared/Loader";

const ShopMid = () => {
  const [filterNews, setFilterNews] = useState(data);
  const [allItems, setAllItems] = useState();
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const user = useContext(AuthContext);
  const role = user.role;
  const token = user.token;

  const handleFilter = async (value) => {
    if (value === "") {
      setFilterData(allItems);
      return;
    }
    const filteredItems = allItems.filter((item) => item.category === value);
    setFilterData(filteredItems);
  };

  const handleItems = async () => {
    setIsLoading(true)
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/items/get/items",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      throw new Error(res.message);
    }
    setIsLoading(false)
    setAllItems(res.items);
    // setFilterData(allItems);  this will not work...
    setFilterData(res.items);
  };

  useEffect(() => {
    handleItems();
    handleFilter("all");
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filterResult = value
      ? allItems.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      : allItems;
    setFilterData(filterResult);
  };

  return (
    <div className="w-[38%] absolute left-[26%] top-16 h-[100vh]">
      <input
        type="text"
        placeholder="Search Your Item..."
        value={search}
        onChange={handleSearch}
        className="px-4 py-2 border mb-3 w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="flex justify-between align-middle mb-5">
        <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3] align-middle">
          Today Pick's
        </h2>
        {/* {role === "admin" && <ShopForm />} */}
      </div>
      <div className="">{isLoading&&<div className="absolute left-[40%] top-[-20%]"><Loader/></div>}</div>
      
      <div className="flex justify-between flex-wrap">
        {allItems?.map((item, ind) => {
          if (ind === 1 || ind === 0 || ind===2) {
            return <Link to={`/shop/${item?._id}`}>
                 <ShopCardSm item={item} />
            </Link>;
          }
        })}
      </div>
      {!isLoading&&<div className="flex gap-5">
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("watch");
          }}
        >
          Watch
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("shirt");
          }}
        >
          Shirt
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("jeans");
          }}
        >
          Jeans
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("earphone");
          }}
        >
          Earphones
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("mobile");
          }}
        >
          Mobiles
        </button>
        <button
          class="bg-gray-300 text-white hover:bg-purple-500 focus:bg-purple-500 transition-colors duration-300 ease-in-out px-4 py-2 rounded"
          onClick={() => {
            handleFilter("");
          }}
        >
          All
        </button>
      </div>}
      <div className="">{isLoading&&<div className="absolute left-[40%] top-[-20%]"><Loader/></div>}</div>
      <div className="flex flex-wrap gap-10 mt-7 ">
        {filterData?.map((item) => (
          <Link to={`/shop/${item?._id}`}>
            <ShopCardSm item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopMid;

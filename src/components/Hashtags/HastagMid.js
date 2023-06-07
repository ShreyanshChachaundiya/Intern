import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

const HastagMid = () => {
  const user = useContext(AuthContext);
  const token = user.token;
  const [hashtags, setHashtags] = useState();
  const [filterHashtags, setFilterHashtags] = useState();
  const [search, setSearch] = useState();

  const handleHashtags = async () => {
    const responce = await fetch(
      "https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/posts/AllHashtags",
      {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    );

    const res = await responce.json();
    if (!responce.ok) {
      return new Error(res.message);
    }
    setHashtags(res.hashtags);
    setFilterHashtags(res.hashtags);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    console.log(search);

    setFilterHashtags(value);

    const filterResult = value
      ? hashtags.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      : hashtags;

    setFilterHashtags(filterResult);
  };

  useEffect(() => {
    handleHashtags();
  }, []);

  return (
    <div className="flex flex-col relative left-[23%] w-[42%] top-16 ">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="px-4 py-2 border mb-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <h2 className="text-2xl font-bold mb-4 text-left text-[#b122d3]">
        Top Hashtags
      </h2>
      <ul className="space-y-2 flex flex-col ">
        {!!filterHashtags &&
          filterHashtags.map((hashtag, index) => (
            <li
              key={index}
              className="inline-block bg-gray-200  px-2 py-2 rounded-md text-sm font-medium text-gray-700 "
            >
              <Link
                className="flex"
                to={`/hashtags/${hashtag.slice(1, hashtag.length)}`}
              >
                <span className="text-left inline-block">{index + 1}.</span>
                <div className="w-full">{hashtag}</div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HastagMid;

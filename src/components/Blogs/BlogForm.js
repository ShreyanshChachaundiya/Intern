import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import Loader from "../../shared/Loader";

const BlogForm = ({ handleClose }) => {
  const [title, setTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const id = auth.userId;
  const token = auth.token;
  const name = auth.name;

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const validationErrors = {};
    // if (name.trim() === "") {
    //   validationErrors.name = "Name is required";
    // }
    if (title.trim() === "") {
      validationErrors.title = "Title is required";
    }
    if (blogBody.trim() === "") {
      validationErrors.blogBody = "Blog body is required";
    }
    if (date.trim() === "") {
      validationErrors.date = "Date is required";
    }

    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any further actions
      console.log("Form submitted:", { name, title, blogBody, date });
      await res();
      setIsLoading(false);
      handleClose();
      window.location.reload("/blogs/All");
    } else {
      setIsLoading(false)
      setErrors(validationErrors);
    }
  };

  const res = async () => {
    const responce = await fetch(
      `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/blogs/add`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user: id,
          name: name,
          title: title,
          body: blogBody,
          date: date,
        }),
      }
    );
    const res = await responce.json();
    if (!responce.ok) {
      if (res.status == 422) {
        const validationErrors = {};
        validationErrors.date =
          "invalid input passed check your date format kindly";
        setErrors(validationErrors);
      }
      throw new Error(res.message);
    }
    console.log("Success");
  };

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <div>
        {isLoading && (
          <div className="h-1 absolute left-[48%] top-[-29%]">
            <Loader />
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="name">
          Name:
        </label>
        <input
          className={`w-full p-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          id="name"
          value={name}
          readOnly
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="title">
          Title:
        </label>
        <input
          className={`w-full p-2 border ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="blogBody">
          Blog Body:
        </label>
        <textarea
          className={`w-full p-2 border ${
            errors.blogBody ? "border-red-500" : "border-gray-300"
          }`}
          id="blogBody"
          value={blogBody}
          onChange={(e) => setBlogBody(e.target.value)}
        ></textarea>
        {errors.blogBody && <p className="text-red-500">{errors.blogBody}</p>}
      </div>
      <div>
        <label className="block mb-2 text-lg text-left">Date:</label>
        <input
          className={`w-full p-2 border ${
            errors.date ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="yyyy-mm-dd"
        />
        {errors.date && <p className="text-red-500">{errors.date}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;

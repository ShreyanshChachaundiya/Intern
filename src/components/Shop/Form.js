import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";

const Form = ({ handleClose, descr, itemTitle,itemCost, itemCategory, id  }) => {
  const [title, setTitle] = useState(itemTitle);
  const [description, setDescription] = useState(descr);
  const [category, setCategory] = useState(itemCategory);
  const [cost, setCost] = useState(itemCost);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);
  const userId = auth.userId;
  const token = auth.token;
  const name = auth.name;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (title.trim() === "") {
      validationErrors.title = "title is required";
    }
    if (description.trim() === "") {
      validationErrors.description = "description is required";
    }
    if (category.trim() === "") {
      validationErrors.category = "category is required";
    }
    if (cost === "") {
      validationErrors.cost = "cost is required";
    }

    // Check if there are any errors
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or perform any further actions
      {itemTitle==""?await add():await update();}
      handleClose();
      window.location.reload("/blogs/All");
    } else {
      setErrors(validationErrors);
    }
  };

  const update = async () => {
    const responce = await fetch(`http://localhost:5000/api/items/edit/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title:title,
        cost:cost,
        description:description,
        category:category
      }),
    });
    const res = await responce.json();
    if (!responce.ok) {
      setIsLoading(false)
      if (res.status == 422) {
        const validationErrors = {};
        validationErrors.date =
          "invalid input passed check your date format kindly";
        setErrors(validationErrors);
        setIsLoading(false)
      }
      throw new Error(res.message);
    }
    console.log("Success");
  };

  const add = async () => {
    const responce = await fetch(`https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/items/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user:userId,
        title: title,
        cost: cost,
        description: description,
        category: category,
      }),
    });
    const res = await responce.json();
    if (!responce.ok) {
      if (res.status == 422) {
        const validationErrors = {};
        validationErrors.category = "invalid input passed check your inputs";
        setErrors(validationErrors);
      }
      throw new Error(res.message);
    }
    console.log("Success");
  };

  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
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
        <label className="block mb-2 text-lg text-left" htmlFor="cost">
          Cost:
        </label>
        <input
          className={`w-full p-2 border ${
            errors.cost ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          id="cost"
          placeholder="rupee.."
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        {errors.cost && <p className="text-red-500">{errors.cost}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-lg text-left" htmlFor="description">
          Description:
        </label>
        <textarea
          className={`w-full p-2 border ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description}</p>
        )}
      </div>
      <div>
        <label className="block mb-2 text-lg text-left">Category:</label>
        <input
          className={`w-full p-2 border ${
            errors.category ? "border-red-500" : "border-gray-300"
          }`}
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="watch shirt jeans mobile earphone"
        />
        {errors.category && <p className="text-red-500">{errors.category}</p>}
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

export default Form;
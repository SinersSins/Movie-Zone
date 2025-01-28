import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../style/addMovie.css"
export const AddMovie = () => {
  let [input, setInput] = useState({
    title: "",
    description: "",
    year: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  async function handleAdd() {
    await axios.post(
      "https://pscproject-52867-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      input
    );
    alert("Movie Added Successfully")
    
    setInput({
        title: "",
        description: "",
        year: "",
      })
  }

  return (
    <>
      <Navbar />
      <div className="addMovie">
        <h1>Add the Movie 🎬</h1>
        <input
          name="title"
          placeholder="Enter the movie"
          value={input.title}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Enter the description"
          value={input.description}
          onChange={handleChange}
        />
        <input
          name="year"
          placeholder="Enter the Realese Year"
          value={input.year}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>➕Add</button>
      </div>
    </>
  );
};

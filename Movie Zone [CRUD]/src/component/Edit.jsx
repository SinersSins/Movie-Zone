import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Edit = () => {
  let { id } = useParams();

  let [input, setInput] = useState({
    title: "",
    description: "",
    year: "",
  });

  async function getData() {
    let res = await axios.get(
      `https://pscproject-52867-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`
    );

    setInput(res.data);
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }


  async function handleUpdate() {
    await axios.put(
      `https://pscproject-52867-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,
      input
    );
    alert("Updated Successfuly");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Edit Page</h1>
      <div>
        <div>
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
          <button onClick={handleUpdate}> 📝 Update</button>
        </div>
      </div>
    </>
  );
};

export default Edit;

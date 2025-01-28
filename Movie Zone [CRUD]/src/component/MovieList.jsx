import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../style/MovieList.css";
import Navbar from "./Navbar";
import { TheContext } from "../context/TheContext";
import { Link } from "react-router-dom";


export const MovieList = () => {
  let [movies, setMovies] = useState([]);

  let { isLoggedIn, setIsLoggedIn } = useContext(TheContext);

  async function getMovies() {
    let res = await axios.get(
      "https://pscproject-52867-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
    );

    let arr = [];
    for (let key in res.data) {
      arr.push({ id: key, ...res.data[key] });
    }

    setMovies([...arr]);
  }

  async function handleDelete(id) {
    // console.log(id)
    await axios.delete(
      `https://pscproject-52867-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`
    );

    getMovies();
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h1>Movies List 🎥</h1>
        <button
          style={
            isLoggedIn
              ? {
                  backgroundColor: "Green",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                }
              : {
                  backgroundColor: "Red",
                  color: "white",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                }
          }
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Log_Out" : "Log_In"}
        </button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>{movie.year}</p>

            {isLoggedIn ? (
              <>
                <Link style={{color:"red" , textDecoration: "none", padding : "30px"}} to= {`/edit/${movie.id}`} >✏️ Edit</Link>
                <button onClick={() => handleDelete(movie.id)}>
                  {" "}
                  ❌ Delete
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

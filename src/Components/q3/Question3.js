import React, { useEffect, useState } from "react";

export const Question3 = () => {
  // Create a React component that fetches a list of movies from an API endpoint using useEffect hook and displays the title, year, and rating of each movie on the screen using the useState hook. Add a dropdown which filters the movies by year. You can keep 5 dropdown values - 2005 to 2010.

  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/movies") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { title: "The Dark Knight", year: 2008, rating: 9.0 },
              { title: "Inception", year: 2009, rating: 8.8 },
              { title: "Interstellar", year: 2010, rating: 8.6 },
              { title: "Tenet", year: 2009, rating: 7.5 },
              { title: "Real Steal", year: 2007, rating: 7.5 },
            ],
          });
        } else {
          reject({
            status: 404,
            message: "Movies list not found.",
          });
        }
      }, 2000);
    });
  };

  const [movieList, setMovieList] = useState([]);
  const [updatedMovieList, setUpdatedMovieList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  const getMovies = async () => {
    try {
      const result = await fakeFetch("https://example.com/api/movies");
      setMovieList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMovieList = () => {
    if (selectedYear === "all") {
      setUpdatedMovieList(movieList.map((ele) => ele));
    } else {
      setUpdatedMovieList(
        movieList.filter((ele) => ele.year === Number(selectedYear))
      );
    }
  };

  useEffect(() => {
    setUpdatedMovieList(movieList);
  }, [movieList]);

  const handleFilterByYear = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    getMovieList();
  }, [selectedYear]);

  return (
    <div>
      <h2>Movies List</h2>
      <label htmlFor="">Filter By Year</label>{" "}
      <select value={selectedYear} onChange={handleFilterByYear}>
        <option value="all">All</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
      </select>
      <ul>
        {updatedMovieList.map((ele, index) => {
          return (
            <li key={index} className="q3">
              <div>
                Name: {ele.title} <br />
                Year: {ele.year} <br />
                Rating: {ele.rating}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

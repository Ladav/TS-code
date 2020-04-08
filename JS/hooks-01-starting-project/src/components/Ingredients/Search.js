import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../hooks/http";

const Search = React.memo((props) => {
  const { data, isLoading, error, sendRequest } = useHttp();
  const { setSearchIngredients } = props;
  const [enteredSearch, setSearch] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    console.log("in 1st");
    const timer = setTimeout(() => {
      if (enteredSearch === inputRef.current.value) {
        const query =
          enteredSearch.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredSearch}"`;
        sendRequest(
          `https://testing-e7dc9.firebaseio.com/ingredients.json${query}`,
          "GET"
        );
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredSearch, sendRequest]);

  useEffect(() => {
    console.log("in 2st");
    if (!isLoading && !error && data) {
      console.log(data);
      const loadedIngs = [];
      for (let key in data) {
        loadedIngs.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }
      setSearchIngredients(loadedIngs);
    }
  }, [data, error, isLoading, setSearchIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredSearch}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;

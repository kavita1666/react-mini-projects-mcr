import React, { useEffect, useState } from "react";
import "./AutoSearch.css";

export const AutoSearch = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setIsLoading(false);
      setData(result.products);
    } catch (err) {
      console.log(err, "error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterData = () => {
    if (searchQuery.trim().length !== 0) {
      const filteredData = data.filter((item) => item.title.includes(searchQuery.trim()));
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  };

  const debounceSearch = (func, delay = 1000) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, delay);
    };
  };

  useEffect(() => {
    debounceSearch(handleFilterData, 1000)();
  }, [searchQuery]);

  return (
    <div className="auto-search-container">
      <div className="input-container">
        <input placeholder="type something here...." type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input-field" />
        <button className="button" onClick={() => handleFilterData()}>
          search
        </button>
      </div>
      <div className="result-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {filteredData &&
              filteredData?.map((item, index) => {
                return (
                  <li className="lists" key={index}>
                    {item.title}
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
};

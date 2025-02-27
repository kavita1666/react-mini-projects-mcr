import { useState } from "react";
import "./navbar.css";

const apiKey = "28b5e4f333d741678a6d48b15e2c8fe5";

const NavBar = ({ setNewsData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue === "") {
      return;
    }
    handleSearchQuery();
  };

  const handleSearchQuery = async (query) => {
    if (query === "") {
      return;
    }
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`);
    const data = await response.json();
    setNewsData(data?.articles);
  };

  return (
    <nav>
      <div className="nav-container obj-width">
        <a href="index.html" id="news-logo">
          News.
        </a>
        {/* <div className="search-container">
          <input type="text" placeholder="yet to implement.." className="search-input" id="search-input" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button className="search-btn" id="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react";
import "./Pagination.css";

const PAGE_SIZE = 10;

export const Pagination = () => {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    if (response.products.length > 0) {
      setProductsData(response.products);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(productsData.length / PAGE_SIZE);
  const startPage = currentPage;
  const endPage = currentPage * PAGE_SIZE;

  const handleClickPreviousPage = () => {
    setCurrentPage((prev) => {
      if (prev - 1 === 0) return totalPages;
      return prev - 1;
    });
  };
  const handleClickNextPage = () => {
    setCurrentPage((prev) => {
      if (prev + 1 > totalPages) return 1;
      return prev + 1;
    });
  };

  return (
    <div className="pagination-container">
      <h2>News Blogs</h2>
      <div className="products-container-outer">
        <div className="pages-tabs-container">
          <button className="pages-tabs navigation-btn" onClick={handleClickPreviousPage}>
            {"<"}
          </button>
          {[...Array(totalPages).keys()].map((_, index) => {
            return <button className={currentPage === index + 1 ? "active pages-tabs" : "pages-tabs"}>{index + 1}</button>;
          })}
          <button className="pages-tabs navigation-btn" onClick={handleClickNextPage}>
            {">"}
          </button>
        </div>

        <div className="products-container">
          {!loading ? (
            productsData.slice(startPage, endPage).map((product) => {
              return (
                <div className="products-card-container" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <div>{product.title}</div>
                </div>
              );
            })
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    </div>
  );
};

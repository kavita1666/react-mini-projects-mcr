import BlogCard from "./BlogCard/BlogCard";
import "./BlogsContainer.css";

const BlogsContainer = ({newsData, handleScroll}) => {
    return (
        <div
          className="blog-container"
          onScroll={handleScroll}
        >
          {newsData &&
            newsData.map((item, index) => {
              return <BlogCard blogDetails={item} key={index} />;
            })}
        </div>
    )
}

export default BlogsContainer;
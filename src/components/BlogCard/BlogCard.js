import "./BlogCard.css";

const BlogCard = ({ blogDetails }) => {
  const getTitleDisplay = (title) => {
    return title.length > 30 ? title.slice(0, 30) + "..." : title;
  };

  const getContentDisplay = (description) => {
    return description.length > 120 ? description.slice(0, 120) + "..." : description;
  };

  return (
    <div className="blog-card">
      <img src={blogDetails.urlToImage} alt={blogDetails.title} id="blog-card-image" />
      <h3>{getTitleDisplay(blogDetails.title)}</h3>
      <p>{getContentDisplay(blogDetails.description || "")}</p>
    </div>
  );
};

export default BlogCard;

import "./_home.scss";

import BlogCard from "../BlogCard/BlogCard";

const Navbar = props => {
  return (
    <div className="container">
      <div className="blog-card-container">
        {
          props.topHeadlines?.map(el => (
            <BlogCard image={el.urlToImage} title={el.title} description={el.description} />
            ))
          }
      </div>
    </div>
  );
}

export default Navbar

import "./_home.scss";
import { v4 as uuidv4 } from 'uuid'
import BlogCard from "../BlogCard/BlogCard";
import { useState } from "react";

const Navbar = props => {
  const [loadMore, setLoadMore] = useState(false)

  const firstTwelve = props.topHeadlines?.slice(0, `${loadMore ? 20 : 12}`)

  return (
    <div className="container">
      <div className="blog-card-container">
          {
          firstTwelve?.map(el => (
            <BlogCard key={uuidv4()} image={el.urlToImage} title={el.title} description={el.description} />
            ))
          }
      </div>
      <button style={{display: loadMore ? 'none' : 'block'}} className="load-more-btn" onClick={() => setLoadMore(true)}>LOAD MORE</button>
    </div>
  );
}

export default Navbar

import { useEffect, useState } from "react";
import "./_article.scss";

const Navbar = props => {

  const [fourNews, setFourNews] = useState(null)

  useEffect(() => {
    setFourNews(props.topHeadlines?.slice(0, 3))
  }, [])

  return (
    <main id="article">
      <div className="container">
        <div className="container-main">

          <img src={props.el.urlToImage} alt="" />
            <h2 className="news-title">{props.el.title}</h2>
            <p>SOURCE: {props.el.source.name}</p>
            <p>AUTHOR: {props.el.author}</p>
            <p>DESC: {props.el.description}</p>
            <p>CONTENT: {props.el.content}</p>
            <p>DATE: {props.el.publishedAt}</p>
        </div>

        <div className="container-sidebar">
          <h3 className="recent-cont-title">RECENT NEWS</h3>
          {
            fourNews?.map(el => (
              <div className="recent-news">
                <img src={el.urlToImage} alt={el.title} />
                <div className="content">
                  <p className="recent-title">{el.title}</p>
                  <p className="recent-desc">{el.description}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </main>
  );
}

export default Navbar

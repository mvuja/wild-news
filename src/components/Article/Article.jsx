import { useEffect, useState } from "react";
import "./_article.scss";
import { Link } from "react-router-dom";

import hero from '../../assets/hero-2.png'

const Navbar = props => {

  const [fourNews, setFourNews] = useState(null)
  const [date, setDate] = useState('')

  useEffect(() => {
    setFourNews(props.topHeadlines?.slice(0, 3))
    const newDate = new Date(props.el.publishedAt)
    setDate(newDate.toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}))
  }, [])

  return (
    <main id="article">
      <img className="hero-graphic" src={hero} alt="Graphic" />
      <div className="container">
        <div className="container-main">

          {
            props.el.urlToImage &&
            <img src={props.el.urlToImage} alt="" />
          }
          {
            date &&
            <p className="news-date">{date}</p>
          }
          {
            props.el.title &&
            <h2 className="news-title">{props.el.title}</h2>
          }
          {
            props.el.author &&
            <p className="news-author">"{props.el.author}"</p>
          }
          {
            props.el.description &&
            <p className="news-desc">{props.el.description}</p>
          }
          {
            props.el.content &&
            <p className="news-content">{props.el.content}</p>
          }
          {
            props.el.source.name &&
            <p className="news-source">SOURCE: {props.el.source.name}</p>
          }
        </div>

        <div className="container-sidebar">
          <h3 className="recent-cont-title">RECENT NEWS</h3>
          {
            fourNews?.map(el => (
              <div className="recent-news">
                <Link to={`${el.title?.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`} className='read-more'><img src={el.urlToImage} alt={el.title} /></Link>                
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

import "./_home.scss";
import { v4 as uuidv4 } from 'uuid'
import BlogCard from "../BlogCard/BlogCard";
import { useState } from "react";

import hero1 from '../../assets/hero-1.png'
import hero2 from '../../assets/hero-2.png'
import searchIcon from '../../assets/search.svg'

const Home = props => {
  const [loadMore, setLoadMore] = useState(false)
  const [search, setSearch] = useState('')
  const [isSearched, setIsSearched] = useState(false)
  const [isSorting, setIsSorting] = useState(false)


  const firstTwelve = props.topHeadlines?.slice(0, `${loadMore ? 20 : 12}`)


  const searchSubmit = e => {
    e.preventDefault()
    props.setTopicHandler(search)
    setIsSearched(true)
    setIsSorting(true)
    setSearch('')
  }
  
  const searchChangeHandler = e => {
    setSearch(e.target.value)
  }

  return (
    <main id="main">
      <div className="hero-bg">
        <div className="container">
          <img className="hero-1" src={hero1} alt="" />
          <img className="hero-2" src={hero2} alt="" />
          <h1>LATEST WILD NEWS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid qui facilis, voluptas odio animi cupiditate dicta corrupti recusandae repellendus doloremque, minima sequi inventore? Accusantium ullam.</p>
          <div className="search-container">
            <form onSubmit={searchSubmit}>
              <input onChange={searchChangeHandler} value={search} className="input" type="text" />
              <button>SEARCH</button>
            </form>  
          </div>
        </div>
      </div>

      <div className="container">
        {
          isSorting &&
          <div className="sort-container">
          <button onClick={() => props.setSortHandler('publishedAt')}>publishedAt</button>
          <button onClick={() => props.setSortHandler('popularity')}>popularity</button>
          <button onClick={() => props.setSortHandler('relevancy')}>relevancy</button>
        </div>
        }


        {
        isSearched ?      
        <div className="everything">
          {
            props.everything?.map(el => (
              <BlogCard key={uuidv4()} image={el.urlToImage} title={el.title} description={el.description} />
            ))
          }
        </div>
        :
        <div className="top-headlines">
          <div className="blog-card-container">
              {
              firstTwelve?.map(el => (
                <BlogCard key={uuidv4()} image={el.urlToImage} title={el.title} description={el.description} />
                ))
              }
          </div>
          <button style={{display: loadMore ? 'none' : 'block'}} className="load-more-btn" onClick={() => setLoadMore(true)}>LOAD MORE</button>
        </div>

        }
      </div>
    </main>

  );
}

export default Home
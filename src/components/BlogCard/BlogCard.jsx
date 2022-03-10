import './_blog-card.scss'

import {  Link } from "react-router-dom"


const BlogCard = props => {
    return (
      <div className='blog-card'>
        <img src={props.image} alt="" />
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
          <Link to={`article/${props.title?.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`} className='read-more'>Read Full Article</Link>
        </div>
      </div>
    );
  }
  
  export default BlogCard
  
import './_blog-card.scss'

import {  Link } from "react-router-dom"
import arrow from '../../assets/arrow.svg'
import logo from '../../assets/logo.svg'


const BlogCard = props => {
    return (
      <div className='blog-card'>
        <div className="img-container">
          {
            props.image ?
            <img className='main-img' src={props.image} alt={props.title} />
            :
            <div className="placeholder">
              <img className='logo-placeholder' src={logo} alt='' />
            </div>

          }
        </div>
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
          <Link to={`article/${props.title?.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`} className='read-more'>Read Full Article <img src={arrow} alt="" /></Link>
        </div>
      </div>
    );
  }
  
  export default BlogCard
  
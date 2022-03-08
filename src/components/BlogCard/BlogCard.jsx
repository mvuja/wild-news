import './_blog-card.scss'


const BlogCard = props => {
    return (
      <div className='blog-card'>
        <img src={props.image} alt="" />
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="description">{props.description}</p>
          <a href="#" className='read-more'>Read More</a>
        </div>
      </div>
    );
  }
  
  export default BlogCard
  
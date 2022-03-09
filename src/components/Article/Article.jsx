import "./_article.scss";

const Navbar = props => {

  return (
    <div className="container article-page">
        <img src={props.el.urlToImage} alt="" />
          <h2 className="news-title">{props.el.title}</h2>
          <p>SOURCE: {props.el.source.name}</p>
          <p>AUTHOR: {props.el.author}</p>
          <p>DESC: {props.el.description}</p>
          <p>CONTENT: {props.el.content}</p>
          <p>DATE: {props.el.publishedAt}</p>
    </div>
  );
}

export default Navbar

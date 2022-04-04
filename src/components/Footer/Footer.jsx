import { Link } from "react-router-dom";
import "./_footer.scss";
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container logo">
        <Link to="/wild-news">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="line"></div>
      <div className="container copy">
          <p>© Copyright 2022 WILD NEWS - All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer

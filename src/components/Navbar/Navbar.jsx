import { Link } from "react-router-dom";
import "./_navbar.scss";
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar

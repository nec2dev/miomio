import "./NavBar.css";
import SearchBox from '../../components/SearchBox/SearchBox';
import {Link} from 'react-router-dom';

const NavBar = ({ isCart = false }) => (
  <nav>
      <SearchBox />
  </nav>
);

export default NavBar;

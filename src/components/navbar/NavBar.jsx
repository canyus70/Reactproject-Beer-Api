import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return ( 
        <nav>
        <NavLink to="/"><img src="./Header.png"/></NavLink>
      
      </nav>
     );
}
 
export default NavBar;

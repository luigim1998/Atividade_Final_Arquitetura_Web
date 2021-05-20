import { Link, useHistory } from "react-router-dom";
import { useAuth } from  "./AuthContext";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>The Sambódromo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;
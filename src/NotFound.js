import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const NotFound = () => {
    return ( 
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="not-found">
                    <h2>Page Not Found - 404</h2>
                    <p>A página não foi encontrada!</p>
                    <Link to="/">Back to Home...</Link>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;
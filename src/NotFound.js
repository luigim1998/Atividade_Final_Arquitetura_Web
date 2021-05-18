import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Page Not Found - 404</h2>
            <p>A página não foi encontrada!</p>
            <Link to="/">Back to Home...</Link>
        </div>
     );
}
 
export default NotFound;
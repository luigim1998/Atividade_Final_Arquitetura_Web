import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import {useAuth} from './AuthContext';

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);

    const {currentUser} = useAuth();
    const history = useHistory();

    const handleDelete = () => {
        if (currentUser.email === 'admin@admin.com'){
            fetch('http://localhost:8000/blogs/'+id, {
                method: 'DELETE'
            })
            .then(()=>{
                history.push('/');
            });
        }else{
            alert("You Don't Have Permission for This Action!")
        }
    }

    return ( 
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="blog-details">
                    { isLoading && <div>Loading...</div> }
                    { error && <div>{ error }</div> }
                    { blog && (
                        <article>
                            <h2>{ blog.title }</h2>
                            <p>Escrito por: { blog.author }</p>
                            <div>{ blog.body }</div>
                            <button onClick={handleDelete}>Delete</button>
                        </article>
                    ) }
                </div>
            </div>
        </div>
     );
}
 
export default BlogDetails;
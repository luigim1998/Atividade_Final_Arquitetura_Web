import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import {useAuth} from './AuthContext';
import api from "./apibackend";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch('/blogs/' + id);
    const {currentUser} = useAuth();
    const history = useHistory();

    const handleDelete = () => {
        if (currentUser.email === 'admin@email.com'){
            // fetch('http://localhost:3500/blogs/'+id, {
            //     method: 'DELETE'
            // })
            api.delete('/blogs/'+id)
            .then(()=>{
                history.push('/');
            });
        }else{
            alert("Você não possui permissões administrativas. Somente admins podem deletar blogs!")
        }
    }
    console.log("o blog "+blog);

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
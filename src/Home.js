import BlogList from "./BlogList";
import Navbar from "./Navbar";
import useFetch from "./useFetch";
import {useAuth} from "./AuthContext";
import { useHistory } from "react-router";
import api from "./apibackend";

const Home = () => {

    //const {data:blogs, isLoading, error} = useFetch('/blogs');

    const isLoading = false
    const error = false
    const blogs = api.get('/blogs')
    .then(res => {
        console.log(res.data);
        return res.data;
    })

    const { currentUser, logout } = useAuth();
    const history = useHistory;

    async function handleLogOut(){
        try{
            await logout();
            history.pushState("/");
        }catch{
            console.log('Fail');
        }
    }

    console.log(currentUser.email);
    console.log(blogs);

    return ( 
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="logoutDiv">
                    <label><i>Logado como: </i><strong>{currentUser.email} </strong></label>
                    <button className="datBtn" onClick={handleLogOut}>Log Out</button>
                </div>


                <div className="home">
                    { error && <div> {error} </div> }
                    { isLoading && <div>Loading...</div>} 
                    {blogs && <BlogList blogs={blogs} title="Todos os blogs"/>}
                </div>
            </div>
            <div className="flogao">
            <p>
                Caramuru Campeao Productions&copy;
            </p>

            </div>
        </div>
        
    );
}
 
export default Home;
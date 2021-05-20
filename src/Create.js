import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        });
    }

    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <div className="create">
                    <h2>Adicionar Novo Blog</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Título do Blog:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Blog Body:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <label>Imagens:</label>
                        <input
                            multiple    
                            type="file"
                        />
                        <label>Autor do Blog:</label>
                        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                            <option value="Mario">Mario</option>
                            <option value="Yoshi">Yoshi</option>
                            <option value="Luigi_do_mal">Luigi_do_mal</option>
                        </select>
                        { !isPending && <button>Adicionar Blog</button> }
                        { isPending && <button disabled>Add Bloging...</button> }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;
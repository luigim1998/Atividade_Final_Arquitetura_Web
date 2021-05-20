import { useState, useEffect } from "react";
import api from "./apibackend";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        const abortCont = new AbortController();
        //fetch(url, { signal: abortCont.signal, method: 'GET'})
        api.get(url)
        .then(res => {
            console.log("dentro do get"+res.data);
            if(res.statusText !== "OK") {
                throw Error('could not fetch the data for taht resource');
            }
            console.log("data"+res.data);
            return res.data;
        })
        .then(data => {
            setData(data);
            console.log("SETADA NO CU DO data"+data);
            setIsLoading(false);
            setError(false);
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log(err.message);
            }
            else{
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            }
        });
        // cleanup function
        return () => abortCont.abort();
    }, [url]);
    return {data, isLoading, error};
}
 
export default useFetch;
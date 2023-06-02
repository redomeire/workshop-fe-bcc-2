import axios from "axios";
import { useEffect, useState } from "react";

const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
})

const useFetch = (config) => {
    // Destructuring config object.
    const {
        method,
        url,
        data,
        onSubmit,
        params
    } = config

    // you can make your own loading and error state here
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState([])
    const [error, setError] = useState({})

    const fetchData = () => {
        setLoading(true)

        axiosInstance({
            method,
            url,
            data,
            params
        })
            .then((result) => {
                if(Array.isArray(result.data))
                    setDatas(result.data)
                else 
                    setDatas([result.data])

                console.log(result.data);
            }).catch((err) => { 
                console.log(err);
                setError(err)
            })
            .finally(() => setLoading(false))
    }

    // function to run fetch in initial page load
    useEffect(() => {    
        if(onSubmit) return

        fetchData()
    }, [])

    // function to run fetch on form submit
    const submitForm = (e) => {
        e.preventDefault()
        fetchData()
    }

    return { 
        loading, 
        datas, 
        error, 
        submitForm 
    }
}

export default useFetch;

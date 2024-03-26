import { useEffect, useState } from "react";


const UseBookData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] =useState(true);
    useEffect(()=>{
        setLoading(true)
        fetch("/Books.json")
        .then(res =>res.json())
        .then(data =>setData(data))
        setLoading(false);
    },[])
    // useEffect(()=>{
    //     const fethData = async () =>{
    //         setLoading(true)
    //         const res = await fetch("/Books.json");
    //         const data = await res.json();
    //         setData(data);
    //         setLoading(false);
    //     };
    //     fethData()
    // },[]);

    return {data, loading};
};

export default UseBookData;
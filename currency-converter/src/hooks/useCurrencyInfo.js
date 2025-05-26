import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect( ()=>{
        const response =  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((data) => setData(data[currency]))
        .catch((err) => console.error(err));    
        
        
    }, [currency])
    return data;
}
export default useCurrencyInfo;
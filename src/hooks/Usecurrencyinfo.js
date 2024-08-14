import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
        .then((res) => res.json)
        .then((res) => setInfo(res[currency]))
        console.log(info);
    },[])
}

export default useCurrencyInfo;
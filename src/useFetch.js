import  { useEffect, useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      async function getData(url){
        const call = await fetch(url);
        const res = await call.json();
        console.log(res)
        setData(res)
      }
      getData();
    },[]);  
  return [data];
}

export default useFetch

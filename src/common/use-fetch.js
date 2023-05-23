import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [allStations, setAllStations] = useState(null);
  
  useEffect(() => {
  	const fetchData = async () => {
    	try {
      	const response = await axios.get(url);
        const data = response?.data?.data;
        setAllStations(data);
      } catch (error) {
      	console.error(error);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { allStations };
};

export default useFetch;

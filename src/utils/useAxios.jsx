import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (params) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await axios.request(params);
      setResponse(res.data.products);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData(params);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return { response, error, loading };
};


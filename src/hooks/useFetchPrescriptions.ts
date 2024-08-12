import { IPrescriptionResponse } from '@/server/types/apiResponses/prescriptions/IPrescriptionResponse';
import { $user } from '../store/user';
import { useStore } from '@nanostores/react';
import { useState, useEffect } from 'react';

const useFetchPrescriptions = (page: number) => {
  const [data, setData] = useState<IPrescriptionResponse['data']>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { token } = useStore($user);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/recipes?page=' + page, {
          headers: { Authorization: token },
        });
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useFetchPrescriptions;

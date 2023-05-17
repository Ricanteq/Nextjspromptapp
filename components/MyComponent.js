"use client";
import { useEffect, useState } from 'react';
import getData from './getData';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((row) => (
        <div key={row.id}>{row.name}</div>
      ))}
    </div>
  );
}

export default MyComponent;

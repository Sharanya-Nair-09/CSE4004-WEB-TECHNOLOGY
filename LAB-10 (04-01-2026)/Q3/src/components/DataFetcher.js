import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result.slice(0, 10)); // limit to 10 items
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // runs only once ✅

  if (loading) {
    return <p className="status">Loading data...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="list-container">
      {data.map((item) => (
        <DataCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default DataFetcher;
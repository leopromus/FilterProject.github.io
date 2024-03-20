import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./App.css";

const myApi = "https://jsonplaceholder.typicode.com/comments/";
const FakeStore = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${myApi}/2`);
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h2 style={{ marginTop: '45px', fontFamily: 'Century Gothic', fontSize: '15px' }}>
          {apiData.email}
        </h2>
      </div>
    </div>
  );
};

export default FakeStore;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListPage.css";
import Card from "./Card";
const ListPage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
    // console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="listContainer">
      <div className="list">
        {data.map((val) => (
          <Card key={val.id} data={val}></Card>
        ))}
      </div>
    </div>
  );
};

export default ListPage;

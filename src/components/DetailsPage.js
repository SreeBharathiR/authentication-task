import React, { useEffect, useState } from "react";
import "./DetailsPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailsPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id);
  const fetchId = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div className="detailCon">
      <div className="details">
        {/* {console.log(data)} */}
        <p className="title">{data.title}</p>
        <p className="body">{data.body}</p>
      </div>
    </div>
  );
};

export default DetailsPage;

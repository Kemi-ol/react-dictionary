import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ImagesAPI.css";

export default function ImagesAPI(props) {
  const [images, setImages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const key = "c9c7oc64f71481aa1fa0f40af020b3t6";
      const query = props.keyword;
      const apiUrl = `https://api.shecodes.io/images/v1/search?query=${query}&key=${key}`;

      try {
        const response = await axios.get(apiUrl);
        handleResponse(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (props.keyword) {
      fetchData();
    }
  }, [props.keyword]);

  function handleResponse(response) {
    console.log(response.data.photos);
    setImages(response.data.photos);
  }

  return (
    <div className="ImagesAPI">
      {images &&
        images.slice(0, 3).map(function (image, index) {
          return <img className= "images img-fluid" src={image.src.landscape} key={index} alt={image.alt} />;
        })}
    </div>
  );
}

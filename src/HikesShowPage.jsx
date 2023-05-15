import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function HikesShowPage() {
  const [hike, setHike] = useState({});
  const params = useParams();

  const handleShowHike = () => {
    axios.get(`http://localhost:3000/hikes/${params.id}.json`).then((response) => {
      setHike(response.data);
    });
  };

  useEffect(handleShowHike, []);

  return (
    <div id="hikes-show">
      <h1>Hike Info</h1>
      <div>
        <h2>{hike.name}</h2>
      </div>
      <div>
        <img src={hike.image_url} alt="image link" />
      </div>
    </div>
  );
}

import { useState } from "react";
import { ReviewsNew } from "./ReviewsNew";

export function HikesIndex(props) {
  console.log(props);

  return (
    <div id="hikes-index">
      <h1>All hikes</h1>
      {props.hikes.map((hike) => (
        <div key={hike.id} className="hikes">
          <h2>{hike.name}</h2>
          <img src={hike.image_url} alt="image url" />
          <p>
            <strong>Distance: </strong>
            {hike.distance}
          </p>
          <p>
            <strong>Time: </strong>
            {hike.time}
          </p>
          <p>
            <strong>Route Type: </strong>
            {hike.route_type}
          </p>
          <p>
            <strong>Dog-Friendly: </strong>
            {hike.dog_friendly}
          </p>
          <button onClick={<ReviewsNew />}>Review this Hike!</button>
        </div>
      ))}
    </div>
  );
}

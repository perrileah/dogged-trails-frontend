import { useState } from "react";
import { ReviewsNew } from "./ReviewsNew";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export function HikesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div id="hikes-index">
      <FaSearch id="search-icon" />
      <input
        placeholder="Find a Hike!"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        list="hikes"
      />
      <datalist id="hikes">
        {props.hikes.map((hike) => (
          <option key={hike.id}>{hike.name}</option>
        ))}
      </datalist>
      <h1>All hikes</h1>
      {props.hikes
        .filter((hike) => hike.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((hike) => (
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
            <Link to="/reviewsnew">Review this Hike!</Link>
          </div>
        ))}
    </div>
  );
}

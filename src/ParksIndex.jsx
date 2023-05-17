import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function ParksIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);

  return (
    <div id="parks-index">
      <FaSearch id="search-icon" />
      <input
        placeholder="Find a Hike!"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        list="parks"
      />
      <datalist id="parks">
        {props.parks.map((park) => (
          <option key={park.id}>{park.name}</option>
        ))}
      </datalist>
      <h1>All parks</h1>
      {props.parks
        .filter((park) => park.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((park) => (
          <div key={park.id} className="parks">
            <h2>{park.name}</h2>
            <img src={park.image_url} alt="image url" />
            <p>
              <strong>City: </strong>
              {park.city}
            </p>
            <p>
              <strong>State: </strong>
              {park.state}
            </p>
            <p>
              <strong>Zip: </strong>
              {park.zip}
            </p>
            <p>
              <strong>Description: </strong>
              {park.description}
            </p>
            <p>
              <strong>Hikes at this Park: </strong>
              {/* {park.hikes.name} */}
            </p>
          </div>
        ))}
    </div>
  );
}

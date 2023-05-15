import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export function SearchBar(props) {
  const [input, setInput] = useState("");

  console.log(props);

  const fetchData = (value) => {
    fetch("http://localhost:3000/hikes.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((hike) => {
          return value && hike && hike.name && hike.name.toLowerCase().includes(value);
        });
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input placeholder="Find a Hike!" value={input} onChange={(event) => handleChange(event.target.value)} />
    </div>
  );
}

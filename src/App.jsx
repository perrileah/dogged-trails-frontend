import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [parks, setParks] = useState([]);

  const handleSearchBar = () => {
    console.log("handleSearchBar");
    axios.get("http://localhost:3000/parks.json").then((response) => {
      console.log(response.data);
      setParks(response.data);
    });
  };

  useEffect(handleSearchBar, []);

  return (
    <div className="App">
      <h1>Trailhead</h1>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;

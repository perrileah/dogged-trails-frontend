import axios from "axios";
import { useState, useEffect } from "react";

import { HikesIndex } from "./HikesIndex";
import { HikesNew } from "./HikesNew";
import { Modal } from "./Modal";
import { HikesShow } from "./HikesShow";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";
import { SearchBar } from "./SearchBar";

export function Content() {
  const [hikes, setHikes] = useState([]);
  const [isHikesShowVisible, setIsHikesShowVisible] = useState(false);
  const [currentHike, setCurrentHike] = useState({});

  const handleHikesIndex = () => {
    axios.get("http://localhost:3000/hikes.json").then((response) => {
      console.log(response.data);
      setHikes(response.data);
    });
  };

  const handleCreateHike = (params, successCallback) => {
    console.log("handleCreateHike", params);
    axios.post("http://localhost:3000/hikes.json", params).then((response) => {
      setHikes([...hikes, response.data]);
      successCallback();
    });
  };

  const handleShowHike = (hike) => {
    console.log("handleShowHike", hike);
    setIsHikesShowVisible(true);
    setCurrentHike(hike);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsHikesShowVisible(false);
  };

  useEffect(handleHikesIndex, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <HikesNew onCreateHike={handleCreateHike} />
      <SearchBar />
      <HikesIndex hikes={hikes} onShowHike={handleShowHike} />
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <HikesShow hike={currentHike} />
      </Modal>
    </div>
  );
}

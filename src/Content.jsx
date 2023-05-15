import axios from "axios";
import { useState, useEffect } from "react";

import { HikesIndex } from "./HikesIndex";
import { HikesNew } from "./HikesNew";
import { Modal } from "./Modal";
import { HikesShow } from "./HikesShow";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";
import { ReviewsIndex } from "./ReviewsIndex";
import { Routes, Route } from "react-router-dom";
import { HikesShowPage } from "./HikesShowPage";
import { ReviewsNew } from "./ReviewsNew";

export function Content() {
  const [hikes, setHikes] = useState([]);
  const [isHikesShowVisible, setIsHikesShowVisible] = useState(false);
  const [currentHike, setCurrentHike] = useState({});
  const [reviews, setReviews] = useState([]);

  const handleReviewsIndex = () => {
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  };
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

  const handleCreateReview = (params, successCallback) => {
    console.log("handleCreateReview", params);
    axios.post("http://localhost:3000/reviews.json", params).then((response) => {
      setReviews([...reviews, response.data]);
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

  useEffect(handleReviewsIndex, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/reviews" element={<ReviewsIndex reviews={reviews} />} />
        <Route path="/hikesnew" element={<HikesNew onCreateHike={handleCreateHike} />} />
        <Route path="/reviewsnew" element={<ReviewsNew onCreateReview={handleCreateReview} />} />
        <Route path="/hikes" element={<HikesIndex hikes={hikes} onShowHike={handleShowHike} />} />
        <Route path="/hikes/:id" element={<HikesShowPage hikes={hikes} onShowHike={handleShowHike} />} />
      </Routes>

      <LogoutLink />
      <Modal show={isHikesShowVisible} onClose={handleClose}>
        <ReviewsNew />
      </Modal>
    </div>
  );
}

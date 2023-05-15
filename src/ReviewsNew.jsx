import { useState } from "react";

export function ReviewsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateReview(props.hike.id, params);
    event.target.reset();
  };
  return (
    <div>
      <h1>Review this Hike</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Hike ID: <input defaultValue={props.hike.id} name="hike_id" type="integer" />
        </div>
        <div>
          User ID: <input name="user_id" type="integer" />
        </div>
        <div>
          Ranking <input name="ranking" type="integer" />
        </div>
        <div>
          Comments: <input name="comments" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Time: <input name="time" type="text" />
        </div>
        <button type="submit">Review Hike</button>
      </form>
    </div>
  );
}

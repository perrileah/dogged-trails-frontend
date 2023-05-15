export function ReviewsIndex(props) {
  return (
    <div>
      <h1>All reviews</h1>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>{review.user_id}</p>
          <img src={review.image_url} alt="image url" />
          <p>{review.ranking}</p>
          <p>{review.comments}</p>
          <p>{review.time}</p>
        </div>
      ))}
    </div>
  );
}

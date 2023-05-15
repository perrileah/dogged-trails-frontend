export function HikesIndex(props) {
  console.log(props);
  return (
    <div id="hikes-index">
      <h1>All hikes</h1>
      {props.hikes.map((hike) => (
        <div key={hike.id} className="hikes">
          <h2>{hike.name}</h2>
          <img src={hike.image_url} alt="image url" />
          <p>{hike.park_id}</p>
          <p>{hike.distance}</p>
          <p>{hike.time}</p>
          <p>{hike.route_type}</p>
          <p>{hike.dog_friendly}</p>
          <button onClick={() => props.onShowHike(hike)}>More info</button>
        </div>
      ))}
    </div>
  );
}

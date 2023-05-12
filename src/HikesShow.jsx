export function HikesShow(props) {
  return (
    <div>
      <h1>Hike information</h1>
      <p>Name: {props.hike.name}</p>
      <p>Park: {props.hike.park_name}</p>
      <p>Url: {props.hike.image_url}</p>
      <p>Distance: {props.hike.distance}</p>
      <p>Time: {props.hike.time}</p>
      <p>Route Type: {props.hike.route_type}</p>
      <p>Dog Friendly: {props.hike.dog_friendly}</p>
    </div>
  );
}

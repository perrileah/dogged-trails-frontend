export function HikesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateHike(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Add a New Hike!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Park Name: <input name="park_name" type="text" />
        </div>
        <div>
          Distance: <input name="distance" type="text" />
        </div>
        <div>
          Time: <input name="time" type="text" />
        </div>
        <div>
          Image URL: <input name="image_url" type="text" />
        </div>
        <div>
          Route Type: <input name="route_type" type="text" />
        </div>
        <div>
          Dog Friendly:
          <select id="dog_friendly">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit">Create hike</button>
      </form>
    </div>
  );
}

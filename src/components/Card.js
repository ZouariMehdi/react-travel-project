export default function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img className="img" src={props.img} />
      </div>
      <div className="description">
        <img />
        <span className="location">{props.location}</span>
        <a href={props.googleMapsUrl}>View on Google maps</a>
        <h1 className="title">{props.title}</h1>
        <span>{props.startDate}</span>
        <span>{props.endDate}</span>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

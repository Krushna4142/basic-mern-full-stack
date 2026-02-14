function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="btn">Learn More</button>
    </div>
  );
}

export default Card;

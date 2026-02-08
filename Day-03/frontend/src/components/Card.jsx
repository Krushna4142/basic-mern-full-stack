function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;

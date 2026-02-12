function Display({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Submitted Data</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Password:</strong> {data.password}</p>
    </div>
  );
}

export default Display;

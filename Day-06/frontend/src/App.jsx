import Form from "./components/Form";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 06 – Forms & Multiple Inputs</h1>

      <Form setSubmittedData={setSubmittedData} />

      {submittedData && <Display data={submittedData} />}
    </div>
  );
}

export default App;

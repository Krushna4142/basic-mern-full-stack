import Header from "./components/header";
import Card from "./components/card";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Header title="React Components & Props" />

      <Card
        title="HTML"
        description="Structure of the web"
      />

      <Card
        title="CSS"
        description="Styling and layout"
      />

      <Card
        title="JavaScript"
        description="Logic and interactivity"
      />
    </div>
  );
}

export default App;

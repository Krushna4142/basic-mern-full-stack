import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="card-container">
        <Card title="React Basics" description="Understanding components and JSX." />
        <Card title="Component Structure" description="Breaking UI into reusable parts." />
        <Card title="Styling in React" description="Applying CSS and inline styles properly." />
      </div>

      <Footer />
    </div>
  );
}

export default App;

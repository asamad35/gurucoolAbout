import "./App.scss";
import Navbar from "./components/navbar/navbar.components";
import OurStory from "./pages/ourstory";
import People from "./pages/people";
import Content from "./pages/content";
import Tools from "./pages/tools";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<OurStory />} />
        <Route path="people" element={<People />} />
        <Route path="content" element={<Content />} />
        <Route path="tools" element={<Tools />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

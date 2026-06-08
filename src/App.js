import Header from "./components/Header";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Athletes from "./screens/Athletes";
import CommentForm from "./components/CommentForm";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">

      {/* Hide Header on blog-details page */}
      {location.pathname !== "/blog-details" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/blog-details" element={<CommentForm />} />
      </Routes>
    </div>
  );
}

export default App;
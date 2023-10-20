import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Exercise from "./Page/Exercise";
import Navbar from "./component/NavBar";
function App() {
  return (
    <section className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exercise/:id" element={<Exercise />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Predictor from "./pages/Predictor";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/predictor"
              element={<Predictor />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">

        <h1 className="text-xl font-bold">
          TS EAPCET Predictor
        </h1>

        <div className="space-x-6">

          <Link to="/">Home</Link>

          <Link to="/predictor">
            Predictor
          </Link>

          <Link to="/about">
            About
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
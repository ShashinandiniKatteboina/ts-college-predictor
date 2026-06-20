import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path 
      ? "text-indigo-400 font-semibold border-b-2 border-indigo-500 pb-1" 
      : "text-slate-300 hover:text-white transition-colors duration-200 pb-1";
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-extrabold text-lg">TS</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            TS EAPCET Predictor
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/predictor" className={isActive("/predictor")}>
            Predictor
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
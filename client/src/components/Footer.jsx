function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-slate-950/40 backdrop-blur-sm py-8 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="hover:text-slate-400 transition-colors">
          © {currentYear} TS EAPCET College Predictor. All rights reserved.
        </p>
        <p className="text-xs text-slate-600">
          Disclaimer: Predictions are based on historical EAPCET cutoff ranks and should be used only as a reference tool.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
import { Home, Calculator } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg flex items-center justify-center bg-[#204592] text-white">
            <Home size={18} />
          </div>
          <div>
            <p className="font-semibold text-[#204592] leading-none">Sajilo Ghar</p>
            <p className="text-xs text-slate-500 leading-none">Birgunj, Nepal</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#emi" className="hover:text-[#204592] transition-colors">EMI Calculator</a>
          <a href="#roi" className="hover:text-[#204592] transition-colors">Property ROI</a>
          <a href="#contact" className="hover:text-[#204592] transition-colors">Contact</a>
        </nav>
        <a
          href="#roi"
          className="inline-flex items-center gap-2 bg-[#ED6D24] text-white px-3 py-2 rounded-md text-sm font-medium shadow hover:brightness-95 transition-colors"
        >
          <Calculator size={16} />
          Start Calculating
        </a>
      </div>
    </header>
  );
}

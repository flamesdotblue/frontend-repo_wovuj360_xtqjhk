import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EMICalculator from "./components/EMICalculator";
import PropertyROICalculator from "./components/PropertyROICalculator";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <EMICalculator />
      <PropertyROICalculator />

      <section id="contact" className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#204592]">Sajilo Ghar — Here to help</h3>
            <p className="mt-2 text-slate-600">Have a property in mind or need expert advice? Reach out and well guide you through financing and investment choices.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:hello@sajiloghar.com" className="px-5 py-3 rounded-md bg-[#ED6D24] text-white font-medium shadow hover:brightness-95">Email Us</a>
              <a href="#emi" className="px-5 py-3 rounded-md border border-[#204592] text-[#204592] font-medium hover:bg-[#204592]/10">Re-run Calculations</a>
            </div>
          </div>
          <div className="rounded-xl p-6 bg-white border border-slate-200 shadow-sm">
            <form onSubmit={(e)=>e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" placeholder="98XXXXXXXX" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={3} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" placeholder="Tell us about your goal" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-md bg-[#204592] text-white font-medium hover:brightness-110" type="submit">Send Inquiry</button>
                <span className="text-xs text-slate-500">Well reply within 1 business day.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-600">© {new Date().getFullYear()} Sajilo Ghar · Birgunj, Nepal</p>
          <p className="text-slate-600">Brand colors: <span className="font-semibold text-[#204592]">#204592</span> & <span className="font-semibold text-[#ED6D24]">#ED6D24</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;

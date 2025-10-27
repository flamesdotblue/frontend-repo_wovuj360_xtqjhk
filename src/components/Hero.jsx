export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#204592]/10 via-white to-[#ED6D24]/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-14 pb-12 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#204592] bg-[#204592]/10 px-2.5 py-1 rounded-full">Real Estate Toolkit</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Smarter Property Decisions with Sajilo Ghar
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Free, pro-grade calculators for home loans and investments.
              Built for buyers and investors in Nepal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#emi" className="px-5 py-3 rounded-md bg-[#204592] text-white font-medium shadow hover:brightness-110">
                Try EMI Calculator
              </a>
              <a href="#roi" className="px-5 py-3 rounded-md border border-[#ED6D24] text-[#ED6D24] font-medium hover:bg-[#ED6D24]/10">
                Evaluate ROI
              </a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-[#204592] to-[#ED6D24]">
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-center justify-between"><span>Brand</span><span className="font-semibold text-[#204592]">Sajilo Ghar</span></li>
                  <li className="flex items-center justify-between"><span>Location</span><span className="font-semibold">Birgunj, Nepal</span></li>
                  <li className="flex items-center justify-between"><span>Focus</span><span className="font-semibold">EMI & ROI Calculators</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

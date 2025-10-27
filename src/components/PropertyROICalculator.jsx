import { useMemo, useState } from "react";

function formatCurrency(n) {
  if (Number.isNaN(n)) return "-";
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "NPR", maximumFractionDigits: 0 }).format(n);
}

function formatPercent(n) {
  if (Number.isNaN(n)) return "-";
  return `${n.toFixed(2)}%`;
}

export default function PropertyROICalculator() {
  const [propertyPrice, setPropertyPrice] = useState(15000000);
  const [downPayment, setDownPayment] = useState(3000000);
  const [annualRate, setAnnualRate] = useState(11);
  const [loanTermYears, setLoanTermYears] = useState(20);
  const [monthlyRent, setMonthlyRent] = useState(65000);
  const [occupancy, setOccupancy] = useState(95); // %
  const [monthlyExpenses, setMonthlyExpenses] = useState(15000);
  const [annualTax, setAnnualTax] = useState(20000);

  const results = useMemo(() => {
    const price = Number(propertyPrice) || 0;
    const dp = Math.min(Number(downPayment) || 0, price);
    const loan = Math.max(price - dp, 0);
    const r = (Number(annualRate) || 0) / 12 / 100; // monthly
    const n = (Number(loanTermYears) || 0) * 12;

    // Monthly mortgage via EMI if loan > 0
    let monthlyMortgage = 0;
    if (loan > 0 && r > 0 && n > 0) {
      const pow = Math.pow(1 + r, n);
      monthlyMortgage = (loan * r * pow) / (pow - 1);
    }

    const grossRent = (Number(monthlyRent) || 0) * ((Number(occupancy) || 0) / 100);
    const opEx = Number(monthlyExpenses) || 0;
    const taxMonthly = (Number(annualTax) || 0) / 12;

    const noiMonthly = Math.max(grossRent - opEx - taxMonthly, 0); // NOI excludes mortgage
    const noiAnnual = noiMonthly * 12;

    const cashFlowMonthly = grossRent - opEx - taxMonthly - monthlyMortgage;
    const cashFlowAnnual = cashFlowMonthly * 12;

    const capRate = price > 0 ? (noiAnnual / price) * 100 : 0;
    const cocReturn = dp > 0 ? (cashFlowAnnual / dp) * 100 : 0;

    return {
      loan, monthlyMortgage, grossRent, noiMonthly, noiAnnual, cashFlowMonthly, cashFlowAnnual, capRate, cocReturn,
    };
  }, [propertyPrice, downPayment, annualRate, loanTermYears, monthlyRent, occupancy, monthlyExpenses, annualTax]);

  return (
    <section id="roi" className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#204592]">Property Investment ROI</h2>
        <p className="text-sm text-slate-600 mt-1">Evaluate rental performance and returns.</p>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Property Price (Rs.)</label>
              <input type="number" min={0} value={propertyPrice} onChange={(e)=>setPropertyPrice(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Down Payment (Rs.)</label>
              <input type="number" min={0} value={downPayment} onChange={(e)=>setDownPayment(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Loan Interest (Annual %)</label>
              <input type="number" step="0.01" min={0} value={annualRate} onChange={(e)=>setAnnualRate(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Loan Term (Years)</label>
              <input type="number" min={0} value={loanTermYears} onChange={(e)=>setLoanTermYears(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Monthly Rent (Rs.)</label>
              <input type="number" min={0} value={monthlyRent} onChange={(e)=>setMonthlyRent(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Occupancy Rate (%)</label>
              <input type="number" min={0} max={100} value={occupancy} onChange={(e)=>setOccupancy(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Monthly Expenses (Rs.)</label>
              <input type="number" min={0} value={monthlyExpenses} onChange={(e)=>setMonthlyExpenses(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Annual Property Tax (Rs.)</label>
              <input type="number" min={0} value={annualTax} onChange={(e)=>setAnnualTax(Number(e.target.value))} className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-lg p-4 bg-[#204592]/5">
              <p className="text-xs text-slate-600">Monthly Mortgage</p>
              <p className="text-2xl font-bold text-[#204592]">{formatCurrency(results.monthlyMortgage)}</p>
            </div>
            <div className="rounded-lg p-4 bg-[#ED6D24]/5">
              <p className="text-xs text-slate-600">Monthly Cash Flow</p>
              <p className="text-2xl font-bold text-[#ED6D24]">{formatCurrency(results.cashFlowMonthly)}</p>
            </div>
            <div className="rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-slate-600">NOI (Annual)</p>
              <p className="text-xl font-semibold">{formatCurrency(results.noiAnnual)}</p>
            </div>
            <div className="rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-slate-600">Cap Rate</p>
              <p className="text-xl font-semibold">{formatPercent(results.capRate)}</p>
            </div>
            <div className="rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-slate-600">Cash-on-Cash Return</p>
              <p className="text-xl font-semibold">{formatPercent(results.cocReturn)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

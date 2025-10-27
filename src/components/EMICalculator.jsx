import { useMemo, useState } from "react";

function formatCurrency(n) {
  if (Number.isNaN(n)) return "-";
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "NPR", maximumFractionDigits: 0 }).format(n);
}

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [annualRate, setAnnualRate] = useState(12);
  const [tenureYears, setTenureYears] = useState(20);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const P = Number(principal) || 0;
    const r = (Number(annualRate) || 0) / 12 / 100; // monthly rate
    const n = (Number(tenureYears) || 0) * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return { emi: 0, totalPayment: 0, totalInterest: 0 };
    }

    const pow = Math.pow(1 + r, n);
    const E = (P * r * pow) / (pow - 1);
    const total = E * n;
    const interest = total - P;
    return { emi: E, totalPayment: total, totalInterest: interest };
  }, [principal, annualRate, tenureYears]);

  return (
    <section id="emi" className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#204592]">Home Loan EMI Calculator</h2>
          <p className="text-sm text-slate-600 mt-1">Estimate your monthly installment quickly.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Loan Amount (Rs.)</label>
              <input
                type="number"
                min={0}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.01"
                min={0}
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Tenure (Years)</label>
              <input
                type="number"
                min={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="mt-1 w-full rounded-md border-slate-300 focus:ring-[#204592] focus:border-[#204592]"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">Results</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-[#204592]/5">
              <p className="text-xs text-slate-600">Monthly EMI</p>
              <p className="text-2xl font-bold text-[#204592]">{formatCurrency(emi)}</p>
            </div>
            <div className="rounded-lg p-4 bg-[#ED6D24]/5">
              <p className="text-xs text-slate-600">Total Interest</p>
              <p className="text-2xl font-bold text-[#ED6D24]">{formatCurrency(totalInterest)}</p>
            </div>
            <div className="rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-slate-600">Total Payment</p>
              <p className="text-xl font-semibold">{formatCurrency(totalPayment)}</p>
            </div>
            <div className="rounded-lg p-4 bg-slate-50">
              <p className="text-xs text-slate-600">Principal</p>
              <p className="text-xl font-semibold">{formatCurrency(principal)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

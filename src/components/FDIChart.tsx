import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const fdiData = [
  { year: "2021", dangKy: 20.8, giaiNgan: 10.3 },
  { year: "2022", dangKy: 27.7, giaiNgan: 11.5 },
  { year: "2023", dangKy: 28.5, giaiNgan: 12.1 },
  { year: "2024", dangKy: 21.5, giaiNgan: 11.7 },
  { year: "2025", dangKy: 31.6, giaiNgan: 14.0 },
  { year: "2026H1", dangKy: 34.65, giaiNgan: 13.03 },
];

export default function FDIChart() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-slate-200 text-center">
        FDI — Đăng ký & Giải ngân
      </h2>

      <div className="bg-slate-800/30 rounded-xl border border-slate-700/30 p-6">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={fdiData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="year" tick={{ fill: "#94a3b8" }} />
            <YAxis tick={{ fill: "#94a3b8" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
                color: "#e2e8f0",
              }}
            />
            <Legend wrapperStyle={{ color: "#94a3b8" }} />
            <Bar
              dataKey="dangKg"
              name="Đăng ký"
              fill="#22c55e"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="giaiNgan"
              name="Giải ngân"
              fill="#eab308"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
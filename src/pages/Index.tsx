import HeroSection from "@/components/HeroSection";
import FDIChart from "@/components/FDIChart";
import SummarySection from "@/components/SummarySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <HeroSection />

      {/* Key Metrics Table */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-200 text-center">
          Tổng quan các chỉ số
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-700/30">
          <table className="w-full text-sm text-left text-slate-300">
            <thead className="bg-slate-800/60 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-6 py-4">Chỉ số</th>
                <th className="px-6 py-4">Hiện tại (T7/2026)</th>
                <th className="px-6 py-4">Xu hướng</th>
                <th className="px-6 py-4">Đánh giá</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/20">
              <tr className="bg-slate-800/20">
                <td className="px-6 py-4 font-medium text-slate-100">VN-Index</td>
                <td className="px-6 py-4">1,657 điểm</td>
                <td className="px-6 py-4 text-red-400">-10.7% (tháng)</td>
                <td className="px-6 py-4 text-yellow-400">⚠️ Trung tính</td>
              </tr>
              <tr className="bg-slate-800/10">
                <td className="px-6 py-4 font-medium text-slate-100">Tỷ giá USD/VND</td>
                <td className="px-6 py-4">26,327</td>
                <td className="px-6 py-4 text-slate-400">Ổn định</td>
                <td className="px-6 py-4 text-yellow-400">Gap 4.1%</td>
              </tr>
              <tr className="bg-slate-800/20">
                <td className="px-6 py-4 font-medium text-slate-100">FDI đăng ký</td>
                <td className="px-6 py-4 text-green-400">34.65 tỷ USD</td>
                <td className="px-6 py-4 text-green-400">+61% (6 tháng)</td>
                <td className="px-6 py-4 text-green-400">✅ Kỷ lục</td>
              </tr>
              <tr className="bg-slate-800/10">
                <td className="px-6 py-4 font-medium text-slate-100">FDI giải ngân</td>
                <td className="px-6 py-4 text-green-400">13.03 tỷ USD</td>
                <td className="px-6 py-4 text-green-400">+11.2% (6 tháng)</td>
                <td className="px-6 py-4 text-green-400">✅ Cao nhất 5 năm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <FDIChart />

      {/* Political Context */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-200 text-center">
          Bối cảnh chính trị thế giới
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/30 rounded-xl border border-slate-700/30 p-6">
            <h3 className="font-semibold text-slate-100 mb-4 text-lg">
             ️ Thuế quan Mỹ
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Mức thuế giảm từ 46% xuống ~20% — áp lực lên hàng hóa Việt Nam
              (dệt may, điện tử). Xuất khẩu sang Mỹ giảm 12-15% trong Q2/2026.
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-xl border border-slate-700/30 p-6">
            <h3 className="font-semibold text-slate-100 mb-4 text-lg">
             ️ Đàm phán VN–Mỹ
            </h3>
            <p className="text-slate-400 leading-relaxed">
              37.2 tỷ USD cam kết từ các hiệp định thương mại đầu năm 2026.
              Chưa có thỏa thuận cuối cùng.
            </p>
          </div>
        </div>
      </section>

      <SummarySection />

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-slate-800/50 text-center text-slate-500 text-xs">
        <p className="mb-1">
          Nguồn: Trading Economics, Vietnam Briefing, VNA/VnEconomy, Vietcombank, SBV
        </p>
        <p>Biên soạn: 28/07/2026 15:30 GMT+7 | 4+ nguồn độc lập</p>
      </footer>
    </div>
  );
};

export default Index;
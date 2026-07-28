import heroImage from "@/assets/hero-finance.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Financial dashboard"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
          Tác động Chính trị — Tài chính Việt Nam
        </h1>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Phân tích chuyên sâu về tác động của tình hình chính trị trong nước và thế giới tới thị trường tài chính Việt Nam
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/40 shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-slate-300">VN-Index</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-red-400">1,657</div>
              <div className="text-sm text-red-500/80 mt-1">-10.7% tháng 7/2026</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/40 shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-slate-400">Tỷ giá USD/VND</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-yellow-400">26,327</div>
              <div className="text-sm text-slate-500 mt-1">SBV trung tâm: 25,283</div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700/30 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-slate-400">FDI đăng ký (6 tháng)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-green-400">34.65</div>
              <div className="text-sm text-green-500/80 mt-1">tỷ USD | Kỷ lục lịch sử</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-sm text-slate-500">
          Báo cáo tháng 7/2026 | Cập nhật 28/07/2026
        </div>
      </div>
    </section>
  );
}
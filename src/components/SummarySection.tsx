export default function SummarySection() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">
        </h2>
        <div className="space-y-4 text-slate-300 leading-relax">
          <p>
            Mặc dù áp lực từ <strong className="text-yellow-400">thuế quan Mỹ</strong> và 
            <strong className="text-yellow-400">giá dầu toàn cầu</strong>, Việt Nam vẫn ghi nhận 
            <strong className="text-green-400">FDI đăng ký đạt kỷ lục 34,65 tỷ USD</strong> trong 
            nửa đầu năm 2026 (tăng +61%). Dòng vốn từ <strong className="text-green-400">Singapore</strong> 
            và các chiến lược "China+1" tiếp tục bù đắp rủi ro ngắn hạn.
          </p>
          <p className="text-sm text-slate-400">
            Thị trường chứng khoán giảm mạnh chủ yếu mang tính chốt lời kỹ thuật, 
            không phải suy thoái nền kinh tế. Tỷ giá VND ổn định, khoảng cách 
            chợ đen/trung tâm 4,1% là mức có thể kiểm soát qua hoạt động thị trường 
            ngoại hối của NH NN.
          </p>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect } from 'react';
import { ChevronLeft, Home } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImg from '../../imports/logo.png';
import { motion } from "framer-motion";
import { Facebook, Linkedin } from "lucide-react";


interface EFormPageProps {
  setCurrentPage: (page: 'home' | 'demoForm' | 'eForm' | 'safetyVideoAnalytics') => void;
}

const fUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const fScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function EFormPage({ setCurrentPage }: EFormPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "E-Form Reports | Quốc Việt";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold uppercase tracking-tight text-gray-800">E-FORM REPORTS</h1>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('demoForm')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors shadow-md font-medium"
              >
                Book Demo
              </motion.button>
              <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold mb-4"
          >
            Digital Solution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-gray-900"
          >
            Digitization Solution 2026
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-3xl md:text-4xl text-orange-500 mb-8 font-bold italic"
          >
            E-FORM REPORTS
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Giải pháp số hóa báo cáo sản xuất toàn diện, thay thế quy trình thủ công và tối ưu hóa vận hành doanh nghiệp bằng công nghệ hiện đại.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm text-gray-400 font-mono"
          >
            <p>
              Presenter: <span className="text-gray-900 font-bold">VO QUOC HIEU</span> • 01/2026
            </p>
          </motion.div>

        </motion.div>

        {/* Section I: Lộ trình */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">I. Lộ trình triển khai</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
            <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-sm">Roll-out Roadmap Module Production</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { date: 'AUG 2024', title: 'Thiết kế & Lập trình', desc: 'Master Data, chuẩn hóa biểu mẫu, lập trình giao diện.', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
              { date: 'NOV 2024', title: 'FAT & UAT', desc: 'Kiểm tra chất lượng (FAT) và UAT với module Production.', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50' },
              { date: 'DEC 2024', title: 'Golive (Trial)', desc: 'Golive cho bộ phận Production với 01 line thử nghiệm.', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50' },
              { date: 'MAY 2025', title: 'Mass Roll-out', desc: 'Golive cho các line còn lại trên toàn nhà máy.', color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className={`${item.bg} p-8 rounded-[2rem] border border-white shadow-xl relative overflow-hidden group transition-all duration-300`}
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color}`}></div>
                <div className="text-blue-600 font-black text-xs mb-4 tracking-tighter opacity-70">{item.date}</div>
                <h4 className="font-bold text-xl mb-3 text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section II: Flowchart */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">II. Flowchart – Quy trình báo cáo</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
            <p className="text-gray-500 mt-4 text-center max-w-2xl">Chuẩn hóa quy trình từ đăng nhập đến phê duyệt, đảm bảo minh bạch và chính xác tuyệt đối trong mọi bước.</p>
          </div>

          <div className="overflow-x-auto pb-8">
            <div className="flex items-center justify-center gap-4 min-w-[1000px] p-10 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-inner">
              {[
                { t: 'START', type: 'start' },
                { t: 'Đăng nhập', type: 'step' },
                { t: 'Chọn Line / Machine', type: 'step' },
                { t: 'INPUT DATA', type: 'action' },
                { t: 'Nhập PO, Sản lượng', type: 'step' },
                { t: 'Validate Error', type: 'decision' },
                { t: 'Save DB', type: 'step' },
                { t: 'END', type: 'end' }
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`
                      px-6 py-3 rounded-xl font-bold text-sm shadow-md border-b-4 
                      ${item.type === 'start' ? 'bg-green-500 border-green-700 text-white rounded-full' : ''}
                      ${item.type === 'end' ? 'bg-red-500 border-red-700 text-white rounded-full' : ''}
                      ${item.type === 'step' ? 'bg-white border-blue-200 text-blue-700' : ''}
                      ${item.type === 'action' ? 'bg-blue-500 border-blue-700 text-white' : ''}
                      ${item.type === 'decision' ? 'bg-yellow-400 border-yellow-600 text-gray-900' : ''}
                    `}
                  >
                    {item.t}
                  </motion.div>
                  {idx < 7 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.1 }}
                      className="text-orange-400 font-black"
                    >
                      →
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section III: Tablet UI */}
        <motion.section {...fUp} className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">III. Giao diện báo cáo trên Tablet</h3>
              <div className="w-16 h-1.5 bg-orange-500 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trải nghiệm người dùng được tối ưu hóa cho môi trường sản xuất. Giao diện trực quan, nút bấm lớn, dễ dàng thao tác ngay cả khi đang làm việc.
              </p>
              <ul className="space-y-4">
                {['Tương thích mọi thiết bị di động', 'Phản hồi ngay lập tức', 'Chế độ tối ưu ánh sáng nhà máy'].map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gray-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative"
            >
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">LIVE PREVIEW</div>
              <div className="max-w-md mx-auto bg-gray-800 rounded-2xl p-6 shadow-inner border border-gray-700">
                <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-xs">P</div>
                    <h4 className="text-sm font-bold tracking-tight">Production App</h4>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-[10px] font-bold">QV</div>
                </div>
                <div className="space-y-5">
                  {[
                    { l: 'Line 01 - Filling', s: 'Running', c: 'text-green-400', b: 'bg-green-400' },
                    { l: 'Line 02 - Packing', s: 'Maintenance', c: 'text-yellow-400', b: 'bg-yellow-400' }
                  ].map((line, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-700/50 p-5 rounded-xl border border-gray-600 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-sm text-gray-200">{line.l}</span>
                        <span className={`${line.c} text-[10px] font-bold flex items-center gap-1.5 uppercase`}>
                          <span className={`w-1.5 h-1.5 ${line.b} rounded-full`}></span>
                          {line.s}
                        </span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-lg w-full transition-colors">
                        Report Now
                      </button>
                    </motion.div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-green-500 text-white w-12 h-12 rounded-full mx-auto block shadow-lg shadow-green-500/20 text-2xl font-black mt-4"
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section IV: Lợi ích */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">IV. Lợi ích nổi bật</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Tiết kiệm chi phí', desc: 'Cắt giảm in ấn, lưu trữ vật lý.', icon: '💰' },
              { num: '02', title: 'Bảo vệ môi trường', desc: 'Hạn chế sử dụng giấy, mực in.', icon: '🌿' },
              { num: '03', title: 'Giao diện thân thiện', desc: 'Dễ dùng, nhanh quen, ít sai sót.', icon: '✨' },
              { num: '04', title: 'Bảo mật cao', desc: 'Phân quyền truy cập, lưu trữ an toàn.', icon: '🔒' },
              { num: '05', title: 'Phê duyệt linh hoạt', desc: 'Nhiều cấp, rõ ràng, theo luồng.', icon: '✅' },
              { num: '06', title: 'Tra cứu nhanh', desc: 'Báo cáo realtime, không mất công tìm.', icon: '🔍' },
              { num: '07', title: 'Cảnh báo tức thời', desc: 'Gửi thông báo ngay khi có bất thường.', icon: '🔔' },
              { num: '08', title: 'Kết nối hệ thống', desc: 'Đồng bộ dữ liệu, giảm nhập liệu.', icon: '🔗' }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, backgroundColor: '#FFF7ED' }}
                className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-start">
                  <div className="text-3xl font-black text-orange-200 group-hover:text-orange-500 transition-colors">{benefit.num}</div>
                  <div className="text-2xl">{benefit.icon}</div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{benefit.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section V: Highlights */}
        <motion.section {...fUp} className="mb-24 py-20 bg-gray-900 rounded-[4rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>

          <div className="container mx-auto px-10 relative z-10">
            <div className="flex flex-col items-center mb-16">
              <h3 className="text-3xl font-bold mb-3">V. Features Highlight</h3>
              <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Chuẩn hóa Master Data', desc: 'Thống nhất dữ liệu giữa các nhà máy.' },
                { title: 'Chuẩn hóa biểu mẫu', desc: 'E-Form dùng chung toàn hệ thống.' },
                { title: 'Tích hợp SAP', desc: 'Đồng bộ realtime, minh bạch và trực quan.' },
                { title: 'Quản lý báo cáo', desc: 'Phân loại theo khu vực, dễ dàng quản lý.' },
                { title: 'Xuất Excel / Audit', desc: 'Hỗ trợ kiểm toán, truy vết lịch sử.' },
                { title: 'Realtime Trace', desc: 'Cảnh báo tức thì, nắm bắt tình huống nhanh.' },
                { title: 'Giám sát sản xuất', desc: 'Đánh giá tính hợp lệ của dữ liệu.' },
                { title: 'Liên kết Machine', desc: 'Lấy dữ liệu trực tiếp từ machine vào báo cáo.' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  {...fScale}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group"
                >
                  <h4 className="font-bold text-orange-400 mb-2 group-hover:text-white transition-colors">{feature.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section VI: Report Manager */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">VI. Report Manager</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ x: 10 }}
              className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h4 className="text-2xl font-bold mb-4">Quản lý vòng đời báo cáo</h4>
              <p className="text-indigo-100 leading-relaxed mb-6">Theo dõi đầy đủ mọi trạng thái từ khi báo cáo được khởi tạo, qua các cấp phê duyệt cho đến khi đóng báo cáo hoàn tất.</p>
              <div className="flex gap-2">
                {['Draft', 'Pending', 'Approved', 'Closed'].map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase">{s}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h4 className="text-2xl font-bold mb-4">Quản lý lịch sử báo cáo</h4>
              <p className="text-purple-100 leading-relaxed mb-6">Hệ thống lưu trữ vĩnh viễn, cho phép truy xuất lịch sử báo cáo nhanh chóng, minh bạch và phục vụ công tác hậu kiểm.</p>
              <div className="text-4xl">📚</div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section VII: Approval */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">VII. Approval Manager</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
            <p className="text-gray-500 mt-4">Tối ưu hóa quy trình phê duyệt đa cấp</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'Phê duyệt hủy báo cáo', desc: 'Mọi báo cáo hủy đều cần quản lý cấp trên phê duyệt.', icon: '🗑️' },
              { num: '02', title: 'Phê duyệt chỉnh sửa', desc: 'Giữ tính minh bạch và chính xác tuyệt đối của dữ liệu.', icon: '✏️' },
              { num: '03', title: 'Phê duyệt theo ca', desc: 'Mỗi ca được chỉ định quản lý cụ thể để chịu trách nhiệm.', icon: '🕒' },
              { num: '04', title: 'Phê duyệt đa kênh', desc: 'Phê duyệt qua Power Apps, Email hoặc MS Teams.', icon: '📱' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="flex gap-6 p-8 bg-white border-2 border-gray-50 rounded-[2.5rem] shadow-sm hover:shadow-lg hover:border-orange-200 transition-all"
              >
                <div className="text-4xl font-black text-orange-500/20">{item.num}</div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-2xl opacity-40">{item.icon}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-8 bg-blue-50 border-l-8 border-blue-500 rounded-2xl flex items-center gap-6"
          >
            <div className="text-3xl">ℹ️</div>
            <p className="text-blue-900 font-medium">
              Quản lý phê duyệt trực tiếp trên hệ thống; mọi thay đổi quan trọng đều cần phê duyệt trước khi được áp dụng chính thức vào cơ sở dữ liệu.
            </p>
          </motion.div>
        </motion.section>

        {/* Section VIII: Notification */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">VIII. Real-time Notification</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 p-1 rounded-[3rem] shadow-2xl"
          >
            <div className="bg-white p-10 md:p-14 rounded-[2.9rem] flex flex-col md:flex-row items-center gap-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-5xl shrink-0"
              >
                🔔
              </motion.div>
              <div className="text-center md:text-left">
                <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Cảnh báo tức thời</h4>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Khi có bất thường vượt ngưỡng cho phép, hệ thống lập tức đẩy thông báo (Push Notification) đến SUP đi ca và quản lý để xử lý kịp thời, ngăn chặn sai sót dây chuyền.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section IX: Giao diện */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">IX. Giao diện thân thiện</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'Quản lý theo khu vực', d: 'Nhóm báo cáo theo line/machine rõ ràng, dễ tìm kiếm.', bg: 'bg-green-50', border: 'border-green-200', icon: '📍' },
              { t: 'Danh sách realtime', d: 'Báo cáo hiện tại được cập nhật liên tục mỗi giây.', bg: 'bg-blue-50', border: 'border-blue-200', icon: '🔄' },
              { t: 'KPI pass/fail', d: 'Chỉ tiêu lỗi/đạt hiển thị trực quan theo thời gian thực.', bg: 'bg-purple-50', border: 'border-purple-200', icon: '📊' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`p-10 ${item.bg} rounded-[3rem] border ${item.border} shadow-lg text-center group transition-all`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">{item.t}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section X: Nhập liệu */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">X. Nhập dữ liệu dễ dàng</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: 'Tự định dạng', d: 'Chọn loại dữ liệu, hạn chế nhập tay tối đa.', c: 'border-blue-400' },
              { t: 'Tự động lấy dữ liệu', d: 'Liên kết SAP & Machine lấy data tự động.', c: 'border-green-400' },
              { t: 'Highlight vượt chỉ tiêu', d: 'Dễ dàng đánh giá & phê duyệt nhanh.', c: 'border-yellow-400' },
              { t: 'Ghi chú dữ liệu lỗi', d: 'Ghi rõ nguyên nhân để truy xuất nhanh.', c: 'border-red-400' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ rotate: 2 }}
                className={`p-8 bg-white border-l-8 ${item.c} rounded-2xl shadow-md`}
              >
                <h4 className="font-bold text-lg mb-2 text-gray-900">{item.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section XI: Dashboard */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-16">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">XI. Dashboard</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { t: 'Đa dạng biểu đồ', d: 'Phục vụ mọi nhu cầu phân tích dữ liệu.', icon: '📈', bg: 'from-pink-500 to-rose-500' },
              { t: 'Chi tiết & Trực quan', d: 'Dễ hiểu cho mọi cấp lãnh đạo.', icon: '📋', bg: 'from-blue-500 to-indigo-500' },
              { t: 'Tích hợp linh hoạt', d: 'Tùy chỉnh dashboard theo yêu cầu.', icon: '⚙️', bg: 'from-emerald-500 to-teal-500' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="relative group h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className="relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl text-center flex flex-col h-full">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <h4 className="font-bold text-xl mb-4 text-gray-900">{item.t}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm flex-grow">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section XII: AI */}
        <motion.section {...fUp} className="mb-24">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">XII. Tích hợp AI</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl opacity-10">💬</div>
              <h4 className="text-2xl font-black mb-4">AI Q&A theo dữ liệu báo cáo</h4>
              <p className="text-indigo-100 text-lg leading-relaxed">Đặt câu hỏi tự nhiên về dữ liệu sản xuất và nhận câu trả lời phân tích chuyên sâu ngay lập tức từ trợ lý AI.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-gradient-to-br from-orange-500 to-rose-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-6xl opacity-10">🚀</div>
              <h4 className="text-2xl font-black mb-4">AI phân tích hiệu suất</h4>
              <p className="text-orange-50 text-lg leading-relaxed">Đề xuất cải tiến cấu hình máy móc và quy trình vận hành để tối ưu hóa sản lượng dựa trên dữ liệu lịch sử.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section XIII: Analytic */}
        <motion.section {...fUp} className="mb-32">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">XIII. AI Analytic & E-Form Agent</h3>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[4rem] border-4 border-violet-100 shadow-2xl text-center group"
            >
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🤖</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">AI Analytic</h4>
              <p className="text-gray-500 text-lg leading-relaxed">Phân tích xu hướng, chỉ số OEE và hiệu suất vận hành theo thời gian thực để hỗ trợ ra quyết định.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[4rem] border-4 border-cyan-100 shadow-2xl text-center group"
            >
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">🧠</div>
              <h4 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">E-Form Agent</h4>
              <p className="text-gray-500 text-lg leading-relaxed">Trợ lý thông minh giúp truy vấn, tổng hợp và tóm tắt các báo cáo phức tạp chỉ bằng ngôn ngữ tự nhiên.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* THANK YOU SECTION */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[4rem] mb-20 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-6 italic tracking-tighter"
            >
              THANK YOU
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 font-medium"
            >
              Date: 01/2026 • Presenter: <span className="text-white font-bold">VO QUOC HIEU</span>
            </motion.div>
          </div>
        </motion.section>

      </div>

      <footer className="bg-gray-50 py-16 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 mb-10"
          >
            <div className="flex items-center gap-4">
              <ImageWithFallback
                src={logoImg}
                alt="Logo"
                className="h-10 w-auto"
              />
              <div className="h-8 w-px bg-gray-300"></div>
              <h3 className="font-black text-2xl text-gray-900 tracking-tighter">
                QUỐC VIỆT CO., Ltd
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Chuyên gia hàng đầu trong lĩnh vực chuyển đổi số, giúp doanh nghiệp tối ưu hóa quy trình sản xuất và đạt được tăng trưởng bền vững bằng giải pháp E-Form & AI.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mb-10">
            {[
              { icon: <Facebook className="w-6 h-6" />, href: "https://www.facebook.com/QuocVietTradingAndEngineeringLtd", color: "from-blue-600 to-blue-700" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/company/quoc-viet-trading-and-engineering-co-ltd/", color: "from-sky-600 to-sky-800" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-gradient-to-br ${social.color} text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">
            © 2026 Quốc Việt Digitization Solutions. All Rights Reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}

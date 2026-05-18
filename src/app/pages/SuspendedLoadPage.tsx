import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import craneImg from '../../imports/image_6.jpg';
import suspendedVideo2 from '@/app/asset/demo_16.mp4';

import logoImg from '../../imports/logo.png';
import suspendedVideo from '@/app/asset/demo_15.mp4';
import { ShieldAlert, Target, Zap, BellRing } from 'lucide-react';
import { PageFooter } from '../components/PageFooter';

interface SuspendedLoadPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function SuspendedLoadPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: SuspendedLoadPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Suspended Load | Quốc Việt";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <SafetyHeader
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />

      {/* Hero Section */}
      <div className="bg-white py-16 border-b border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <span className="text-7xl">🏗️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              WORK UNDER SUSPENDED LOAD MONITORING
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Giải pháp Giám Sát Công Nhân Dưới Tải Trọng Treo (WUSLM).
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div {...fLeft} className="space-y-8">

            {/* TITLE */}
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  Giám Sát Công Nhân Dưới Tải Trọng Treo (WUSLM)
                </span>

                là giải pháp an toàn nâng cao dựa trên
                <span className="font-semibold text-orange-600">
                  {" "}AI Computer Vision
                </span>,
                được thiết kế để phát hiện và ngăn chặn công nhân hoạt động bên dưới
                thang nâng, cần trục hoặc tải trọng đang được nâng hạ.
              </p>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
              <p>
                Sử dụng{" "}
                <span className="font-semibold text-gray-800">
                  video analytics độc quyền của Quốc Việt
                </span>,
                hệ thống liên tục giám sát các đường nâng được chỉ định và khu vực
                tải trọng theo thời gian thực.
              </p>

              <p>
                AI tự động xác định{" "}
                <span className="font-semibold text-orange-600">
                  vùng nguy hiểm (Danger Zone)
                </span>{" "}
                bên dưới tải trọng treo và cảnh báo ngay khi phát hiện người lao động
                đi vào khu vực rủi ro cao.
              </p>

              <p>
                Hệ thống giúp giảm sự phụ thuộc vào người cảnh giới thủ công,
                đồng thời củng cố các giao thức an toàn như{" "}
                <span className="font-semibold text-gray-800">
                  OSHA & DROPS
                </span>.
              </p>
            </div>


          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div {...fRight} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">

              <ImageWithFallback
                src={craneImg}
                alt="Worker Under Suspended Load Monitoring"
                className="w-full h-auto object-cover"
              />

              {/* danger zone */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-28 border-4 border-red-500 rounded-xl opacity-60 animate-pulse"></div>

              {/* warning badge */}
              <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-sm border border-red-500 px-4 py-2 rounded-lg">
                <p className="text-[10px] text-red-400 font-mono tracking-wider">
                  ALERT: WORKER UNDER LOAD
                </p>
              </div>

              {/* pulsing red dot */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>

            {/* background decoration */}
            <div className="absolute -top-5 -right-5 w-full h-full bg-orange-100 rounded-3xl -z-0"></div>
          </motion.div>

        </div>
      </main>

      {/* SECTION II: TẠI SAO WUSLM QUAN TRỌNG */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              II. Tại sao WUSLM lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-900">
                Worker Under Suspended Loads (WUSL)
              </span>{" "}
              là một mối nguy hiểm nghiêm trọng nhưng thường bị bỏ qua.
              Chỉ một khoảnh khắc mất tập trung khi công nhân bước vào khu vực nâng hạ
              cũng có thể dẫn đến tai nạn nghiêm trọng hoặc tử vong. AI giúp phát hiện
              sớm và cảnh báo ngay lập tức trước khi sự cố xảy ra.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Công nhân đi qua khu vực nâng",
                content:
                  "Người lao động vô tình đứng hoặc di chuyển bên dưới cần trục, pa lăng hoặc tải trọng đang được nâng hạ.",
                icon: "🚶",
                color: "border-red-500"
              },
              {
                title: "Khu vực loại trừ không được giám sát",
                content:
                  "Các danger zone quanh cần trục hoặc thang nâng không được đánh dấu và kiểm soát hiệu quả.",
                icon: "🚧",
                color: "border-orange-500"
              },
              {
                title: "Phụ thuộc vào người cảnh giới",
                content:
                  "Người cảnh giới thủ công có thể bị hạn chế tầm nhìn hoặc phản ứng chậm trong môi trường phức tạp.",
                icon: "👷",
                color: "border-yellow-500"
              },
              {
                title: "Thiếu nhận thức tình huống",
                content:
                  "Đặc biệt nguy hiểm trong thời gian đổi ca, khu vực đông đúc hoặc khi công nhân bị phân tâm.",
                icon: "⚠️",
                color: "border-blue-500"
              },
              {
                title: "Không có cảnh báo thời gian thực",
                content:
                  "Khi có người bước vào vùng nguy hiểm, thường không có tín hiệu cảnh báo ngay lập tức để ngăn chặn.",
                icon: "🔔",
                color: "border-purple-500"
              },
              {
                title: "AI giám sát liên tục 24/7",
                content:
                  "Computer Vision theo dõi tải trọng và con người theo thời gian thực, tự động phát hiện xâm nhập và kích hoạt cảnh báo.",
                icon: "🤖",
                color: "border-green-500"
              }
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white p-8 rounded-3xl border-t-4 ${risk.color} shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                <div className="text-4xl mb-5">{risk.icon}</div>

                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">
                  {risk.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {risk.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION III: ỨNG DỤNG */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* VIDEO LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-gray-100 p-4">
          
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[550px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={suspendedVideo2} type="video/mp4" />
          </video>

          {/* glow */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>

          {/* badge */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/60 text-white text-xs tracking-wider font-semibold backdrop-blur-md">
            AI MONITORING ACTIVE
          </div>
        </div>
      </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                  III. Ứng dụng Giải pháp WUSLM ở đâu?
                </h2>
                <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Giải pháp{" "}
                  <span className="font-semibold text-gray-900">
                    Worker Under Suspended Loads Monitoring (WUSLM)
                  </span>{" "}
                  đặc biệt cần thiết tại những môi trường có hoạt động nâng hạ thường xuyên,
                  nơi công nhân có nguy cơ vô tình bước vào{" "}
                  <span className="text-orange-600 font-semibold">
                    vùng rơi nguy hiểm
                  </span>{" "}
                  bên dưới tải trọng treo.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    t: "Công trường Xây dựng",
                    c: "Giám sát các hoạt động nâng cần trục, tời nâng, lồng thép và vật liệu thi công giữa các tầng."
                  },
                  {
                    t: "Sàn Sản xuất & Kho hàng",
                    c: "Kiểm soát các khu vực nâng vật liệu trên cao nơi công nhân và thiết bị vận hành đồng thời."
                  },
                  {
                    t: "Giàn khoan & Nhà máy Lọc dầu",
                    c: "Theo dõi việc nâng vỏ bọc, ống đứng và các mô-đun nặng qua những lối đi chật hẹp, phức tạp."
                  },
                  {
                    t: "Hoạt động Khai thác mỏ",
                    c: "Bảo vệ công nhân trong các khu vực bảo trì thiết bị lớn, nơi tầm nhìn hạn chế và không gian hẹp."
                  },
                  {
                    t: "Cảng & Logistics",
                    c: "Giám sát nâng hạ container và hàng hóa cỡ lớn để đảm bảo không có người hoạt động bên dưới tải trọng."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {item.t}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {item.c}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
<section className="py-24 bg-slate-900 text-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* TEXT LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-orange-400 font-bold text-xl uppercase tracking-wider mb-2">
            IV. Cách Thức Hoạt động (Computer Vision)
          </h2>

          <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Giải pháp{" "}
            <span className="text-orange-400 font-bold">
              Suspended Load Monitoring
            </span>{" "}
            tích hợp vào hệ thống giám sát hiện có để cung cấp khả năng phát hiện
            rủi ro nâng hạ chủ động.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              s: "01",
              t: "Kết nối (Connect)",
              d: "AI kết nối trực tiếp với hệ thống CCTV hoặc camera IP hiện có của bạn qua giao thức RTSP, không cần bổ sung phần cứng mới.",
            },
            {
              s: "02",
              t: "Ghi nhận (Capture)",
              d: "Hệ thống liên tục theo dõi các khu vực nâng hạ chính 24/7, tự động xác định tải trọng treo và phát hiện công nhân bước vào vùng nguy hiểm.",
            },
            {
              s: "03",
              t: "Kiểm soát (Control)",
              d: "Khi phát hiện vi phạm, hệ thống kích hoạt cảnh báo tức thì qua còi báo động, đèn, ứng dụng di động hoặc dashboard để phản ứng ngay lập tức.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="flex gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {item.s}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {item.t}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* VIDEO RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[620px] md:h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={suspendedVideo} type="video/mp4" />
          </video>
        </div>

        {/* floating alert */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-8 right-8 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg"
        >
          LIVE: SUSPENDED LOAD
        </motion.div>

        {/* glow */}
        <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
      </motion.div>

    </div>
  </div>
</section>

      {/* SECTION V: TÁC ĐỘNG & LỢI ÍCH */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-orange-50">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-3">
              V. Tác động và Lợi ích Chính
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>

            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold text-gray-900">WUSLM</span> mang lại
              những cải tiến có thể đo lường được trong quản lý rủi ro và hiệu quả
              vận hành tại các khu vực nâng hạ tải trọng treo.
            </p>
          </motion.div>

          {/* BENEFIT GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "70%",
                title: "Giảm Sự cố Suýt xảy ra",
                desc: "Giảm tới 70% các vụ suýt xảy ra liên quan đến công nhân hoạt động dưới tải trọng treo.",
                icon: "⚠️",
                color: "from-red-500 to-orange-500"
              },
              {
                num: "59%",
                title: "Giảm Xâm nhập Trái phép",
                desc: "Giảm số lần công nhân vô tình đi vào khu vực cấm dưới cần trục hoặc tải trọng đang nâng.",
                icon: "🚫",
                color: "from-orange-500 to-yellow-500"
              },
              {
                num: "42%",
                title: "Nâng cao Hiệu quả Vận hành",
                desc: "Cải thiện thời gian dọn dẹp và kiểm soát khu vực nâng hạ nhanh hơn đáng kể.",
                icon: "⚙️",
                color: "from-blue-500 to-cyan-500"
              },
              {
                num: "2x",
                title: "Dự đoán Rủi ro Chính xác hơn",
                desc: "AI dự đoán nguy cơ vật thể rơi và vùng nguy hiểm chính xác gấp 2 lần phương pháp truyền thống.",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              {
                num: "4x",
                title: "Tăng tốc Điều tra Sự cố",
                desc: "Phân tích sau sự cố nhanh gấp 4 lần nhờ video lưu trữ và nhật ký vi phạm đầy đủ.",
                icon: "📹",
                color: "from-green-500 to-emerald-500"
              },
              {
                num: "3x",
                title: "Nhận dạng Người Tái phạm",
                desc: "Xác định và theo dõi các cá nhân vi phạm lặp lại nhanh hơn gấp 3 lần.",
                icon: "👤",
                color: "from-gray-600 to-gray-800"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-8 transition-all duration-500"
              >
                {/* TOP BORDER */}
                <div
                  className={`h-1.5 w-full rounded-full bg-gradient-to-r ${item.color} mb-6`}
                ></div>

                {/* ICON */}
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* NUMBER */}
                <div className="text-5xl font-black text-orange-500 mb-4 group-hover:scale-105 transition-transform">
                  {item.num}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION VI: CASE STUDY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-3">
              VI. Case Study
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Giảm
              <span className="text-orange-500"> 82% </span>
              Nguy cơ Nâng Hạ Không An Toàn
            </h3>
          </motion.div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 via-white to-orange-50 rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="grid md:grid-cols-2">

              {/* LEFT */}
              <div className="p-10 md:p-14 space-y-10">

                {/* TAGS */}
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    🏭 Ngành: Sản xuất thiết bị nặng
                  </div>

                  <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    📍 Địa điểm: Hoa Kỳ (USA)
                  </div>
                </div>

                {/* PROBLEM */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-xl">
                      ⚠️
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Vấn đề
                    </h4>
                  </div>

                  <p className="text-gray-600 leading-8">
                    Nhà máy liên tục gặp các{" "}
                    <span className="font-semibold text-gray-900">
                      sự cố suýt xảy ra
                    </span>{" "}
                    khi công nhân vô tình bước vào khu vực nâng đang hoạt động,
                    trong lúc tải trọng vẫn đang treo lơ lửng. Điều này tạo ra
                    nguy cơ nghiêm trọng và vi phạm các tiêu chuẩn an toàn{" "}
                    <span className="font-semibold text-orange-600">
                      OSHA & DROPS
                    </span>.
                  </p>
                </div>

                {/* SOLUTION */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">
                      🤖
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Giải pháp của Quốc Việt
                    </h4>
                  </div>

                  <p className="text-gray-600 leading-8">
                    Triển khai{" "}
                    <span className="font-semibold text-gray-900">
                      Worker Under Suspended Load Monitoring (WUSLM)
                    </span>{" "}
                    bằng cách tích hợp AI với hệ thống CCTV hiện có. Hệ thống
                    liên tục giám sát khu vực nâng hạ và kích hoạt cảnh báo tức thì
                    khi phát hiện công nhân đi vào{" "}
                    <span className="font-semibold text-orange-600">
                      vùng nguy hiểm dưới tải trọng treo
                    </span>.
                  </p>
                </div>
              </div>

              {/* RIGHT METRIC */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 md:p-14 flex flex-col justify-center">

                <h2 className="text-7xl md:text-8xl font-black leading-none">
                  82%
                </h2>

                <p className="text-2xl font-semibold mt-4">
                  Giảm Xâm nhập Không An Toàn
                </p>

                <div className="space-y-6 mt-10">

                  <div className="flex gap-4">
                    <div className="text-2xl">✔️</div>
                    <p className="leading-7 text-orange-50">
                      Giảm 82% số lần công nhân bước vào vùng nguy hiểm
                      dưới tải trọng treo chỉ sau 3 tháng.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-2xl">✔️</div>
                    <p className="leading-7 text-orange-50">
                      Tăng cường tuân thủ tiêu chuẩn an toàn OSHA và DROPS.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-2xl">✔️</div>
                    <p className="leading-7 text-orange-50">
                      Giảm phụ thuộc vào người cảnh giới thủ công,
                      nâng cao hiệu quả vận hành.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SECTION v: KÊU GỌI HÀNH ĐỘNG */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* TITLE */}
            <div className="space-y-4">

              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Bảo Vệ An Toàn Cho Từng Dây Nâng
              </h2>

              <p className="text-gray-700 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Đừng để sự bất cẩn trở thành thảm kịch. Hãy trang bị cho công trường của bạn một giải pháp thông minh để bảo vệ từng công nhân. Với WUSLM, chúng tôi biến rủi ro thành sự an toàn và những sự cố suýt xảy ra trở thành quá khứ.
              </p>

            </div>

            {/* BUTTON */}
            <div className="pt-4">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setCurrentPage('demoForm')}
                className="
  bg-orange-500
  hover:bg-orange-600
  text-white
  font-bold
  text-lg
  px-12
  py-5
  rounded-full
  shadow-xl
  transition-all
  duration-300
"
              >
                YÊU CẦU DEMO NGAY HÔM NAY
              </motion.button>

            </div>

          </motion.div>

        </div>


      </section>

      <PageFooter setCurrentPage={setCurrentPage} hideOtherSolutions={true} />
    </div>
  );
}

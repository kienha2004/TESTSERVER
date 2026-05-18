import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  HeartPulse,
  Clock,
  ShieldAlert,
  BellRing,
  Facebook,
  Linkedin,
  MapPin,
  Activity,
  Users
} from 'lucide-react';

import fallImg from '@/imports/image_4.jpg';
import fallWarningVideo from '@/app/asset/demo_19.mp4';
import fallWarningVideo2 from '@/app/asset/demo_20.mp4';
import logoImg from '@/imports/logo.png';

interface FallDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };
const fRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export function FallDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: FallDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fall Detection | Quốc Việt";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <SafetyHeader
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
        backPage="safetyVideoAnalytics"
      />

      {/* Hero Section */}
      <div className="bg-white py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-50 rounded-full">
                <HeartPulse className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              FALL DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Phát Hiện Té Ngã - Cứu Hộ Tức Thì. Phòng ngừa thảm họa rơi ngã từ độ cao (FFH) bằng cách nhận diện sự cố thay đổi tư thế đột ngột, bảo vệ sinh mạng công nhân 24/7.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT LEFT */}
          <motion.div
            {...fLeft}
            className="space-y-6"
          >
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  AI Fall Detection
                </span>

                Sử dụng{" "}
                <span className="text-orange-600 font-semibold">
                  Computer Vision
                </span>{" "}
                và video analytics AI để giám sát các hoạt động trên cao hoặc những khu vực có rủi ro té ngã. Nhận diện sự thay đổi tư thế đột ngột hoặc sụp đổ của công nhân, cho phép phản ứng nhanh chóng.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Hệ thống tự động phát hiện khi một người rơi từ trên cao xuống, trượt chân hoặc vấp ngã. Thay vì chờ đợi người khác phát hiện sự cố, AI sẽ lập tức báo động để giảm thiểu thời gian vàng trong cấp cứu.
              </p>
            </div>

            {/* FEATURES */}
            <div className="space-y-4 text-gray-600 text-[15px]">

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <Activity className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Nhận diện tư thế: Phân tích khung xương và chuyển động để phát hiện ngã tự do hoặc sụp đổ.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <BellRing className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Cảnh báo tức thời: Thông báo ngay lập tức cho đội cứu hộ qua loa, đèn và ứng dụng di động.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Giảm thương tích: Rút ngắn thời gian 'vàng' trong cấp cứu, tối đa hóa khả năng phục hồi.
                </p>
              </motion.div>

            </div>
          </motion.div>


          {/* IMAGE RIGHT */}
          <motion.div
            {...fRight}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white z-10 bg-orange-50 p-4">

              <ImageWithFallback
                src={fallImg}
                alt="Fall Detection AI"
                className="w-full h-[500px] object-contain"
              />

              {/* alert badge */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                FALL DETECTED
              </motion.div>
            </div>

            {/* background glow */}
            <div className="absolute -top-5 -right-5 w-full h-full bg-orange-100 rounded-[2.5rem] -z-0 blur-sm"></div>
          </motion.div>

        </div>
      </main>

      {/* SECTION II: TẠI SAO QUAN TRỌNG */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              II. Tại sao Phát hiện Té ngã lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto">
              Tai nạn ngã từ trên cao là nguyên nhân hàng đầu gây tử vong và thương tích nghiêm trọng trong xây dựng và công nghiệp. Việc phản ứng chậm trễ làm giảm đáng kể khả năng sống sót.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Công trình cao tầng & Giàn giáo",
                content:
                  "Công nhân làm việc trên cao luôn đối mặt với rủi ro rơi ngã tử vong nếu thiếu thiết bị bảo hộ hoặc bất cẩn.",
                icon: "🏗️",
                color: "border-orange-500",
              },
              {
                title: "Điểm mù giám sát",
                content:
                  "Giám sát thủ công không thể bao quát mọi vị trí trên công trường rộng lớn cùng một lúc.",
                icon: "⚠️",
                color: "border-red-500",
              },
              {
                title: "Thời gian cứu hộ Vàng",
                content:
                  "Mỗi giây trễ nảy trong cứu hộ ngã cao đều có thể dẫn đến hậu quả nghiêm trọng về tính mạng.",
                icon: "⏱️",
                color: "border-blue-500",
              },
              {
                title: "Khu vực Cô lập",
                content:
                  "Công nhân làm việc một mình trong kho bãi hoặc khu vực hẻo lánh nếu ngã sẽ không ai biết để hỗ trợ.",
                icon: "🚶",
                color: "border-purple-500",
              },
              {
                title: "Môi trường trơn trượt",
                content:
                  "Nhà máy chế biến, xưởng hóa chất có bề mặt trơn trượt rất dễ xảy ra sự cố vấp ngã nguy hiểm.",
                icon: "💧",
                color: "border-green-500",
              },
              {
                title: "Bảo vệ pháp lý & Tuân thủ",
                content:
                  "Hệ thống tự động báo cáo sự cố giúp doanh nghiệp tuân thủ quy định an toàn lao động và bảo vệ nhân viên.",
                icon: "⚖️",
                color: "border-yellow-500",
              },
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-3xl border-t-4 ${risk.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{risk.icon}</div>

                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  {risk.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
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
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-orange-50 p-4">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[620px] md:h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={fallWarningVideo} type="video/mp4" />
                </video>

              </div>

              {/* badge */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                FALL DETECTED
              </motion.div>
            </motion.div>

            {/* TEXT RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                  III. Ứng dụng Giải pháp Cần thiết nhất ở đâu?
                </h2>

                <div className="h-1 w-20 bg-orange-500 mb-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Sự cố té ngã có thể xảy ra ở mọi nơi, nhưng đặc biệt nghiêm trọng ở các khu vực rủi ro cao hoặc nơi làm việc vắng người.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    t: "Công trường Xây dựng (Giàn giáo)",
                    c: "Nơi có độ cao lớn và nhiều thiết bị vật tư cồng kềnh. AI giám sát liên tục để cứu sống những công nhân không may trượt chân.",
                  },
                  {
                    t: "Nhà máy Sản xuất & Kho bãi",
                    c: "Công nhân làm việc với máy móc, trên kệ hàng cao hoặc di chuyển trong kho hẹp thường dễ mất thăng bằng hoặc vấp ngã.",
                  },
                  {
                    t: "Cơ sở Y tế & Bệnh viện",
                    c: "Phát hiện bệnh nhân, người cao tuổi hoặc người khuyết tật bị ngã để y tá, bác sĩ có thể đến hỗ trợ kịp thời.",
                  },
                  {
                    t: "Khu vực Vận hành Độc lập",
                    c: "Bảo vệ những công nhân làm việc một mình trong đêm hoặc tại những vị trí ít người qua lại.",
                  },
                  {
                    t: "Sàn Sản xuất Dầu khí",
                    c: "Môi trường hóa chất trơn trượt và nguy hiểm, té ngã có thể dẫn đến tiếp xúc với hóa chất độc hại.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-all duration-300"
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
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* TEXT LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-orange-400 font-bold text-xl uppercase tracking-wider mb-2">
                  IV. Cách Thức Hoạt động (Computer Vision)
                </h2>

                <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Giải pháp{" "}
                  <span className="text-white font-semibold">Fall Detection</span>{" "}
                  sử dụng thuật toán học sâu để lập bản đồ khung xương người và nhận diện gia tốc rơi.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    s: "01",
                    t: "Phân tích khung xương",
                    d: "AI tự động vẽ bản đồ khung xương người để phát hiện các tư thế ngã bất thường và tốc độ chuyển đổi tư thế.",
                  },
                  {
                    s: "02",
                    t: "Lọc cảnh báo giả",
                    d: "Thuật toán thông minh phân biệt giữa việc cúi xuống làm việc nhặt đồ và một cú ngã thực sự, giảm thiểu báo động giả.",
                  },
                  {
                    s: "03",
                    t: "Giám sát 24/7",
                    d: "Hoạt động liên tục qua các camera an ninh, không bao giờ bỏ sót khoảnh khắc nào dù trong điều kiện ánh sáng yếu.",
                  },
                  {
                    s: "04",
                    t: "Cảnh báo tức thì",
                    d: "Khi xác nhận có người ngã, hệ thống gửi thông báo đến bộ đàm, điện thoại của đội y tế hoặc quản lý an toàn.",
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


            {/* IMPACT VIDEO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-orange-50 p-4 max-w-5xl mx-auto">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[620px] md:h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={fallWarningVideo2} type="video/mp4" />
                </video>

                {/* badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
                >
                  LIVE AI ANALYSIS
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION V: TÁC ĐỘNG VÀ LỢI ÍCH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              V. Tác động và Lợi ích Chính
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              Bảo vệ tính mạng con người là ưu tiên hàng đầu. Công nghệ của Quốc Việt giúp tối đa hóa khả năng cứu sống nạn nhân trong tai nạn té ngã.
            </p>
          </motion.div>


          {/* BENEFIT GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Giảm Thời gian Cứu hộ",
                value: "80%",
                desc: "Thông báo y tế xuất hiện ngay lập tức, tiết kiệm những phút giây quan trọng cho cấp cứu.",
              },
              {
                title: "Khả năng Sống sót",
                value: "2X",
                desc: "Can thiệp y tế nhanh chóng có thể tăng gấp đôi cơ hội sống sót sau tai nạn rơi từ trên cao.",
              },
              {
                title: "Độ tin cậy Nhận diện",
                value: "95%",
                desc: "Phân biệt chính xác giữa hành động ngã thật và các tư thế làm việc bình thường.",
              },
              {
                title: "Không phụ thuộc Cảm biến",
                value: "100%",
                desc: "Công nhân không cần đeo thiết bị cảm biến trên người, tránh sự vướng víu và bất tiện.",
              },
              {
                title: "Bằng chứng Hình ảnh",
                value: "HD",
                desc: "Trích xuất video 5 giây trước và sau sự kiện để phân tích nguyên nhân sự cố.",
              },
              {
                title: "Nâng cao Văn hóa An toàn",
                value: "100%",
                desc: "Tạo cảm giác an tâm tuyệt đối cho công nhân khi biết luôn có hệ thống giám sát bảo vệ họ.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-orange-50 rounded-3xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >


                <div className="text-3xl font-black text-orange-500 mb-3">
                  {item.value}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION VI: CASE STUDY */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] bg-white shadow-2xl border border-orange-100 overflow-hidden"
          >

            {/* HEADER */}
            <div className="relative bg-orange-500 text-white p-10 md:p-14 overflow-hidden">

              {/* animated glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -top-20 -right-20 w-72 h-72 bg-white rounded-full blur-3xl"
              />

              <p className="uppercase tracking-[0.3em] text-sm font-semibold opacity-80 mb-4 relative z-10">
                VI. Case Study
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                Công trường Dubai Tăng Tỉ Lệ Cứu Sống Lên Gấp Đôi
              </h2>

              <div className="text-orange-100 text-lg relative z-10">
                <span className="font-semibold">Ngành:</span> Xây Dựng (Construction)
                <span className="mx-4">•</span>
                <span className="font-semibold">Địa điểm:</span> Dubai, UAE
              </div>
            </div>


            {/* BODY */}
            <div className="p-10 md:p-14 grid md:grid-cols-2 gap-12 items-start">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Vấn đề
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Tại các đại công trường cao tầng ở Dubai, công nhân thường xuyên thi công ở mép tòa nhà. Khi có tai nạn ngã xảy ra, việc chậm trễ phát hiện khiến công tác y tế không thể triển khai ngay lập tức, dẫn đến tỷ lệ tử vong cao.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Giải pháp của Quốc Việt
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Tích hợp mô-đun{" "}
                    <span className="font-semibold text-orange-600">
                      Phát hiện Té Ngã
                    </span>{" "}
                    vào camera giám sát tháp cẩu và camera góc rộng. Hệ thống lập tức báo động đỏ tới phòng điều hành ngay khi AI nhận diện sự thay đổi trọng tâm cơ thể và gia tốc bất thường của công nhân.
                  </p>
                </div>
              </motion.div>


              {/* RIGHT IMPACT CARDS */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >

                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  className="bg-orange-50 rounded-3xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl font-black text-orange-500 mb-3">
                    80%
                  </div>

                  <p className="text-gray-800 text-lg font-medium">
                    Thời gian đội ngũ y tế tiếp cận hiện trường được cắt giảm
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  className="bg-orange-50 rounded-3xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl font-black text-orange-500 mb-3">
                    100%
                  </div>

                  <p className="text-gray-800 text-lg font-medium">
                    Sự cố ngã cao được AI phát hiện ngay lập tức không sai sót
                  </p>
                </motion.div>

              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>


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
                Mỗi giây đều quyết định sinh mạng.
              </h2>

              <p className="text-gray-700 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Khám phá cách Quốc Việt Fall Detection có thể bảo vệ đội ngũ của bạn và tối ưu hóa thời gian cấp cứu.
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
                TƯ VẤN GIẢI PHÁP AN TOÀN
              </motion.button>

            </div>

          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-8 px-4 border-t">
        <div className="container mx-auto text-center">

          <div className="flex items-center justify-center gap-3 mb-3">
            <ImageWithFallback
              src={logoImg}
              alt="Logo"
              className="h-8 w-auto"
            />

            <h3 className="font-semibold text-gray-800">
              QUỐC VIỆT CO., Ltd
            </h3>
          </div>

          <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
            Chuyên gia hàng đầu trong lĩnh vực chuyển đổi số, giúp doanh nghiệp tối ưu hóa quy trình và tăng trưởng bền vững.
          </p>

          <p className="text-xs text-gray-500 mb-5">
            © 2026 Quốc Việt Digitization Solutions. All Rights Reserved.
          </p>

          {/* Social */}
          <div className="flex justify-center gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/QuocVietTradingAndEngineeringLtd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
            >
              <Facebook className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/quoc-viet-trading-and-engineering-co-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
            >
              <Linkedin className="w-5 h-5" />
            </a>

          </div>

        </div>
      </footer>
    </div>
  );
}

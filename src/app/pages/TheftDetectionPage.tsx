import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  ShieldCheck,
  Lock,
  Search,
  BellRing,
  Facebook,
  Linkedin,
  Box,
  Fingerprint,
  Activity
} from 'lucide-react';

import theftImg from '@/imports/image_11.jpg';
import theftVideo from '@/app/asset/demo_5.mp4';
import theftVideo2 from '@/app/asset/demo_6.mp4';

import logoImg from '@/imports/logo.png';

interface TheftDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };
const fRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export function TheftDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: TheftDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Theft Detection | Quốc Việt";
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
      <div className="bg-white py-24 border-b border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-50 rounded-full">
                <Lock className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              THEFT DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Theft Detection: Ngăn chặn Mất mát Tài sản với Giám sát Chủ động 24/7. Giải pháp video analytics của Quốc Việt chuyển đổi CCTV thông thường thành công cụ giám sát chủ động, nhận diện truy cập trái phép, giả mạo và hoạt động đáng ngờ theo thời gian thực.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE LEFT */}
          <motion.div {...fLeft} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
              <ImageWithFallback
                src={theftImg}
                alt="Theft Detection AI"
                className="w-full h-auto object-contain"
              />

              <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">
                THEFT DETECTED
              </div>
            </div>

            <div className="absolute -top-5 -right-5 w-full h-full bg-blue-50 rounded-3xl -z-0"></div>
          </motion.div>


          {/* TEXT RIGHT */}
          <motion.div {...fRight} className="space-y-6">
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  Phát Hiện Trộm Cắp (Theft Detection)
                </span>

                là một giải pháp giám sát dựa trên{" "}
                <span className="text-orange-600 font-semibold">
                  Computer Vision
                </span>{" "}
                của <span className="text-orange-600 font-semibold">Quốc Việt</span>,
                giúp giám sát theo thời gian thực các tài sản, vật liệu và thiết bị
                quan trọng trong các môi trường công nghiệp năng động.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Giải pháp sử dụng{" "}
                <span className="font-semibold text-gray-900">
                  AI video analytics độc quyền
                </span>{" "}
                để tận dụng hệ thống CCTV hoặc IP camera hiện có, tự động phát hiện
                các hành vi bất thường như giả mạo, xâm nhập và di chuyển trái phép,
                đồng thời kích hoạt cảnh báo tức thì nhằm giảm sự phụ thuộc vào giám
                sát thủ công.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[15px]">
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-blue-500 shrink-0" />
                <p>
                  Giám sát liên tục 24/7 các tài sản cố định và phát hiện hành vi
                  di dời trái phép (Object Removal Detection).
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Fingerprint className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Phát hiện các hành vi giả mạo, che giấu hoặc tẩu tán tài sản đáng
                  ngờ theo thời gian thực.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-blue-500 shrink-0" />
                <p>
                  Giám sát xâm nhập trái phép vào kho bãi, khu vực lưu trữ hoặc các
                  vùng tài sản có giá trị cao.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <BellRing className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Cảnh báo tự động đa phương thức qua App, SMS, Email hoặc còi báo
                  để phản ứng nhanh hơn.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                <p>
                  Giảm thiểu thời gian ngừng hoạt động liên quan đến trộm cắp và xây
                  dựng mô hình bảo mật chủ động dựa trên dữ liệu.
                </p>
              </div>
            </div>
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
              II. Tại sao Phát hiện Trộm cắp lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
              Trộm cắp và truy cập trái phép có thể dẫn đến tổn thất tài chính đáng kể,
              gián đoạn hoạt động và an toàn bị xâm phạm. Những rủi ro này đặc biệt tăng cao
              trong giờ nghỉ, ở các khu vực thiếu ánh sáng hoặc trên các công trường rộng lớn
              với sự giám sát của con người bị hạn chế.
            </p>
          </motion.div>

          {/* Risk Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Điểm nhập cảnh không được giám sát",
                content:
                  "Các khu vực ra vào trong quá trình thay đổi ca hoặc sau giờ làm việc dễ trở thành mục tiêu xâm nhập trái phép.",
                icon: "🚪",
                color: "border-blue-500",
              },
              {
                title: "Giả mạo tài sản & thiết bị",
                content:
                  "Máy móc, công cụ hoặc vật liệu không được giám sát có thể bị giả mạo hoặc di chuyển mà không được phát hiện.",
                icon: "🛠️",
                color: "border-orange-500",
              },
              {
                title: "Điểm mù CCTV truyền thống",
                content:
                  "Ánh sáng yếu hoặc vật cản tạo ra các khu vực mù khiến camera thông thường không thể giám sát hiệu quả.",
                icon: "📷",
                color: "border-gray-500",
              },
              {
                title: "Thiếu cảnh báo thời gian thực",
                content:
                  "Không có cảnh báo tức thì cho các hành vi đáng ngờ hoặc đối tượng lảng vảng quanh khu vực nhạy cảm.",
                icon: "⚠️",
                color: "border-red-500",
              },
              {
                title: "Phản ứng xử lý chậm trễ",
                content:
                  "Thiếu hệ thống cảnh báo tập trung khiến việc xác minh và phản ứng với sự cố mất nhiều thời gian hơn.",
                icon: "⏳",
                color: "border-purple-500",
              },
              {
                title: "Bảo vệ liên tục 24/7",
                content:
                  "AI của Quốc Việt chuyển CCTV truyền thống thành lớp phòng thủ thông minh, chủ động và luôn hoạt động.",
                icon: "🛡️",
                color: "border-green-500",
              },
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`bg-white p-8 rounded-3xl border-t-4 ${risk.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">
                  {risk.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  {risk.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {risk.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Challenge Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-blue-50 border-l-4 border-blue-500 rounded-2xl p-8 max-w-5xl mx-auto text-left shadow-sm"
          >
            <h3 className="text-blue-600 font-bold text-lg mb-3">
              Thách thức
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Trong các khu vực rộng lớn, các sự cố an ninh thường bị bỏ qua.
              AI của Quốc Việt chuyển đổi CCTV truyền thống thành một lớp phòng thủ
              thông minh, chủ động, cho phép cảnh báo tức thì và bảo vệ liên tục 24/7.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION III: ỨNG DỤNG */}
      <section className="py-24 bg-white">
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
                <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                  III. Ứng dụng Giải pháp Cần thiết nhất ở đâu?
                </h2>

                <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Nguy cơ trộm cắp xảy ra ở bất cứ nơi nào có thiết bị, vật liệu có giá trị,
                  hoặc các điểm truy cập bị bỏ mặc không được giám sát.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    t: "Kho hàng & Trung tâm Logistics",
                    c: "Rủi ro trộm cắp cao trong quá trình xếp dỡ hàng hóa và chuyển ca.",
                  },
                  {
                    t: "Công trường Xây dựng",
                    c: "AI cung cấp giám sát 24/7, xác định truy cập trái phép theo thời gian thực.",
                  },
                  {
                    t: "Nhà máy Sản xuất & Khai thác mỏ",
                    c: "Giám sát các khu vực quan trọng, bảo vệ thiết bị có giá trị cao.",
                  },
                  {
                    t: "Nhà máy Dầu khí & Tiện ích",
                    c: "Đảm bảo phát hiện xâm nhập theo thời gian thực và giám sát liên tục.",
                  },
                  {
                    t: "Cửa hàng Bán lẻ & Khu thương mại",
                    c: "Phát hiện hành vi đáng ngờ và truy cập trái phép vào khu vực kho.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
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


            {/* VIDEO RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                  <source src={theftVideo} type="video/mp4" />
                </video>
              </div>

              {/* floating badge */}
              <div className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                24/7 ASSET PROTECTION
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* VIDEO LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-4">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[620px] md:h-[720px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={theftVideo2} type="video/mp4" />
                </video>

                {/* floating badge */}
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
                  THEFT ALERT ACTIVE
                </motion.div>
              </div>

              {/* glow effect */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
            </motion.div>

            {/* TEXT RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                  Giải pháp <span className="text-white font-semibold">Loitering Detection</span>
                  sử dụng AI video analytics của <span className="text-orange-400 font-semibold">Quốc Việt</span>,
                  tận dụng cơ sở hạ tầng camera hiện có để phát hiện các hành vi lảng vảng
                  bất thường và hỗ trợ ngăn ngừa rủi ro chủ động theo thời gian thực.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    s: "01",
                    t: "Kết nối (Connect)",
                    d: "AI kết nối trực tiếp với hệ thống IP Camera hoặc CCTV hiện có thông qua giao thức RTSP, không cần đầu tư thêm phần cứng.",
                  },
                  {
                    s: "02",
                    t: "Ghi nhận (Capture)",
                    d: "Hệ thống liên tục phân tích nguồn cấp video trực tiếp để phát hiện các dấu hiệu liên quan đến hành vi lảng vảng.",
                  },
                  {
                    s: "03",
                    t: "Phân tích AI",
                    d: "Tự động gắn cờ cá nhân vượt quá ngưỡng thời gian nán lại, các mẫu di chuyển đáng ngờ như đi vòng quanh hoặc đứng yên lâu tại khu vực nhạy cảm.",
                  },
                  {
                    s: "04",
                    t: "Kiểm soát (Control)",
                    d: "Ngay khi phát hiện, hệ thống gửi cảnh báo tức thì qua còi báo động, đèn, ứng dụng di động, SMS hoặc bảng điều khiển, kèm bằng chứng hình ảnh có dấu thời gian.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg">
                        {item.s}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">
                        {item.t}
                      </h4>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION V: TÁC ĐỘNG & LỢI ÍCH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              V. Tác động và Lợi ích Chính
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              Theft Detection nâng cao hiệu quả hoạt động và an ninh công trường
              với tác động có thể đo lường được.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Tự động hóa Giám sát",
                value: "65%",
                desc: "Tiết kiệm tới 65% thời gian bằng cách tự động hóa giám sát công trường.",
                icon: "🤖",
              },
              {
                title: "Cải thiện Độ chính xác",
                value: "+38%",
                desc: "Tăng độ chính xác dự đoán trộm cắp bằng cách học bất thường chuyển động.",
                icon: "🎯",
              },
              {
                title: "Tăng Tốc độ Phản hồi",
                value: "70%",
                desc: "AI kích hoạt cảnh báo tức thì khi phát hiện truy cập trái phép.",
                icon: "⚡",
              },
              {
                title: "Giảm Sự cố Ngoài giờ",
                value: "41%",
                desc: "Giảm trộm cắp ngoài giờ bằng cảnh báo tại các khu vực rủi ro cao.",
                icon: "🌙",
              },
              {
                title: "Giảm Yêu cầu Bảo hiểm",
                value: "27%",
                desc: "Có hồ sơ giám sát và bằng chứng số rõ ràng hơn.",
                icon: "📄",
              },
              {
                title: "Nâng cao Cảnh giác",
                value: "10x",
                desc: "Nhân viên và công nhân cảnh giác hơn gần khu vực nhạy cảm.",
                icon: "👁️",
              },
              {
                title: "Tài liệu Nhanh hơn",
                value: "3x",
                desc: "Tạo báo cáo kiểm toán và hồ sơ bảo hiểm nhanh hơn.",
                icon: "📊",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                {/* icon */}
                <div className="text-4xl mb-4">
                  {item.icon}
                </div>

                {/* number */}
                <div className="text-3xl font-black text-orange-500 mb-3">
                  {item.value}
                </div>

                {/* title */}
                <h3 className="font-bold text-gray-900 text-lg mb-3">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION VI: PREMIUM CASE STUDY */}
      <section className="relative py-28 bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden">

        {/* background blur effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              y: -5,
              boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
            }}
            className="rounded-[2.5rem] bg-white shadow-2xl border border-orange-100 overflow-hidden"
          >

            {/* TOP HEADER */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white p-10 md:p-14 overflow-hidden"
            >
              {/* moving shimmer */}
              <motion.div
                animate={{
                  x: ["-100%", "150%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
                className="absolute top-0 left-0 w-1/3 h-full bg-white/10 skew-x-[-25deg]"
              />

              <p className="uppercase tracking-[0.3em] text-sm font-semibold opacity-80 mb-4">
                VI. Case Study
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Chuỗi Bán lẻ Dubai Giảm 63% Trộm cắp
              </h2>

              <div className="text-orange-100 text-lg">
                <span className="font-semibold">Ngành:</span> Bán lẻ (Retail)
                <span className="mx-4">•</span>
                <span className="font-semibold">Địa điểm:</span> Riyadh, Saudi Arabia
              </div>
            </motion.div>


            {/* CONTENT */}
            <div className="p-10 md:p-14 grid md:grid-cols-2 gap-14">

              {/* LEFT TEXT */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                <div className="p-6 rounded-3xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Vấn đề
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Chuỗi bán lẻ liên tục gặp tình trạng trộm cắp vặt.
                    Các hành vi như cúi người, che giấu sản phẩm,
                    hoặc chặn góc nhìn camera thường bị bỏ sót
                    khi giám sát thủ công.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Giải pháp của Quốc Việt
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Tích hợp AI Theft Detection trực tiếp vào hệ thống
                    camera hiện có, giúp nhận diện tư thế bất thường,
                    hành vi lảng vảng và che giấu vật phẩm theo thời gian thực.
                  </p>
                </div>
              </motion.div>


              {/* RIGHT IMPACT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >

                {/* CARD 1 */}
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -5,
                  }}
                  className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-6xl font-black text-orange-500 mb-3 group-hover:scale-110 transition"
                  >
                    63%
                  </motion.div>

                  <p className="text-gray-800 text-lg font-medium">
                    Giảm các sự cố trộm cắp vặt sau 4 tháng
                  </p>
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -5,
                  }}
                  className="group bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl font-black text-orange-500 mb-3 group-hover:scale-110 transition"
                  >
                    45.000 AED
                  </motion.div>

                  <p className="text-gray-800 text-lg font-medium">
                    Giảm tổn thất hàng tháng do trộm cắp
                  </p>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">

        {/* animated background glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute inset-0 bg-orange-500/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 max-w-5xl space-y-8 relative z-10"
        >

          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Đừng để mất mát tài sản và lỗ hổng an ninh đe dọa hoạt động của bạn.
          </motion.h2>

          {/* paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xl max-w-3xl mx-auto font-medium"
          >
            Khám phá cách Quốc Việt Theft Detection có thể bảo vệ tài sản có giá trị cao,
            giảm thiểu tổn thất và nâng cao tính minh bạch an ninh 24/7.
          </motion.p>

          {/* CTA button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              y: {
                repeat: Infinity,
                duration: 2,
              },
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 35px rgba(249,115,22,0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -3, 0],
            }}
            onClick={() => setCurrentPage('demoForm')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition-all"
          >
            YÊU CẦU BẢN DEMO NGAY HÔM NAY!
          </motion.button>

        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <ImageWithFallback src={logoImg} alt="Logo" className="h-8 w-auto" />
            <h3 className="font-semibold text-gray-800">QUỐC VIỆT CO., Ltd</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
            Chuyên gia hàng đầu trong lĩnh vực chuyển đổi số, giúp doanh nghiệp tối ưu hóa quy trình và tăng trưởng bền vững.
          </p>
          <p className="text-xs text-gray-500 mb-5">
            © 2026 Quốc Việt Digitization Solutions. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/QuocVietTradingAndEngineeringLtd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/quoc-viet-trading-and-engineering-co-ltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  ShieldAlert,
  Eye,
  Lock,
  BellRing,
  Facebook,
  Linkedin,
  Target,
  AlertTriangle,
  Zap
} from 'lucide-react';

import weaponImg from '@/imports/image_10.jpg';
import weaponVideo from '@/app/asset/demo_7.mp4';
import weaponVideo2 from '@/app/asset/demo_8.mp4';

import logoImg from '@/imports/logo.png';

interface WeaponDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };
const fRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export function WeaponDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: WeaponDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Weapon Detection | Quốc Việt";
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
              <div className="p-4 bg-red-50 rounded-full">
                <ShieldAlert className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              WEAPON DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Weapon Detection: Ngăn chặn leo thang sớm với Phát hiện Vũ khí được Hỗ trợ bởi AI CCTV tại các Địa điểm Dễ bị Tổn thương. Hệ thống biến CCTV thông thường thành hệ thống giảm thiểu mối đe dọa tự động, theo thời gian thực.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div {...fLeft} className="space-y-6">
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  Phát Hiện Vũ Khí (Weapon Detection)
                </span>
                là một mô-đun{" "}
                <span className="font-semibold text-orange-600">
                  computer vision
                </span>{" "}
                tự động xác định súng, chất nổ, lưỡi dao hoặc các vật thể nguy hiểm
                khác trong cảnh quay giám sát.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[15px]">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold text-gray-800">Công nghệ:</span>{" "}
                  Được cung cấp bởi Quốc Việt proprietary AI video analytics, mô-đun
                  này biến cơ sở hạ tầng IP hoặc CCTV hiện có thành một hệ thống phát
                  hiện mối đe dọa chủ động.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold text-gray-800">Hoạt động:</span>{" "}
                  Hệ thống liên tục quét dữ liệu hình ảnh trực tiếp để xác định các
                  vật thể có rủi ro cao theo thời gian thực, giảm sự phụ thuộc vào
                  giám sát thủ công.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold text-gray-800">Lợi ích:</span>{" "}
                  Cung cấp phát hiện vật thể 24/7, cảnh báo tự động và nhật ký kỹ
                  thuật số chi tiết, giúp các nhà quản lý an ninh giám sát các mối
                  đe dọa tập trung và phản ứng nhanh hơn.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div {...fRight} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
              <ImageWithFallback
                src={weaponImg}
                alt="Weapon Detection AI"
                className="w-full h-auto object-cover"
              />

              {/* scanning line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.9)]"></div>

              {/* alert badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-bounce">
                THREAT DETECTED
              </div>
            </div>

            {/* background layer */}
            <div className="absolute -top-5 -right-5 w-full h-full bg-red-50 rounded-3xl -z-0"></div>
          </motion.div>

        </div>
      </main>

      {/* SECTION II: TẠI SAO QUAN TRỌNG */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              II. Tại sao cần Phát hiện Vũ khí?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
              Trong bối cảnh an ninh phức tạp, việc phát hiện sớm các mối đe dọa là
              yếu tố sống còn để ngăn chặn thảm kịch và bảo vệ sự an tâm cho cộng đồng.
            </p>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Phản ứng trước khi nổ súng",
                content:
                  "AI phát hiện vũ khí ngay khi chúng được rút ra, cho phép an ninh can thiệp trước khi hành vi bạo lực xảy ra.",
                icon: "⚡",
                color: "border-red-500",
                glow: "hover:shadow-red-100",
              },
              {
                title: "Loại bỏ sai sót con người",
                content:
                  "Nhân viên an ninh có thể bị mệt mỏi hoặc xao nhãng, nhưng AI giám sát 24/7 với độ tập trung tuyệt đối.",
                icon: "👁️",
                color: "border-orange-500",
                glow: "hover:shadow-orange-100",
              },
              {
                title: "Giảm thiểu hoảng loạn",
                content:
                  "Cảnh báo im lặng giúp an ninh xử lý tình huống chuyên nghiệp mà không gây hoảng loạn cho đám đông.",
                icon: "🤫",
                color: "border-blue-500",
                glow: "hover:shadow-blue-100",
              },
              {
                title: "Phạm vi giám sát rộng",
                content:
                  "Một hệ thống AI có thể giám sát hàng trăm camera cùng lúc, điều mà con người không thể làm được.",
                icon: "🌐",
                color: "border-purple-500",
                glow: "hover:shadow-purple-100",
              },
              {
                title: "Tăng cường tâm lý an tâm",
                content:
                  "Khách hàng và nhân viên cảm thấy an toàn hơn khi biết có hệ thống bảo vệ hiện đại.",
                icon: "🛡️",
                color: "border-green-500",
                glow: "hover:shadow-green-100",
              },
              {
                title: "Dữ liệu bằng chứng",
                content:
                  "Ghi lại hình ảnh rõ nét về đối tượng và vũ khí phục vụ công tác điều tra của cảnh sát.",
                icon: "📜",
                color: "border-yellow-500",
                glow: "hover:shadow-yellow-100",
              },
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={`
            bg-white p-8 rounded-3xl border-t-4 ${risk.color}
            shadow-lg ${risk.glow}
            transition-all duration-300
            cursor-pointer
            group
          `}
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-5xl mb-5"
                >
                  {risk.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-orange-600 transition-colors">
                  {risk.title}
                </h3>

                {/* CONTENT */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {risk.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CHALLENGE BOX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 max-w-6xl mx-auto shadow-sm"
          >
            <h3 className="text-red-600 font-bold text-lg mb-3">
              Nguy cơ
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Một khoảnh khắc bị bỏ qua duy nhất có thể ngay lập tức biến một môi
              trường an toàn, bình tĩnh thành một khu vực khủng hoảng nguy hiểm, rủi
              ro cao. AI video analytics biến CCTV truyền thống thành công cụ giám sát
              chủ động, giảm sự phụ thuộc vào phán đoán của con người và loại bỏ các
              điểm mù gây ra bởi sự mệt mỏi hoặc mất tập trung.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION III: ỨNG DỤNG */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* VIDEO LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[720px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={weaponVideo} type="video/mp4" />
                </video>

              </div>

              {/* floating alert */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-6 left-6 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                WEAPON DETECTED
              </motion.div>
            </motion.div>

            {/* TEXT RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                  III. Được ứng dụng ở đâu?
                </h2>

                <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

                <p className="text-gray-700 leading-relaxed">
                  Phát hiện sớm các mối đe dọa vũ khí mang lại thời gian quan trọng để
                  ngăn chặn sự cố leo thang hiệu quả.
                </p>
              </div>

              <div className="space-y-5">

                {[
                  {
                    t: "Khu vực Giao thông Công cộng & Nhà ga",
                    c: "Các trung tâm trung chuyển và điểm nhập cảnh hàng hóa (Cargo Entry Points) là những khu vực có rủi ro cao. AI cho phép phản ứng nhanh chóng để phát hiện các mối đe dọa từ những kẻ xâm nhập, gây hấn tại nơi làm việc, hoặc sự cố mang vũ khí vào ngoài ý muốn.",
                  },
                  {
                    t: "Cơ sở Sản xuất và Công nghiệp",
                    c: "Các cơ sở công nghiệp quản lý các hoạt động nhạy cảm đòi hỏi sự giám sát vũ khí liên tục để duy trì an toàn. AI giúp giảm thiểu rủi ro và tăng cường nhận thức tình huống.",
                  },
                  {
                    t: "Kho hàng lớn và Khu Logistics",
                    c: "Các khu vực rộng lớn có điểm mù cần giám sát liên tục. Phát hiện Vũ khí cung cấp giám sát xuyên suốt các khu vực quan trọng như bến bốc dỡ và điểm truy cập phía sau.",
                  },
                  {
                    t: "Tòa nhà Chính phủ & Khu phức hợp Hành chính",
                    c: "Giám sát các điểm vào và khu vực truy cập của các tòa nhà chính phủ để cung cấp cảnh báo theo thời gian thực về các vật thể đáng ngờ, mà không làm gián đoạn chức năng hành chính.",
                  },
                  {
                    t: "Trung tâm Mua sắm & Sân vận động",
                    c: "Các địa điểm có lưu lượng giao thông cao dễ bị các sự kiện gây ra sự hoảng loạn. AI cho phép xác định sớm các vật phẩm hoặc hành vi đáng ngờ, cho phép kích hoạt các giao thức phong tỏa hoặc sơ tán nhanh chóng.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{
                      x: 6,
                      scale: 1.01,
                    }}
                    className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
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

      {/* SECTION IV: QUY TRÌNH VẬN HÀNH */}
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
                    Weapon Detection
                  </span>{" "}
                  tích hợp vào hệ thống giám sát hiện có của bạn để cung cấp
                  khả năng phát hiện mối đe dọa chủ động.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    s: "01",
                    t: "Kết nối (Connect)",
                    d: "AI kết nối trực tiếp với hệ thống IP Camera hoặc CCTV hiện có thông qua giao thức RTSP, không cần đầu tư thêm phần cứng.",
                  },
                  {
                    s: "02",
                    t: "Ghi nhận (Capture)",
                    d: "Hệ thống liên tục phân tích mỗi khung video theo thời gian thực để xác định các chỉ số rủi ro hình ảnh và mẫu hành vi.",
                  },
                  {
                    s: "03",
                    t: "Phân tích AI",
                    d: "Nhận diện các hình dạng phác thảo giống vũ khí hoặc súng, vật thể được xử lý theo cách đáng ngờ, và các chuyển động hung hăng đột ngột.",
                  },
                  {
                    s: "04",
                    t: "Kiểm soát (Control)",
                    d: "Ngay khi phát hiện, hệ thống gửi cảnh báo tức thì qua còi báo động, đèn, ứng dụng di động, SMS hoặc dashboard kèm bằng chứng hình ảnh.",
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
                  <source src={weaponVideo2} type="video/mp4" />
                </video>
              </div>

              {/* floating alert */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-8 right-8 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                WEAPON DETECTED
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* SECTION V: TÁC ĐỘNG VÀ LỢI ÍCH CHÍNH */}
      <section className="py-24 bg-white text-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              V. Tác động và Lợi ích Chính
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
              <span className="font-semibold text-orange-600">Quốc Việt</span> mang lại giá trị chuyển đổi trong hoạt động,
              ứng phó sự cố và tuân thủ quy định.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Độ chính xác cao",
                content:
                  "Đạt độ chính xác lên tới 92% trong việc xác định vũ khí trong các điều kiện ánh sáng và mật độ đám đông khác nhau.",
              },
              {
                icon: "🚫",
                title: "Giảm Sự cố Truy cập Trái phép",
                content:
                  "Giảm 70% sự cố truy cập trái phép bằng cách kết hợp phát hiện vũ khí theo thời gian thực với theo dõi hành vi.",
              },
              {
                icon: "⚡",
                title: "Tăng Tốc độ Phản hồi",
                content:
                  "Tăng tốc thời gian phản hồi hơn 50% đối với các sự cố liên quan đến vũ khí.",
              },
              {
                icon: "🔕",
                title: "Giảm Cảnh báo Sai",
                content:
                  "Giảm 68% cảnh báo sai theo thời gian thông qua AI thích ứng.",
              },
              {
                icon: "👁️",
                title: "Phát hiện Hành vi Nhanh hơn",
                content:
                  "Phát hiện hành vi đáng ngờ nhanh hơn 3 lần so với con người bằng cách phân tích mẫu chuyển động và tương tác vật thể theo thời gian thực.",
              },
              {
                icon: "📂",
                title: "Cắt giảm Thời gian Điều tra",
                content:
                  "Cắt giảm thời gian điều tra 5 lần thông qua việc gắn thẻ tự động các sự kiện vũ khí.",
              },
              {
                icon: "🤝",
                title: "Cải thiện Phối hợp Nhóm",
                content:
                  "Cải thiện sự phối hợp giữa các nhóm 60% thông qua các bảng điều khiển cảnh báo tập trung.",
              },
              {
                icon: "🎥",
                title: "Đánh giá Cảnh quay Nhanh hơn",
                content:
                  "Cho phép xem xét nhanh hơn 4 lần bằng cách tự động gắn cờ cảnh quay.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-5 animate-pulse">
                  {item.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION VI: CASE STUDY */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              VI. Case Study: Trung tâm Vận tải Mississippi Giảm 50% Rủi ro
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-600 text-lg">
              Minh chứng thực tế về hiệu quả của{" "}
              <span className="text-orange-600 font-semibold">
                Quốc Việt Weapon Detection AI
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-10 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-10">

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Ngành</p>
                <h3 className="text-xl font-bold text-gray-900">
                  Vận tải (Transportation)
                </h3>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Địa điểm</p>
                <h3 className="text-xl font-bold text-gray-900">
                  Mississippi, Mỹ (USA)
                </h3>
              </div>
            </div>

            <div className="space-y-8 text-left">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-red-500 pl-6"
              >
                <h4 className="text-lg font-bold text-red-500 mb-3">
                  Vấn đề
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Một cơ sở vận tải lớn đối mặt với số lượng sự cố an ninh liên quan
                  đến vũ khí ngày càng tăng, với súng trái phép đi vào khu vực công
                  cộng. Khó khăn trong việc giám sát các lối vào đông đúc và khu vực
                  chờ.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-l-4 border-orange-500 pl-6"
              >
                <h4 className="text-lg font-bold text-orange-600 mb-3">
                  Giải pháp của Quốc Việt
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Cơ sở đã triển khai mô-đun{" "}
                  <span className="font-semibold text-gray-900">
                    Phát hiện Vũ khí được hỗ trợ bởi AI
                  </span>{" "}
                  của Quốc Việt bằng cách sử dụng mạng lưới camera hiện có để phân
                  tích các nguồn cấp dữ liệu trực tiếp.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="border-l-4 border-green-500 pl-6"
              >
                <h4 className="text-lg font-bold text-green-600 mb-3">
                  Tác động của Quốc Việt
                </h4>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Trong vòng 6 tháng, cơ sở báo cáo thời gian phản ứng các sự cố liên
                  quan đến vũ khí nhanh hơn{" "}
                  <span className="text-gray-900 font-bold">50%</span> và cải thiện
                  đáng kể sự phối hợp giữa các nhóm an ninh.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-black text-green-600 mb-2">
                    50%
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Tăng tốc thời gian phản ứng
                  </p>
                </div>
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
                Đừng để sự chậm trễ trong việc phát hiện làm leo thang các mối đe dọa sinh tử.
              </h2>

              <p className="text-gray-700 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Khám phá cách Quốc Việt Weapon Detection có thể tích hợp liền mạch vào hệ thống CCTV hiện có của bạn để đạt được độ chính xác 92% và tăng tốc phản ứng, biến phòng ngừa thành một hành động tức thời.
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
                ĐẶT LỊCH DEMO NGAY HÔM NAY!
              </motion.button>

            </div>

          </motion.div>

        </div>


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

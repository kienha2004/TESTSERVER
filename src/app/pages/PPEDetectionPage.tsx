import React from 'react';

import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ppePreviewImg from '../../imports/image_1.jpg';
import ppeVideo from '@/app/asset/demo_25.mp4';
import ppeWorkflowVideo from "@/app/asset/demo_26.mp4";
import logoImg from '../../imports/logo.png';
import { Facebook, Linkedin } from 'lucide-react';
import { PageFooter } from '../components/PageFooter';
import { motion, type Transition } from "framer-motion";
interface PPEDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function PPEDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: PPEDetectionPageProps) {
  const ppeItems = [
    "Mũ Bảo Hộ (Helmet)", "Găng Tay (Glove)", "Áo Phản Quang (Safety Vest)",
    "Dây An Toàn (Safety Harness)", "Kính Bảo Hộ (Goggles)", "Thiết bị Bảo vệ Hô hấp (RPE)",
    "Giày Bảo Hộ (Safety Shoes)"
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "PPE Detection | Quốc Việt";
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

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6 text-6xl">👷‍♂️</div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            PPE DETECTION
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Giải pháp video AI - Biến camera thường thành trợ lý an toàn, giám sát và phát hiện
            sai phạm tuân thủ Đồ Bảo Hộ Cá Nhân theo thời gian thực (PPE).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-10">

    {/* CỘT TRÁI: HÌNH ẢNH MINH HỌA */}
    <motion.div {...fLeft} className="sticky top-24">
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-[12px] border-gray-50 relative z-10">
          <ImageWithFallback
            src={ppePreviewImg}
            alt="PPE Detection AI Quốc Việt"
            className="w-full h-auto object-cover"
          />

          {/* AI labels */}
          <div className="absolute top-10 left-10 border-2 border-green-400 p-2 text-[10px] text-green-400 font-mono bg-black/20">
            HELMET: 98.5%
          </div>

          <div className="absolute bottom-20 right-10 border-2 border-orange-400 p-2 text-[10px] text-orange-400 font-mono bg-black/20">
            VEST: 96.2%
          </div>
        </div>

        {/* glow */}
        <div className="absolute -top-6 -right-6 w-full h-full bg-orange-100 rounded-3xl -z-0"></div>
      </div>
    </motion.div>

    {/* CỘT PHẢI: NỘI DUNG CHI TIẾT */}
    <motion.div {...fRight} className="space-y-8">
      <section>
        <h2 className="text-orange-600 font-bold text-xl mb-2 uppercase tracking-wider">
          I. Giải pháp là gì?
        </h2>

        <div className="h-1 w-20 bg-orange-500 mb-6"></div>

        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          <span className="font-bold text-gray-900 text-xl block mb-2">
            Personal Protective Equipment (PPE)
          </span>
          Là một trong các giải pháp trọng điểm về{" "}
          <span className="text-orange-600 font-semibold">
            AI Camera của Quốc Việt
          </span>.
          Hệ thống thực hiện giám sát và phân tích luồng dữ liệu video thời gian thực (RTSP)
          để tự động nhận diện việc tuân thủ trang thiết bị bảo hộ tại khu vực làm việc.
        </p>

        {/* PPE LIST */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🛡️</span>
            Các đồ bảo hộ cá nhân có thể giám sát:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ppeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center text-gray-600 text-sm"
              >
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500 italic border-t pt-4">
            * Có thể tùy chỉnh thêm các loại đồ bảo hộ đặc thù và cấu hình riêng
            cho từng nhà máy.
          </p>
        </div>
      </section>
    </motion.div>

  </div>
</main>

      {/* SECTION II: TẠI SAO QUAN TRỌNG */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-orange-600 font-bold text-xl mb-2 uppercase tracking-wider">II. Tại sao phát hiện PPE lại quan trọng?</h2>
            <div className="h-1 w-20 bg-orange-500 mb-6"></div>
            <p className="text-gray-700 text-lg max-w-4xl leading-relaxed">
              Việc phát hiện PPE chủ động là một nhu cầu thiết yếu đối với môi trường làm việc an toàn không gây nguy hại
              <span className="font-bold text-orange-600"> (zero-harm workplace)</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nguy Cơ Gây Thương Tích", content: "Nguy cơ bị thương cao gấp 3 lần nếu không trang bị đầy đủ.", icon: "⚠️", color: "border-red-500" },
              { title: "Sự Cố Nghiêm Trọng", content: "Sai sót nhỏ dẫn đến tai nạn chết người, ảnh hưởng tính mạng.", icon: "🚨", color: "border-red-600" },
              { title: "Chi Phí Tăng Cao", content: "Vi phạm kéo theo bồi thường, bảo hiểm và gián đoạn sản xuất.", icon: "💸", color: "border-orange-500" },
              { title: "Văn Hóa An Toàn", content: "Xây dựng hình ảnh chuyên nghiệp, nâng cao niềm tin khách hàng.", icon: "🤝", color: "border-blue-500" },
              { title: "Gián Đoạn Vận Hành", content: "Sự cố buộc dừng công việc để điều tra, gây chậm tiến độ.", icon: "⏱️", color: "border-gray-500" },
              { title: "Rủi Ro Pháp Lý", content: "Vi phạm OSHA dẫn đến phạt nặng và kiện tụng doanh nghiệp.", icon: "⚖️", color: "border-purple-600" }
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 bg-white rounded-2xl border-t-4 ${risk.color} shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300 text-center">{risk.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 text-center">{risk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{risk.content}</p>
              </motion.div>
            ))}
          </div>

          {/* SLOGAN NHỎ TẬM KẾT SECTION II */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide italic">
              AI giám sát PPE - phát hiện, cảnh báo, bảo vệ an toàn mọi lúc.
            </p>
            <div className="mt-4 w-12 h-1 bg-gray-200 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION III: ỨNG DỤNG */}
<section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
  <div className="w-full max-w-[1600px] mx-auto px-10">
    <div className="grid md:grid-cols-2 gap-24 items-center">

      {/* NỘI DUNG BÊN TRÁI */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <div>
          <h2 className="text-orange-600 font-bold text-xl mb-3 uppercase tracking-[0.25em]">
            III. Được ứng dụng ở đâu?
          </h2>

          <div className="h-1 w-24 bg-orange-500 rounded-full mb-8"></div>

          <p className="text-gray-700 leading-relaxed text-xl">
            Giải pháp <span className="font-bold text-gray-900">PPE Detector</span> lý tưởng cho các ngành công nghiệp đòi hỏi an toàn tuyệt đối:
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              t: "Xây dựng (Construction)",
              c: "Giám sát mũ bảo hộ, áo phản quang, ủng an toàn nhằm ngăn ngừa chấn thương do vật rơi.",
            },
            {
              t: "Dầu khí (Oil & Gas)",
              c: "Kiểm soát quần áo chống cháy (FRC), găng tay, bảo vệ khỏi bỏng và khí độc.",
            },
            {
              t: "Khai thác mỏ (Mining)",
              c: "Giám sát quần áo phản quang, mặt nạ phòng độc trong môi trường thiếu sáng.",
            },
            {
              t: "Sản xuất (Manufacturing)",
              c: "Đảm bảo đeo kính bảo hộ, găng tay và thiết bị bảo vệ thính giác tại xưởng.",
            },
            {
              t: "Logistics & Kho hàng",
              c: "Theo dõi áo phản quang, ủng mũi thép, giảm thiểu tai nạn vận hành xe nâng.",
            },
            {
              t: "Hóa chất",
              c: "Giám sát tuân thủ bảo hộ đặc thù, tránh rủi ro tiếp xúc chất độc hại.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              className="flex gap-5 p-7 bg-orange-50 border border-orange-100 rounded-3xl hover:bg-orange-100 hover:shadow-md transition-all duration-300"
            >
              <div className="mt-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-xl mb-2">
                  {item.t}
                </h4>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.c}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* VIDEO BÊN PHẢI */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

        {/* video card */}
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-white/50 bg-white p-3 backdrop-blur-sm">
          <div className="overflow-hidden rounded-3xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-700"
            >
              <source src={ppeVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* badge */}
        <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-green-600 text-white text-xs tracking-wider font-semibold shadow-lg animate-pulse">
          PPE DETECTED
        </div>
      </motion.div>

    </div>
  </div>
</section>
     {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
<section className="py-24 bg-slate-900 text-white overflow-hidden">
  <div className="w-full max-w-[1600px] mx-auto px-10">
    <div className="grid md:grid-cols-2 gap-24 items-center">

      {/* VIDEO BÊN TRÁI */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>

        {/* video card */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[700px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={ppeWorkflowVideo} type="video/mp4" />
          </video>
        </div>

        {/* badge */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-6 right-6 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        >
          PPE MONITORING ACTIVE
        </motion.div>

        {/* status box */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-gray-800 uppercase tracking-tighter">
            Cách hoạt động - QUỐC VIỆT
          </span>
        </motion.div>
      </motion.div>

      {/* CONTENT BÊN PHẢI */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-orange-400 font-bold text-xl uppercase tracking-[0.25em] mb-3">
            IV. Cách Thức Hoạt động
          </h2>

          <div className="w-24 h-1 bg-orange-500 rounded-full mb-8"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Giải pháp{" "}
            <span className="font-bold text-white">
              AI Camera - PPE Detection
            </span>{" "}
            tự động giám sát an toàn lao động theo thời gian thực, nhận diện
            tình trạng sử dụng đồ bảo hộ (PPE) và gửi cảnh báo tức thì.
            Quy trình vận hành qua các khối chức năng chính:
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "Thu nhận hình ảnh (Capture)",
              desc: "Kết nối trực tiếp camera CCTV/IP hiện có qua giao thức RTSP, thu nhận khung hình liên tục mà không cần thay đổi hạ tầng.",
            },
            {
              step: "02",
              title: "Phát hiện & Phân tích",
              desc: "Sử dụng Pose Detector nhận diện tư thế và PPE Detector phân tích mức độ tuân thủ (mũ, áo, găng tay...) của từng cá nhân.",
            },
            {
              step: "03",
              title: "Ghi nhận dữ liệu",
              desc: "Kết quả được ghi vào DB Log và lưu hình ảnh gốc (Image Raw) phục vụ truy xuất, kiểm tra và báo cáo sau này.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="flex gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {item.step}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* AI Processor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-6 bg-orange-500/10 rounded-3xl border border-orange-500/20 space-y-4"
          >
            <div className="flex items-center gap-3 text-orange-400 font-bold">
              <span className="text-2xl">⚙️</span>
              Xử lý AI & Cảnh báo tức thời
            </div>

            <ul className="grid grid-cols-1 gap-3">
              <li className="flex gap-2 text-sm text-gray-300">
                <span className="text-orange-500">◆</span>
                <span>
                  <strong className="text-white">
                    Body & Face Recognition:
                  </strong>{" "}
                  Xác định người vi phạm và lọc cảnh báo giả (Debounce Logic).
                </span>
              </li>

              <li className="flex gap-2 text-sm text-gray-300">
                <span className="text-orange-500">◆</span>
                <span>
                  <strong className="text-white">
                    Cảnh báo đa kênh:
                  </strong>{" "}
                  Gửi thông báo tức thì qua Dashboard, Email, SMS hoặc Mobile App.
                </span>
              </li>

              <li className="flex gap-2 text-sm text-gray-300">
                <span className="text-orange-500">◆</span>
                <span>
                  <strong className="text-white">Bảo mật:</strong>{" "}
                  Tuân thủ GDPR, tự động làm mờ khuôn mặt để bảo vệ quyền riêng tư.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* SECTION V: TÁC ĐỘNG & LỢI ÍCH CHÍNH (Thu nhỏ và Animation ngẫu nhiên) */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 space-y-3"
          >
            <h2 className="text-orange-600 font-bold text-xl mb-2 uppercase tracking-wider">V. Tác Động & Lợi Ích Chính</h2>
            <div className="h-1 w-20 bg-orange-500 mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Giải pháp
              <span className="font-bold text-gray-900"> AI Camera - PPE Detection </span>
              mang lại giá trị đo lường được trong việc giảm thiểu rủi ro an toàn lao động, tối ưu vận hành và tiết kiệm chi phí.
            </p>
          </motion.div>

          {/* Grid 6 ô lợi ích - Thu nhỏ padding và text */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {[
              { t: "Giảm vi phạm an toàn PPE", c: "Giảm đến 92% các trường hợp không tuân thủ trang bị bảo hộ cá nhân (mũ bảo hộ, áo phản quang, găng tay...) giúp ngăn ngừa tai nạn lao động." },
              { t: "Ngăn chặn tái diễn vi phạm", c: "Nhận diện & phân tích nguyên nhân vi phạm, cung cấp cảnh báo kịp thời, giúp giảm 80% các lỗi PPE lặp lại, hình thành văn hóa an toàn." },
              { t: "Tăng tốc truy vết dữ liệu", c: "Tự động hóa báo cáo PPE, truy vết nhanh từng sự cố, hỗ trợ kiểm toán nội bộ & bên thứ ba nhanh gấp 10 lần so với phương pháp thủ công." },
              { t: "Tiết kiệm chi phí vận hành", c: "Giảm thời gian và nguồn lực cho việc kiểm tra thủ công - góp phần tối ưu ngân sách và nâng cao hiệu quả quản lý." },
              { t: "Giám sát liên tục 24/7", c: "AI hoạt động không gián đoạn, đảm bảo kiểm soát an toàn ngay cả ngoài giờ hành chính hay khu vực khó quan sát." },
              { t: "Phản hồi nhanh", c: "Hệ thống gửi cảnh báo ngay lập tức qua email, SMS hoặc ứng dụng di động, giúp người quản lý nắm bắt và xử lý tình huống kịp thời." }
            ].map((item, idx) => {
              // Hàm tạo hiệu ứng xuất hiện ngẫu nhiên
              const getRandomAnimation = () => {
                const animations = [
                  { initial: { opacity: 0, x: -30, scale: 0.9 }, transition: { type: "spring", stiffness: 100 } }, // Từ trái qua, scale nhỏ
                  { initial: { opacity: 0, y: 30, rotate: -5 }, transition: { delay: 0.1 } }, // Từ dưới lên, hơi xoay
                  { initial: { opacity: 0, scale: 0.5 }, transition: { type: "spring", damping: 10 } }, // Phóng to từ tâm
                  { initial: { opacity: 0, y: -30, x: 20 }, transition: { ease: "easeOut" } } // Từ trên phải xuống
                ];
                return animations[idx % animations.length]; // Chọn hiệu ứng dựa trên index để đảm bảo sự đa dạng nhưng không trùng lặp hoàn toàn
              };

              const randomAnim = getRandomAnimation();

              return (
                <motion.div
                  key={idx}
                  initial={randomAnim?.initial}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={
                    {
                      ...(randomAnim?.transition ?? {}),
                      delay: (randomAnim?.transition?.delay ?? 0) + idx * 0.05,
                      duration: 0.5,
                    } as Transition
                  }
                  whileHover={{
                    y: -4,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                  }}
                  className="bg-white p-6 rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.04)] text-center flex flex-col h-full border border-gray-100"
                >
                  <h4 className="font-bold text-gray-950 text-base mb-2">
                    {item.t}
                  </h4>
                  <p className="text-gray-600 text-[13px] leading-relaxed flex-grow">
                    {item.c}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* PHẦN CUỐI - Thu nhỏ các khối xanh */}

        </div>
      </section>
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hãy đảm bảo tuân thủ PPE 100% Mọi ca làm việc, trên mọi công trường.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Khám phá cách Quốc Việt tích hợp một cách liền mạch giải pháp PPE Detection bằng AI với hệ thống CCTV hiện có của bạn để tự động hóa giám sát an toàn và giảm tối đa sự không tuân thủ liên quan đến đồ bảo hộ cá nhân (PPE) của nhân viên.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('demoForm')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition-all"
            >
              YÊU CẦU DEMO NGAY HÔM NAY
            </motion.button>
          </motion.div>
        </div>
      </section>
      <PageFooter setCurrentPage={setCurrentPage} hideOtherSolutions={true} />
    </div>
  );
}
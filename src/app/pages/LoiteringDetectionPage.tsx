import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  UserSearch,
  Clock,
  ShieldAlert,
  BellRing,
  Facebook,
  Linkedin,
  MapPin,
  Activity
} from 'lucide-react';

import loiteringImg from '@/imports/image_12.jpg';
import loiteringVideo2 from '@/app/asset/demo_4.mp4';
import loiteringVideo from '@/app/asset/demo_3.mp4';

import logoImg from '@/imports/logo.png';

interface LoiteringDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };
const fRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export function LoiteringDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: LoiteringDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Loitering Detection | Quốc Việt";
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
              <div className="p-4 bg-orange-50 rounded-full">
                <UserSearch className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              LOITERING DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Loitering Detection: Giám sát Chủ động Hành vi Nán lại Đáng ngờ trên Công trường với Phát Hiện Lảng Vảng được Hỗ trợ bởi AI. Giải pháp chuyển đổi CCTV hiện có của bạn thành công cụ giám sát hành vi 24/7.
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
                  Hệ thống AI Phát hiện Lảng vảng
                </span>

                là giải pháp giám sát thông minh của{" "}
                <span className="text-orange-600 font-semibold">
                  Quốc Việt
                </span>,
                sử dụng{" "}
                <span className="text-orange-600 font-semibold">
                  AI Video Analytics
                </span>{" "}
                để nhận dạng sự hiện diện kéo dài, bất thường của con người
                trong các khu vực có rủi ro cao, nhạy cảm về vận hành
                hoặc hạn chế truy cập.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Hệ thống tự động phát hiện các hành vi lệch khỏi thời gian
                nán lại bình thường (
                <span className="font-medium text-gray-800">
                  dwell time
                </span>
                ), đồng thời phân biệt thông minh giữa việc chờ đợi hợp lệ
                như nhân viên hoặc khách hàng và những dấu hiệu cho thấy
                ý định xâm nhập, phá hoại hoặc vượt qua quy trình kiểm soát.
              </p>


            </div>

            {/* FEATURES */}
            <div className="space-y-4 text-gray-600 text-[15px]">

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Theo dõi thời gian cư trú (
                  <span className="font-medium">Dwell Time</span>)
                  và cảnh báo khi vượt quá ngưỡng cho phép.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Xác định chính xác các vùng nhạy cảm
                  và khu vực cần giám sát ưu tiên.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <Activity className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Phân tích quỹ đạo di chuyển để phân biệt
                  người đi ngang và hành vi lảng vảng đáng ngờ.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3"
              >
                <BellRing className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Gửi cảnh báo tức thì kèm hình ảnh
                  đến lực lượng an ninh hoặc trung tâm điều hành.
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
                src={loiteringImg}
                alt="Loitering Detection AI"
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
                LOITERING DETECTED
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
              II. Tại sao Phát hiện Lảng Vảng lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto">
              Trong các nơi làm việc năng động hoặc các khu vực bán công cộng,
              hành vi lảng vảng có thể có vẻ vô hại cho đến khi nó leo thang thành
              vi phạm an ninh, trộm cắp hoặc các cuộc gặp gỡ không an toàn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Khu vực điện áp cao & kho chứa",
                content:
                  "Phát hiện sự hiện diện kéo dài gần các khu vực điện áp cao, kho chứa hoặc phòng bảo trì để giảm thiểu rủi ro an toàn.",
                icon: "⚡",
                color: "border-orange-500",
              },
              {
                title: "Lối thoát hiểm & điểm mù",
                content:
                  "Nhận diện cá nhân nhàn rỗi tại lối thoát hiểm khẩn cấp, hàng rào chu vi hoặc các điểm mù ngoài phạm vi giám sát thông thường.",
                icon: "🚪",
                color: "border-red-500",
              },
              {
                title: "Lối vào kiểm soát truy cập",
                content:
                  "Cảnh báo người lạ lảng vảng gần các lối vào kiểm soát truy cập trong giờ nghỉ hoặc ngoài giờ hoạt động.",
                icon: "🔐",
                color: "border-blue-500",
              },
              {
                title: "Di chuyển bất thường",
                content:
                  "Phát hiện các hành vi đi qua đi lại nhiều lần hoặc đứng chờ lâu trong khu vực cấm hoặc chỉ dành cho nhân viên.",
                icon: "🚶",
                color: "border-purple-500",
              },
              {
                title: "Tụ tập gần khu vực nguy hiểm",
                content:
                  "Giám sát sự hình thành đám đông hoặc công nhân nhàn rỗi gần các mối nguy hiểm vận hành hoặc làn xe.",
                icon: "👥",
                color: "border-green-500",
              },
              {
                title: "Hỗ trợ đội ngũ an ninh",
                content:
                  "Giúp đội an ninh không bỏ lỡ tín hiệu quan trọng trong quá trình quá tải camera hoặc luân chuyển nhân sự.",
                icon: "🛡️",
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
                  <source src={loiteringVideo} type="video/mp4" />
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
                LOITERING DETECTED
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
                  Lảng vảng không chỉ là vấn đề an ninh công cộng;
                  đó còn là một rủi ro vận hành ở bất cứ nơi nào có con người
                  và tài sản quan trọng cùng tồn tại.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    t: "Công trường Xây dựng",
                    c: "Công nhân hoặc người ngoài nán lại gần kho công cụ, giàn giáo hoặc khu vực chu vi tạm thời có thể cho thấy dấu hiệu vi phạm quy tắc hoặc xâm nhập.",
                  },
                  {
                    t: "Nhà máy Dầu khí & Lọc dầu",
                    c: "Lảng vảng gần hành lang ống dẫn, bến bốc dỡ hoặc nhà kiểm soát có thể nhanh chóng leo thang thành vi phạm an toàn hoặc an ninh, đặc biệt trong giờ hoạt động thấp.",
                  },
                  {
                    t: "Kho hàng & Logistics",
                    c: "Nán lại bất thường gần cổng giao hàng, khu vực hàng tồn kho giá trị cao hoặc lối thoát hiểm khẩn cấp có thể dẫn đến trộm cắp hoặc gián đoạn vận hành.",
                  },
                  {
                    t: "Đơn vị Sản xuất & Sàn Sản xuất",
                    c: "Hành vi nhàn rỗi gần các khu vực quy trình hạn chế, cánh tay robot hoặc máy móc tiêu thụ điện năng có thể là dấu hiệu của vi phạm an toàn.",
                  },
                  {
                    t: "Sân bay & Trạm Quá cảnh",
                    c: "AI phân biệt việc chờ đợi tự nhiên với các mối đe dọa tiềm ẩn, giúp đội ngũ an ninh phát hiện và can thiệp sớm.",
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
                  <span className="text-white font-semibold">Loitering Detection</span>{" "}
                  sử dụng video analytics của{" "}
                  <span className="text-orange-400 font-semibold">Quốc Việt</span>,
                  tận dụng cơ sở hạ tầng camera hiện có để phát hiện hành vi lảng vảng
                  bất thường theo thời gian thực.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    s: "01",
                    t: "Kết nối (Connect)",
                    d: "AI kết nối trực tiếp với hệ thống IP Camera hoặc CCTV hiện có thông qua giao thức RTSP, không cần thay đổi phần cứng.",
                  },
                  {
                    s: "02",
                    t: "Ghi nhận (Capture)",
                    d: "Hệ thống liên tục phân tích nguồn cấp video trực tiếp và theo dõi thời gian hiện diện của từng cá nhân trong khu vực giám sát.",
                  },
                  {
                    s: "03",
                    t: "AI phát hiện",
                    d: "Tự động gắn cờ khi cá nhân vượt quá ngưỡng thời gian nán lại, đi vòng quanh nhiều lần, đứng yên bất thường hoặc xuất hiện gần khu vực rủi ro cao.",
                  },
                  {
                    s: "04",
                    t: "Kiểm soát (Control)",
                    d: "Ngay khi phát hiện, hệ thống gửi cảnh báo tức thì qua còi, đèn, ứng dụng, SMS hoặc dashboard kèm bằng chứng hình ảnh có dấu thời gian.",
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
                  <source src={loiteringVideo2} type="video/mp4" />
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
              Quốc Việt mang lại trí thông minh hành vi được điều chỉnh
              cho các môi trường công nghiệp rủi ro cao.
            </p>
          </motion.div>


          {/* BENEFIT GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Giảm Sự chậm trễ Phản hồi",
                value: "60%",
                desc: "Cắt giảm độ trễ phản hồi sự cố nhờ cảnh báo theo thời gian thực ngay khi phát hiện hành vi lảng vảng.",
              },
              {
                title: "Tối ưu hóa Giám sát",
                value: "54%",
                desc: "Giảm thời gian dành cho giám sát camera trực tiếp, giúp đội ngũ tập trung vào nhiệm vụ quan trọng hơn.",
              },
              {
                title: "Cải thiện Độ chính xác",
                value: "85%",
                desc: "Tăng độ chính xác phát hiện theo thời gian với ít cảnh báo sai hơn.",
              },
              {
                title: "Giảm Chi phí Vận hành",
                value: "35%",
                desc: "Giảm nhu cầu tuần tra thủ công và chi phí làm thêm giờ cho đội bảo vệ.",
              },
              {
                title: "Nhận thức Hành vi Sớm",
                value: "3x",
                desc: "Tăng hiệu quả phát hiện hành vi bất thường ở giai đoạn đầu nhờ AI phân tích liên tục.",
              },
              {
                title: "Tương thích Rộng rãi",
                value: "98%",
                desc: "Triển khai dễ dàng trên hệ thống CCTV hiện có mà không cần nâng cấp phần cứng.",
              },
              {
                title: "Tăng cường Báo cáo",
                value: "45%",
                desc: "Nâng cao độ chính xác báo cáo sự cố, hỗ trợ điều tra và giảm thiểu rủi ro pháp lý.",
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
                Nhà sản xuất Thụy Điển Ngăn chặn 80+ Rủi ro Lảng Vảng
              </h2>

              <div className="text-orange-100 text-lg relative z-10">
                <span className="font-semibold">Ngành:</span> Sản xuất (Manufacturing)
                <span className="mx-4">•</span>
                <span className="font-semibold">Địa điểm:</span> Thụy Điển (Sweden, Europe)
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
                    Nhà máy thường xuyên xảy ra các sự cố lảng vảng trái phép
                    gần bến bốc dỡ, lối thoát hiểm và các điểm vào phía sau.
                    Những điểm mù bị bỏ qua này tạo ra rủi ro về xâm nhập,
                    phá hoại và giả mạo hàng tồn kho.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Giải pháp của Quốc Việt
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Tích hợp mô-đun{" "}
                    <span className="font-semibold text-orange-600">
                      Phát hiện Lảng Vảng
                    </span>{" "}
                    vào mạng lưới camera hiện có để giám sát hành vi liên tục,
                    phân tích dwell time và phát hiện các dấu hiệu đáng ngờ
                    theo thời gian thực.
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
                    80+
                  </div>

                  <p className="text-gray-800 text-lg font-medium">
                    Sự cố lảng vảng được phát hiện sớm trong 3 tháng
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
                    59%
                  </div>

                  <p className="text-gray-800 text-lg font-medium">
                    Cải thiện tốc độ phản ứng nhờ cảnh báo AI
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
                Đừng để hành vi lảng vảng biến thành vi phạm an ninh.
              </h2>

              <p className="text-gray-700 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Khám phá cách Quốc Việt Loitering Detection có thể cải thiện độ chính xác an ninh của bạn tới 85% và giảm độ trễ phản hồi lên tới 60%.
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

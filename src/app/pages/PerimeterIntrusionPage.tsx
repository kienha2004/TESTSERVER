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
  Fence,
  MoveHorizontal,
  Navigation
} from 'lucide-react';

import fenceImg from '@/imports/image_9.jpg';
import perimeterVideo from '@/app/asset/demo_9.mp4';
import perimeterVideo2 from '@/app/asset/demo_10.mp4';
import logoImg from '@/imports/logo.png';

interface PerimeterIntrusionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };
const fRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export function PerimeterIntrusionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: PerimeterIntrusionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Perimeter Intrusion | Quốc Việt";
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
                <ShieldAlert className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              PERIMETER INTRUSION DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Phát Hiện Xâm Nhập Bất Hợp Pháp: Củng cố Ranh giới Công trường bằng Video Analytics AI. Giải pháp của Quốc Việt tự động giám sát ranh giới, biến camera hiện có thành hệ thống cảnh báo xâm nhập 24/7.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE LEFT */}
          <motion.div
            {...fLeft}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
              <ImageWithFallback
                src={fenceImg}
                alt="Unauthorized Intrusion Detection AI"
                className="w-full h-auto object-cover"
              />

              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-bounce">
                ALERT: PERIMETER BREACH
              </div>
            </div>

            <div className="absolute -top-5 -left-5 w-full h-full bg-red-50 rounded-3xl -z-0"></div>
          </motion.div>


          {/* TEXT RIGHT */}
          <motion.div
            {...fRight}
            className="space-y-6"
          >
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  Phát Hiện Xâm Nhập Bất Hợp Pháp
                  <span className="text-lg font-semibold text-gray-700 block mt-1">
                    (Unauthorized Intrusion Detection)
                  </span>
                </span>

                là một giải pháp dựa trên{" "}
                <span className="font-semibold text-orange-600">
                  Computer Vision
                </span>{" "}
                được xây dựng để phát hiện và phản ứng với các nỗ lực truy cập trái
                phép tại ranh giới công trường theo thời gian thực.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[15px]">
              <div className="flex items-start gap-3">
                <MoveHorizontal className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  <span className="font-semibold text-gray-800">Công nghệ:</span>{" "}
                  Được xây dựng trên Quốc Việt proprietary AI video analytics.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Fence className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  <span className="font-semibold text-gray-800">Hoạt động:</span>{" "}
                  Hệ thống khai thác các camera IP hiện có để tạo ra một lớp bảo mật
                  ảo, liên tục phân tích cảnh quay trực tiếp để gắn cờ các chuyển
                  động đáng ngờ, giả mạo hàng rào, hoặc các nỗ lực xâm nhập.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  <span className="font-semibold text-gray-800">Mục tiêu:</span>{" "}
                  Giảm sự phụ thuộc vào các cuộc tuần tra thủ công và đảm bảo khả
                  năng hiển thị ngoài giờ làm việc, đặc biệt tại các khu vực rủi ro
                  cao quản lý các hoạt động nhạy cảm và cơ sở hạ tầng quan trọng.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <BellRing className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Giải pháp này củng cố cảnh giác tại chỗ, giúp các đội ngũ chủ động
                  ngăn chặn các vụ xâm nhập, theo dõi mọi nỗ lực vi phạm bằng bằng
                  chứng và duy trì sự tuân thủ trong các môi trường nhạy cảm.
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
              II. Tại sao Phát hiện Xâm nhập Chu vi lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto">
              Bảo vệ chu vi trong các ngành công nghiệp rủi ro cao như điện tử,
              dược phẩm và tiện ích vẫn phức tạp. Vi phạm chu vi gây ra rủi ro
              nghiêm trọng đối với tính liên tục của hoạt động, an ninh tài sản
              và sự tuân thủ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title:
                  "Xâm nhập của con người không được chú ý trong quá trình chuyển ca hoặc vào đêm khuya.",
                icon: "🚶",
                color: "border-red-500",
              },
              {
                title:
                  "Điểm mù do ánh sáng kém, vật cản hoặc vị trí camera.",
                icon: "📷",
                color: "border-orange-500",
              },
              {
                title:
                  "Tháo dỡ hàng rào tạm thời trong các hoạt động logistics hoặc bảo trì.",
                icon: "🚧",
                color: "border-yellow-500",
              },
              {
                title:
                  "Giả mạo vật lý đối với cổng, khóa hoặc rào chắn.",
                icon: "🔓",
                color: "border-blue-500",
              },
              {
                title:
                  "Các lối vào phụ bị bỏ quên, điểm truy cập tiện ích, cửa dịch vụ hoặc lối thoát hiểm.",
                icon: "🚪",
                color: "border-purple-500",
              },
              {
                title:
                  "Nỗ lực xâm nhập bị che giấu bởi bóng tối, thời tiết khắc nghiệt, hoặc vật cản thị giác.",
                icon: "🌙",
                color: "border-green-500",
              },
              {
                title:
                  "Phản ứng chậm trễ do phụ thuộc vào quy trình xem xét cảnh quay thủ công.",
                icon: "⏳",
                color: "border-pink-500",
              },
              {
                title:
                  "Thiếu cảnh báo tức thì phát hiện chuyển động bất thường dọc theo chu vi công trường.",
                icon: "🚨",
                color: "border-indigo-500",
              },
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`bg-white p-6 rounded-3xl border-t-4 ${risk.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{risk.icon}</div>

                <h3 className="font-bold text-gray-900 text-sm leading-relaxed">
                  {risk.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* THÁCH THỨC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-14 bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-8 max-w-6xl mx-auto text-left shadow-sm"
          >
            <h3 className="text-orange-600 font-bold text-lg mb-3">
              Thách thức
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Ngay cả các công trường được bảo vệ tốt cũng thường gặp phải các sơ
              suất an ninh do bố cục năng động, giám sát hạn chế và các phương pháp
              giám sát lỗi thời. AI video analytics cải thiện nhận thức tình huống
              bằng cách phân tích các mẫu hành vi theo thời gian, giúp xác định sự
              hiện diện đáng ngờ sớm.
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

                <div className="h-1 w-20 bg-orange-500 mb-6"></div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Các vụ xâm nhập chu vi tồn tại ở bất cứ nơi nào ranh giới vật lý gặp
                  hoạt động. Phát hiện kịp thời là rất quan trọng để ngăn chặn các
                  gián đoạn lớn trong các cơ sở đòi hỏi kiểm soát chặt chẽ và giám sát
                  không bị gián đoạn.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    t: "Công trường Xây dựng",
                    c: "AI giám sát các đường chu vi trong thời gian thực, phát hiện chuyển động đáng ngờ, vi phạm truy cập hoặc giả mạo.",
                  },
                  {
                    t: "Cơ sở Dầu khí (Refineries, Depots, Storage)",
                    c: "Giám sát bằng AI liên tục theo dõi các vi phạm hoặc giả mạo, cho phép phản ứng nhanh trước khi các sự cố leo thang thành hậu quả về môi trường hoặc vận hành.",
                  },
                  {
                    t: "Nhà máy Bán dẫn",
                    c: "AI video analytics giám sát các đường hàng rào và khu vực truy cập, xác định chuyển động hoặc giả mạo ngay lập tức, đặc biệt hữu ích trong giờ nghỉ hoặc khu vực tầm nhìn thấp.",
                  },
                  {
                    t: "Trạm Biến áp Tiện ích & Lưới điện",
                    c: "AI liên tục giám sát các khu vực bên ngoài, phát hiện nỗ lực xâm nhập hoặc giả mạo theo thời gian thực.",
                  },
                  {
                    t: "Kho hàng Logistics & Trung tâm Thực hiện Đơn hàng",
                    c: "Giải pháp PID giám sát các khu vực bốc dỡ, lối ra và hàng rào trong thời gian thực để ngăn chặn trộm cắp và gián đoạn hoạt động.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-all"
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

            {/* VIDEO RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                  <source src={perimeterVideo} type="video/mp4" />
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
                PERIMETER ALERT ACTIVE
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION IV: QUY TRÌNH VẬN HÀNH */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* VIDEO LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
                  <source src={perimeterVideo2} type="video/mp4" />
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
                className="absolute top-8 right-8 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                PERIMETER ALERT ACTIVE
              </motion.div>
            </motion.div>

            {/* TEXT RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
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
                  Giải pháp <span className="text-orange-400 font-bold">Perimeter Intrusion Detection</span> sử dụng AI video analytics của <span className="text-orange-400 font-bold">Quốc Việt</span>,
                  tận dụng cơ sở hạ tầng camera hiện có để phát hiện các hành vi xâm nhập trái phép và hỗ trợ ngăn ngừa rủi ro chủ động theo thời gian thực.
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
                    d: "Hệ thống liên tục phân tích nguồn cấp video trực tiếp để phát hiện các dấu hiệu liên quan đến hành vi xâm nhập hoặc vượt rào.",
                  },
                  {
                    s: "03",
                    t: "Phân tích AI",
                    d: "Tự động phát hiện sự hiện diện của con người dọc theo ranh giới, nhận diện các hành vi leo trèo hoặc cố ý tác động vào hàng rào bảo vệ.",
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
                      <h4 className="text-white font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors duration-300">
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

          </div>
        </div>
      </section>
      {/* SECTION V: TÁC ĐỘNG VÀ LỢI ÍCH CHÍNH */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">

          <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
            V. Tác động và Lợi ích Chính
          </h2>

          <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>

          <p className="text-gray-700 text-lg max-w-5xl mx-auto mb-16 leading-relaxed">
            <span className="font-semibold text-gray-900">PID của Quốc Việt</span>{" "}
            cung cấp trí tuệ an ninh thích ứng, được hỗ trợ bởi{" "}
            <span className="text-orange-600 font-semibold">AI</span>, mang lại
            kết quả có thể đo lường được trong hoạt động và tuân thủ.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: "⚡",
                title: "Tăng Tốc độ Phản hồi",
                content:
                  "Tăng tốc phản ứng với các vụ xâm nhập chu vi lên tới 80% thông qua các cảnh báo AI theo thời gian thực.",
              },
              {
                icon: "⏱️",
                title: "Giảm Độ trễ Vận hành",
                content:
                  "Ngăn ngừa sự chậm trễ vận hành 45% bằng cách xác định các nỗ lực truy cập trái phép sớm.",
              },
              {
                icon: "🎯",
                title: "Độ chính xác Cao",
                content:
                  "Đạt độ chính xác phát hiện trên 95% trong các môi trường phức tạp, bao gồm điều kiện ánh sáng yếu và vật cản thị giác.",
              },
              {
                icon: "👁️",
                title: "Tăng cường Nhận thức Tình huống",
                content:
                  "Tăng cường nhận thức tình huống trên toàn công trường lên 10 lần với giám sát 24/7.",
              },
              {
                icon: "🛡️",
                title: "Giảm Sự cố Vi phạm",
                content:
                  "Giảm 48% các sự cố vi phạm trong bốn tháng (Dựa trên Nghiên cứu điển hình tại Tokyo).",
              },
              {
                icon: "🔗",
                title: "Dễ dàng Tích hợp",
                content:
                  "Tích hợp với CCTV hiện có, yêu cầu ít nỗ lực cài đặt hơn 5 lần so với các hệ thống truyền thống.",
              },
              {
                icon: "📋",
                title: "Sẵn sàng Kiểm toán",
                content:
                  "Tăng cường tính sẵn sàng kiểm toán 50% với các cảnh báo có dấu thời gian và nhật ký kỹ thuật số.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3 className="font-bold text-gray-900 text-lg mb-3">
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              VI. Case Study: Tập đoàn Bán dẫn Tokyo
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>

            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              Giải pháp{" "}
              <span className="font-semibold text-orange-600">
                Phát hiện Xâm nhập Chu vi
              </span>{" "}
              của <span className="font-semibold text-gray-900">Quốc Việt</span>{" "}
              giúp doanh nghiệp tăng cường bảo mật và giảm đáng kể các sự cố vi phạm.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Industry & Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">🏭</div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Ngành & Địa điểm
              </h3>

              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">Ngành:</span> Sản xuất Bán dẫn.
                <br />
                <span className="font-semibold">Địa điểm:</span> Tokyo, Nhật Bản.
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">⚠️</div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Vấn đề
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Một nhà sản xuất bán dẫn hàng đầu tại Tokyo phải đối mặt với các vụ
                vi phạm ranh giới không thường xuyên, từ truy cập trái phép vào đêm
                khuya đến hoạt động đáng ngờ gần các khu vực hạn chế.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">🤖</div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Giải pháp của Quốc Việt
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Công ty đã triển khai hệ thống{" "}
                <span className="font-semibold text-orange-600">
                  Phát hiện Xâm nhập Chu vi
                </span>
                , tận dụng mạng lưới CCTV hiện có để xác định sự hiện diện bất thường
                gần các đường ranh giới và kích hoạt cảnh báo theo thời gian thực.
              </p>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-orange-50 p-8 rounded-3xl shadow-lg border border-orange-200"
            >
              <div className="text-4xl mb-4">📈</div>

              <h3 className="font-bold text-orange-700 text-lg mb-3">
                Tác động của Quốc Việt
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Trong vòng{" "}
                <span className="font-bold text-orange-600">
                  bốn tháng
                </span>
                , công ty đã giảm{" "}
                <span className="font-bold text-orange-600">
                  48% các sự cố vi phạm
                </span>
                . Việc triển khai cũng hỗ trợ tầm nhìn{" "}
                <span className="font-semibold">Nhà máy Thông minh</span> theo{" "}
                <span className="font-semibold">Society 5.0</span>.
              </p>
            </motion.div>

          </div>
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

import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import fenceImg from '@/imports/image_9.jpg';
import intrudeVideo2 from '@/app/asset/demo_13.mp4';
import intrudeVideo from '@/app/asset/demo_14.mp4';
import logoImg from '@/imports/logo.png';
import { ShieldAlert, Lock, Eye, BellRing } from 'lucide-react';
import { PageFooter } from '../components/PageFooter';

interface IntrusionDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function IntrusionDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: IntrusionDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Intrusion Detection | Quốc Việt";
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
      <div className="bg-white py-16 border-b border-gray-50 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-red-50 p-4 rounded-full animate-pulse">
                <ShieldAlert className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              UNAUTHORIZED INTRUSION DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Unauthorized Intrusion / Danger Zone Entry Detection: Tăng cường an ninh và an toàn bằng cách tự động giám sát các khu vực cấm (Red Zone) và khu vực nguy hiểm, đưa ra cảnh báo tức thì ngay khi phát hiện vi phạm.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE LEFT */}
          <motion.div {...fLeft} className="relative order-1 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
              <ImageWithFallback
                src={fenceImg}
                alt="Danger Zone Intrusion Detection"
                className="w-full h-auto object-cover"
              />

              {/* red danger border */}
              <div className="absolute top-0 left-0 w-full h-full border-2 border-red-500/50 pointer-events-none"></div>

              {/* scanning line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-600 animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>

              {/* alert badge */}
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-bounce">
                ALERT: DANGER ZONE
              </div>
            </div>

            {/* glow background */}
            <div className="absolute -top-5 -left-5 w-full h-full bg-red-50 rounded-3xl -z-0"></div>
          </motion.div>

          {/* TEXT RIGHT */}
          <motion.div {...fRight} className="space-y-6 order-2 md:order-2">
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  Phát Hiện Xâm Nhập Trái Phép / Vào Khu Vực Nguy Hiểm
                </span>

                là mô-đun an toàn nâng cao của{" "}
                <span className="text-orange-600 font-semibold">
                  Quốc Việt
                </span>
                , ứng dụng công nghệ{" "}
                <span className="font-semibold">
                  Computer Vision
                </span>{" "}
                để giám sát theo thời gian thực các{" "}
                <span className="font-semibold">
                  khu vực nguy hiểm (Danger Zone)
                </span>{" "}
                và{" "}
                <span className="font-semibold">
                  khu vực hạn chế (Restricted Zone)
                </span>
                , giúp phát hiện xâm nhập trái phép và ngăn ngừa tai nạn lao động trước khi xảy ra.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[15px]">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Tự động phát hiện các lỗ hổng, hàng rào bị thiếu hoặc vùng bảo vệ
                  không đầy đủ xung quanh khu vực nguy hiểm.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Phân biệt công nhân hợp lệ thông qua nhận dạng màu sắc{" "}
                  <span className="font-medium">
                    PPE (Personal Protective Equipment)
                  </span>{" "}
                  để giảm thiểu cảnh báo sai.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Quản lý đồng thời nhiều khu vực nguy hiểm trên một nền tảng tập trung,
                  dễ dàng cấu hình và giám sát.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <BellRing className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Cảnh báo tức thì qua còi, đèn báo và thông báo đến điện thoại hoặc
                  máy tính khi phát hiện xâm nhập trái phép.
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
              II. Tại sao Phát hiện Khu vực Nguy hiểm lại quan trọng?
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto">
              Việc xâm nhập vào khu vực nguy hiểm là nguyên nhân gây ra một phần đáng kể
              các tai nạn tại công trường xây dựng, dẫn đến tổn thất lớn về con người
              và tài chính.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "10% tai nạn xây dựng",
                content:
                  "Tai nạn do xâm nhập vào khu vực nguy hiểm chiếm khoảng 10% tổng số sự cố tại công trường.",
                icon: "⚠️",
                color: "border-red-500",
              },
              {
                title: "1 triệu USD tổn thất",
                content:
                  "Chi phí ước tính lên đến 1 triệu USD cho mỗi thương tích gây tử vong, chưa kể ảnh hưởng uy tín doanh nghiệp.",
                icon: "💰",
                color: "border-orange-500",
              },
              {
                title: "80% giám sát thủ công",
                content:
                  "Ngay cả khi có CCTV tại khu vực nguy hiểm, phần lớn vẫn phụ thuộc vào con người theo dõi màn hình.",
                icon: "📹",
                color: "border-blue-500",
              },
              {
                title: "Ngăn chặn trước khi xảy ra",
                content:
                  "Các đội EHS cần dữ liệu và cảnh báo thời gian thực để phòng ngừa tai nạn trước khi sự cố phát sinh.",
                icon: "🛡️",
                color: "border-purple-500",
              },
              {
                title: "Bảo vệ tính mạng công nhân",
                content:
                  "Phát hiện sớm giúp giảm thiểu rủi ro thương tích và nâng cao mức độ an toàn tại công trường.",
                icon: "👷",
                color: "border-yellow-500",
              },
              {
                title: "Tiết kiệm thời gian & chi phí",
                content:
                  "Giải pháp Danger Zone Alert của Quốc Việt giúp doanh nghiệp giảm tổn thất, tiết kiệm chi phí vận hành.",
                icon: "⚡",
                color: "border-green-500",
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

            {/* TEXT LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                III. Ứng dụng Giải pháp Cần thiết nhất ở đâu?
              </h2>

              <div className="h-1 w-20 bg-orange-500 mb-6"></div>

              <div className="space-y-5">
                {[
                  {
                    t: "Công trường Xây dựng",
                    c: "Ngăn chặn xâm nhập vào các khu vực đang hoạt động hoặc các hố mở/khu vực không có hàng rào.",
                  },
                  {
                    t: "Nhà máy & Cơ sở Sản xuất",
                    c: "Kiểm soát quyền truy cập vào các khu vực cấm hoặc khu vực máy móc có quy trình nhạy cảm.",
                  },
                  {
                    t: "Dầu khí & Năng lượng",
                    c: "Giám sát các khu vực bị hạn chế như giàn khoan, khu vực dễ cháy hoặc trạm biến áp, giảm thiểu rủi ro.",
                  },
                  {
                    t: "Kiểm soát Khu vực Chung",
                    c: "Phát hiện xâm nhập trái phép vào khu vực hạn chế, truy cập trong giờ không làm việc, hoặc vào khu vực nguy hiểm mà không có giấy phép (PTW).",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ x: 6 }}
                    className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 transition-all shadow-sm hover:shadow-md"
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
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] shadow-2xl border-4 border-white overflow-hidden bg-gray-100 p-3">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[500px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={intrudeVideo2} type="video/mp4" />
                </video>
              </div>

              {/* floating badge */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-6 right-6 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                INTRUSION ALERT
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
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
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 p-4">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={intrudeVideo} type="video/mp4" />
                </video>
              </div>

              {/* floating alert */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute top-8 right-8 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg"
              >
                LIVE: INTRUSION DETECTION
              </motion.div>

              {/* glow */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-red-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
            </motion.div>


            {/* TEXT RIGHT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-orange-400 font-bold text-xl uppercase tracking-wider mb-2">
                  IV. Cách Thức Hoạt động (Computer Vision)
                </h2>

                <div className="h-1 w-24 bg-orange-500 mb-6 rounded-full"></div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Giải pháp này chuyển đổi CCTV thông thường thành một hệ thống
                  cảnh báo tình huống nguy hiểm chủ động, sử dụng <span className="text-white font-semibold">video analytics</span>.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    s: "01",
                    t: "Kết nối (Connect)",
                    d: "Mô-đun tích hợp dễ dàng với hệ thống CCTV, Camera hoặc IP Camera hiện có của bạn qua RTSP. Không cần thêm thiết bị cảm biến.",
                  },
                  {
                    s: "02",
                    t: "Ghi nhận (Capture)",
                    d: "Hệ thống phân tích video trực tiếp để tự động phát hiện vi phạm. Hệ thống hỗ trợ đa khu vực trong một FOV, tự động cảnh báo về hàng rào hoặc rào chắn bị thiếu quanh khu vực nguy hiểm.",
                  },
                  {
                    s: "03",
                    t: "Kiểm soát (Control)",
                    d: "Kích hoạt Cảnh báo Tức thời Toàn diện: Báo động âm thanh/ánh sáng tại chỗ trong 1 giây, gửi thông báo di động tới cán bộ an toàn và cập nhật Dashboard thời gian thực.",
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
            </div>

          </div>
        </div>
      </section>

      {/* SECTION V: TÁC ĐỘNG VÀ LỢI ÍCH CHÍNH */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2"
          >
            V. Tác động và Lợi ích Chính
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-orange-500 mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            <span className="font-semibold text-gray-900">Quốc Việt</span> cung cấp{" "}
            <span className="font-semibold text-orange-600">
              Phân tích Dự đoán (Predictive Analytics)
            </span>{" "}
            dựa trên dữ liệu thu thập được để hỗ trợ các quyết định an toàn.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {[
              ["🚨", "Phản hồi tức thì", "Gửi cảnh báo bằng ánh sáng & âm thanh trong 1 giây đến công nhân gần khu vực nguy hiểm."],
              ["📊", "Phân tích Dự đoán", "Dữ liệu thu thập được cho biết cần thực hiện các cuộc trò chuyện an toàn nào và ở đâu để ngăn chặn sự cố trước khi chúng xảy ra."],
              ["☁️", "Quản lý Dữ liệu", "Tất cả hồ sơ về việc không tuân thủ trong lịch sử sẽ được lưu tự động trên AI cloud."],
              ["🎥", "Điều tra Tai nạn", "Các video clip về các sự kiện chưa từng có sẽ được tải lên đám mây để phân tích điều tra tai nạn."],
              ["🦺", "Tăng cường Độ chính xác", "AI có khả năng phân biệt công nhân dựa trên nhận dạng màu PPE để ngăn chặn cảnh báo sai."],
            ].map(([icon, title, desc], idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{icon}</div>
                <p className="font-bold text-gray-900">{title}</p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* SECTION  KÊU GỌI HÀNH ĐỘNG */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Đừng để giám sát thủ công đặt công nhân của bạn vào tình thế rủi ro.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Bắt đầu bản dùng thử 14 ngày miễn phí Hệ thống Cảnh báo Tình huống Nguy hiểm của Quốc Việt để biến CCTV của bạn thành công cụ bảo vệ chủ động.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('demoForm')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition-all"
            >
              ĐẶT LỊCH DEMO NGAY HÔM NAY!
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter setCurrentPage={setCurrentPage} hideOtherSolutions={true} />
    </div>
  );
}

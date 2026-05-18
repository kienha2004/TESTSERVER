import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import edgeImg from '../../imports/image_2.jpg';

import logoImg from '../../imports/logo.png';

import edgeWarningVideo from '@/app/asset/demo_24.mp4';
import edgeWarningVideo2 from '@/app/asset/demo_23.mp4';
import { Facebook, Linkedin } from 'lucide-react';

interface UnguardedEdgeDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function UnguardedEdgeDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: UnguardedEdgeDetectionPageProps) {
  const hazards = [
    "Mép Sàn Tầng Cao", "Rìa Mái Nhà", "Cạnh Giàn Giáo",
    "Hố Thang Máy", "Khu Vực Đào Móng", "Bờ Vực Công Trường"
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Unguarded Edge | Quốc Việt";
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
        {/* Hero Section from Image 1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6 text-6xl">🚧</div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            UNGUARDED EDGE DETECTION
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Phát hiện khu vực có nguy cơ rơi ngã. <br />
            Định nghĩa lại an toàn làm việc trên cao bằng công nghệ AI CCTV.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-10">

          {/* CỘT TRÁI: NỘI DUNG CHI TIẾT (Image 1 Section I) */}
          <motion.div {...fLeft} className="space-y-8">
            <section>
              <h2 className="text-orange-600 font-bold text-xl mb-2 uppercase tracking-wider">I. Giải pháp là gì?</h2>
              <div className="h-1 w-20 bg-orange-500 mb-6"></div>

              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                <p>
                  <span className="font-bold">Unguarded Edge Detection (UED)</span>  là giải pháp giám sát an toàn trên cao dựa trên thị giác máy tính thông minh (AI Computer Vision) do <span className="font-bold text-gray-900">QUỐC VIỆT</span> phát triển, giúp tự động phát hiện và cảnh báo các mép sàn, khu vực làm việc trên cao chưa được bảo vệ (unguarded edges), những điểm có nguy cơ té ngã trong quá trình thi công.
                </p>
                <p>
                  Hệ thống hoạt động theo thời gian thực (real-time) thông qua camera CCTV, giúp doanh nghiệp chủ động kiểm soát rủi ro 24/7, thay vì chỉ giám sát thụ động như trước đây.
                </p>
                <p>
                  UED biến hệ thống camera thông thường thành một nền tảng an toàn thông minh, tập trung vào việc ngăn ngừa tai nạn ngã từ trên cao (Fall-from-Height - FFH) - một trong những nguyên nhân hàng đầu gây tai nạn lao động trong ngành xây dựng và công nghiệp nặng.
                </p>
              </div>


            </section>
          </motion.div>

          {/* CỘT PHẢI: HÌNH ẢNH MINH HỌA */}
          <motion.div {...fRight} className="sticky top-24">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-[12px] border-gray-50 relative z-10">
                <ImageWithFallback
                  src={edgeImg}
                  alt="Unguarded Edge Detection AI"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay AI visualization */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red-500 w-32 h-64 opacity-60 animate-pulse">
                  <div className="absolute -top-8 left-0 bg-red-500 text-white text-[10px] px-2 py-1 font-bold">DANGER ZONE</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-orange-100 rounded-3xl -z-0"></div>
            </div>
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
            <h2 className="text-orange-600 font-bold text-xl mb-2 uppercase tracking-wider">II. Tại sao rủi ro té ngã trên cao vẫn là thách thức lớn?</h2>
            <div className="h-1 w-20 bg-orange-500 mb-6"></div>
            <p className="text-gray-700 text-lg max-w-4xl leading-relaxed">
              Ngay cả trong các công trường tuân thủ an toàn nghiêm ngặt, sự cố rơi ngã từ trên cao vẫn là một thách thức nan giải. Các nguy cơ công trình không được bảo vệ là mối nguy hiểm chính, bởi hiện trạng của chúng liên tục thay đổi theo tiến độ và rất khó để giám sát thủ công một cách hiệu quả.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Công Trường Luôn Biến Đổi", content: "Các biện pháp an toàn (như rào chắn) phải liên tục di chuyển để phục vụ tiến độ công việc, tạo ra các khoảng hở nguy hiểm tạm thời tại nhiều vị trí như mép sàn, khu vực giàn giáo.", icon: "🏗️", color: "border-blue-500" },
              { title: "Thiếu Rào Chắn - Gỡ Bỏ Tạm Thời", content: "Rào chắn bảo vệ thường bị tháo dỡ trong quá trình vận chuyển vật liệu hoặc thi công, nhưng không phải lúc nào cũng được lắp đặt lại ngay lập tức, tạo ra những \"cái bẫy\" bất ngờ.", icon: "🚧", color: "border-orange-500" },
              { title: "Hạn Chế Của Giám Sát Thủ Công", content: "Giám sát thủ công không thể bao quát 24/7, dễ bị ảnh hưởng bởi yếu tố chủ quan (lỗi con người) và tầm nhìn bị che khuất, đặc biệt tại các công trường có quy mô lớn, phức tạp.", icon: "👁️", color: "border-gray-400" },
              { title: "Hành Vi Không An Toàn", content: "Dưới áp lực tiến độ, công nhân đôi khi tiếp cận mép sàn, mái, hố thang máy hoặc khu vực bốc dỡ mà không nhận thức đầy đủ về rủi ro - biến những sai sót nhỏ thành hậu quả nghiêm trọng.", icon: "⚠️", color: "border-red-500" },
              { title: "Thiếu Cảnh Báo Sớm", content: "Các hệ thống giám sát hiện nay vẫn thiên về phản ứng hơn là phòng ngừa. Khoảng trễ giữa việc nhận biết nguy cơ và hành động phòng ngừa vẫn là điểm yếu khi thiếu một cơ chế phát hiện nguy cơ xảy ra tai nạn theo thời gian thực.", icon: "⏱️", color: "border-orange-500" }
            ].map((risk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 bg-white rounded-2xl border-t-4 ${risk.color} shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-300">{risk.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 text-center">{risk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{risk.content}</p>
              </motion.div>
            ))}

            {/* 6th Slot: Text Block from Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8"
            >
              <p className="text-xl font-medium text-gray-800 text-center italic">
                AI giám sát UED - phát hiện, cảnh báo, bảo vệ an toàn mọi lúc.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION III: ĐƯỢC ỨNG DỤNG Ở ĐÂU? */}
      <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-24 items-center">

            {/* VIDEO LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
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
                    <source src={edgeWarningVideo2} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* badge */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-red-600 text-white text-xs tracking-wider font-semibold shadow-lg animate-pulse">
                EDGE RISK ALERT
              </div>
            </motion.div>

            {/* CONTENT RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              {/* TITLE */}
              <div>
                <h2 className="text-orange-600 font-bold text-xl uppercase tracking-[0.25em] mb-3">
                  III. Được ứng dụng ở đâu?
                </h2>

                <div className="w-24 h-1 bg-orange-500 rounded-full mb-8"></div>

                <p className="text-gray-700 leading-relaxed text-xl">
                  Giải pháp{" "}
                  <span className="font-bold text-gray-900">
                    Unguarded Edge Detection (UED)
                  </span>{" "}
                  cần thiết ở bất cứ nơi nào công việc diễn ra trên cao hoặc gần
                  các khu vực hở nguy hiểm.
                </p>
              </div>

              {/* LIST */}
              <div className="space-y-6">
                {[
                  {
                    t: "Xây dựng (Construction)",
                    c: "Giám sát mép sàn, giàn giáo, mái nhà và khu vực hở chưa được rào chắn; cảnh báo sớm khi có người tiếp cận vùng nguy hiểm.",
                  },
                  {
                    t: "Dầu khí (Oil & Gas)",
                    c: "Phát hiện các vùng mép cao nguy hiểm tại khu vực giàn khoan, bồn chứa hoặc hệ thống đường ống; hỗ trợ đảm bảo an toàn bảo trì.",
                  },
                  {
                    t: "Khai thác mỏ (Mining)",
                    c: "Giám sát khu vực làm việc có địa hình phức tạp, phát hiện các mép nguy hiểm quanh khu vực khai thác hoặc bốc dỡ vật liệu.",
                  },
                  {
                    t: "Nhà máy chế tạo (Manufacturing)",
                    c: "Ứng dụng trong nhà máy nhiều tầng, bồn chứa, silo, nơi tiềm ẩn nguy cơ ngã do trượt hoặc thiếu rào chắn tạm thời.",
                  },
                  {
                    t: "Năng lượng tái tạo",
                    c: "Phát hiện và cảnh báo các khu vực mép sàn, mép bệ nâng chưa được bảo vệ trong quá trình lắp đặt và bảo trì.",
                  },
                  {
                    t: "Hạ tầng & Tiện ích",
                    c: "Giám sát khu vực trên cao tại trạm điện, cầu, đường sắt, bồn chứa, đảm bảo an toàn cho đội thi công và vận hành.",
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

          </div>
        </div>
      </section>

      {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-24 items-center">

            {/* TEXT LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
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
                  <span className="text-orange-400 font-bold">
                    Unguarded Edge Detection (UED)
                  </span>{" "}
                  là giải pháp tự động giám sát an toàn lao động theo thời gian thực,
                  giúp nhận diện{" "}
                  <span className="text-white font-semibold">
                    mối nguy té ngã trên cao
                  </span>{" "}
                  thông qua AI Computer Vision.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    s: "01",
                    t: "Thu nhận hình ảnh (Capture)",
                    d: "Hệ thống kết nối trực tiếp với camera CCTV/IP hiện có qua giao thức RTSP, thu nhận khung hình liên tục từ nhiều nguồn mà không cần thay đổi hạ tầng.",
                  },
                  {
                    s: "02",
                    t: "Phát hiện & Phân tích (Detect & Analyze)",
                    d: "AI phân tích hình ảnh để phát hiện các mối nguy té ngã trên cao, nhận diện các khu vực không được bảo vệ (unguarded edges) và theo dõi hành vi công nhân tiếp cận gần các khu vực này.",
                  },
                  {
                    s: "03",
                    t: "Ghi nhận dữ liệu (Log & Image Storage)",
                    d: "Kết quả được ghi vào cơ sở dữ liệu (DB Log) và lưu hình ảnh gốc (Image Raw) để phục vụ truy xuất, kiểm tra và đánh giá sau này.",
                  },
                  {
                    s: "04",
                    t: "Xử lý AI (AI Processor)",
                    d: "Body Analyzer và Face Recognition xác định người thật và khuôn mặt nhân viên có nguy cơ. Logic Debounce giúp loại bỏ cảnh báo giả hoặc cảnh báo lặp lại, đồng thời DB Storage lưu trữ dữ liệu phân tích dài hạn.",
                  },
                  {
                    s: "05",
                    t: "Cảnh báo tức thời (Instant Alert)",
                    d: "Sự cố được gửi cảnh báo tức thì qua Dashboard, Email, SMS hoặc ứng dụng di động. Người quản lý có thể giám sát, truy vết và xuất báo cáo trực tiếp.",
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
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* glow */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>

              {/* video card */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[700px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                >
                  <source src={edgeWarningVideo} type="video/mp4" />
                </video>
              </div>

              {/* badge */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-8 right-8 bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg"
              >
                EDGE ALERT ACTIVE
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
      {/* SECTION V: TÁC ĐỘNG & LỢI ÍCH */}
      <section className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">

        <div className="container mx-auto px-4 max-w-7xl">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-[0.3em] mb-4">
              V. Tác Động & Lợi Ích Chính
            </h2>

            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Việc triển khai
              <span className="font-bold text-gray-900">
                {" "}Unguarded Edge Detection (UED)
              </span>
              {" "}không chỉ dừng lại ở việc giám sát an toàn, mà còn thay đổi cách doanh nghiệp tiếp cận và quản trị rủi ro — từ phản ứng sau sự cố sang chủ động dự báo và phòng ngừa liên tục theo thời gian thực.
            </p>

          </motion.div>

          {/* 5 BENEFITS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

            {[
              {
                icon: "🛡️",
                title: "Giảm Thiểu Rủi Ro",
                desc: "Nhận diện sớm các khu vực mép nguy hiểm và hành vi không an toàn nhằm ngăn ngừa tai nạn trước khi xảy ra."
              },
              {
                icon: "⚙️",
                title: "Hiệu Quả Hoạt Động",
                desc: "Tự động hóa công tác giám sát an toàn, giảm áp lực cho nhân sự và duy trì kiểm soát liên tục."
              },
              {
                icon: "⚡",
                title: "Tốc Độ Ứng Phó",
                desc: "Cảnh báo tức thời giúp đội ngũ an toàn phản ứng nhanh chóng, chính xác và hiệu quả."
              },
              {
                icon: "💰",
                title: "Tối Ưu Chi Phí",
                desc: "Giảm chi phí do gián đoạn, bồi thường và tái kiểm tra nhờ hệ thống vận hành 24/7."
              },
              {
                icon: "🌱",
                title: "Văn Hóa An Toàn",
                desc: "Xây dựng tư duy an toàn chủ động, nơi công nghệ hỗ trợ con người phòng ngừa rủi ro bền vững."
              }
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}
                whileHover={{
                  y: -10
                }}
                className="
            group
            bg-white
            rounded-3xl
            p-8
            shadow-lg
            hover:shadow-2xl
            border border-gray-100
            hover:border-orange-300
            transition-all
            duration-500
            text-center
          "
              >

                {/* ICON */}
                <div className="
            w-20 h-20 mx-auto mb-6
            rounded-2xl
            bg-gradient-to-br from-orange-100 to-orange-200
            flex items-center justify-center
            text-4xl
            group-hover:scale-110
            transition-transform
            duration-500
          ">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
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
                Sẵn Sàng Nâng Cấp An Toàn Công Trường Của Bạn?
              </h2>

              <p className="text-gray-700 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Hãy biến CCTV của bạn thành một Người Bảo Vệ An Toàn không bao giờ ngủ.
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

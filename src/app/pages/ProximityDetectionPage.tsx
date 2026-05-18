import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import proximityImg from '../../imports/image_5.jpg';

import proximityWarningVideo2 from '@/app/asset/demo_18.mp4';

import proximityWarningVideo from '@/app/asset/demo_17.mp4';


import { PageFooter } from '../components/PageFooter';

interface ProximityDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function ProximityDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: ProximityDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Proximity Detection | Quốc Việt";
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
      <div className="bg-white py-16 border-b border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <span className="text-7xl">⚠️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A202C] mb-8 tracking-tight">
              PROXIMITY DETECTION & WARNING
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Proximity Detection: Giám sát những gì con người không thể – theo dõi các vùng mù và các thiết bị lớn đang di chuyển theo thời gian thực. Hệ thống phát hiện khoảng cách rủi ro giữa máy móc và con người hoặc giữa các máy móc, đưa ra cảnh báo tức thì nhằm ngăn chặn va chạm, bảo vệ đội ngũ công nhân.
            </p>
          </motion.div>
        </div>
      </div>

   {/* SECTION I: GIẢI PHÁP */}
<main className="container mx-auto px-4 py-16 max-w-6xl">
  <div className="grid md:grid-cols-2 gap-14 items-center">

    {/* CỘT TRÁI: HÌNH ẢNH */}
    <motion.div
      {...fLeft}
      className="relative order-2 md:order-1"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
        <ImageWithFallback
          src={proximityImg}
          alt="Proximity Detection AI Quốc Việt"
          className="w-full h-auto object-cover"
        />

        {/* vòng radar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-yellow-400 rounded-full w-44 h-44 opacity-40 animate-ping"></div>

        {/* cảnh báo */}
        <div className="absolute top-8 left-8 border border-red-500 px-3 py-2 text-[10px] text-red-500 font-mono bg-black/30 rounded-md">
          BREACH DETECTED: ZONE A
        </div>
      </div>

      {/* nền cam phía sau */}
      <div className="absolute -top-5 -left-5 w-full h-full bg-orange-100 rounded-3xl -z-0"></div>
    </motion.div>


    {/* CỘT PHẢI: NỘI DUNG */}
    <motion.div
      {...fRight}
      className="space-y-6 order-1 md:order-2"
    >
      <div>
        <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
          I. Giải pháp là gì?
        </h2>

        <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

        <p className="text-gray-700 text-lg leading-relaxed">
          <span className="font-bold text-gray-900 text-2xl block mb-3">
            Phát Hiện và Cảnh Báo Tiếp Cận Nguy Hiểm (PDW)
          </span>

          mang độ chính xác của AI vào an toàn công nghiệp bằng cách xác định
          khoảng cách không an toàn giữa máy móc hạng nặng, thiết bị và công nhân
          <span className="font-semibold text-orange-600">
            {" "}trước khi sự cố xảy ra.
          </span>
        </p>
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
        <p>
          Sử dụng{" "}
          <span className="font-semibold text-gray-800">
            video analytics độc quyền của Quốc Việt
          </span>{" "}
          cùng với hệ thống camera CCTV hoặc IP camera tiêu chuẩn.
        </p>

        <p>
          Hệ thống liên tục theo dõi chuyển động của máy móc và vị trí
          công nhân theo thời gian thực để phát hiện nguy cơ va chạm.
        </p>

        <p>
          AI tự động xác định{" "}
          <span className="font-semibold text-orange-600">
            vùng an toàn động
          </span>{" "}
          xung quanh thiết bị đang hoạt động và cảnh báo ngay khi có
          hành vi tiếp cận không an toàn.
        </p>

        <p>
          Giải pháp hoạt động{" "}
          <span className="font-semibold text-gray-800">
            24/7
          </span>
          , ghi lại toàn bộ sự kiện vi phạm để phục vụ truy xuất,
          đánh giá và cải tiến quy trình an toàn.
        </p>

        <p>
          PDW giúp đội ngũ{" "}
          <span className="font-semibold text-gray-800">
            EHS (Môi trường, Sức khỏe & An toàn)
          </span>{" "}
          chủ động ngăn ngừa các vụ suýt xảy ra, giảm thời gian ngừng
          hoạt động và xây dựng văn hóa an toàn mạnh mẽ hơn.
        </p>
      </div>
    </motion.div>

  </div>
</main>
      {/* SECTION II: TẠI SAO PDW QUAN TRỌNG */}
<section className="py-24 bg-gradient-to-b from-white via-gray-50 to-orange-50">
  <div className="container mx-auto px-4 max-w-7xl">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
        II. Tại sao PDW lại quan trọng?
      </h2>

      <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

      <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
        Trong các môi trường công nghiệp nặng, nơi máy móc, công nhân và công việc
        thay đổi liên tục, sự tiếp cận không được giám sát có thể dẫn đến va chạm,
        thương tích và gián đoạn tốn kém. Thách thức không chỉ là sự bất cẩn mà là
        sự phức tạp của nhận thức không gian theo thời gian thực trên các khu vực
        lớn và bừa bộn.
      </p>
    </motion.div>

    {/* SUB TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <h3 className="text-center text-2xl font-bold text-gray-900 mb-2">
        Các Lỗ hổng An toàn Phổ biến
      </h3>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        AI giúp lấp đầy khoảng trống giữa con người và máy móc bằng cảnh báo chủ động theo thời gian thực.
      </p>
    </motion.div>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Máy móc hoạt động gần người",
          content:
            "Máy móc hạng nặng vận hành trong không gian chật hẹp mà không có vùng đệm an toàn được xác định rõ.",
          icon: "🚜",
          color: "border-red-500",
        },
        {
          title: "Điểm mù nguy hiểm",
          content:
            "Các thiết bị lớn tạo ra điểm mù khiến người vận hành không thể nhìn thấy công nhân ở gần.",
          icon: "👁️‍🗨️",
          color: "border-orange-500",
        },
        {
          title: "Xâm nhập không phát hiện",
          content:
            "Công nhân vô tình bước vào khu vực máy móc đang hoạt động mà không được phát hiện kịp thời.",
          icon: "🚶",
          color: "border-blue-500",
        },
        {
          title: "Mất tập trung & mệt mỏi",
          content:
            "Tiếng ồn, áp lực công việc hoặc mệt mỏi khiến công nhân không nhận ra nguy cơ xung quanh.",
          icon: "🎧",
          color: "border-purple-500",
        },
        {
          title: "Thiếu cảnh báo tức thời",
          content:
            "Không có hệ thống cảnh báo theo thời gian thực khi xảy ra vi phạm khoảng cách không an toàn.",
          icon: "⚠️",
          color: "border-yellow-500",
        },
        {
          title: "AI giám sát liên tục 24/7",
          content:
            "Khác với giám sát thủ công, AI hoạt động không mệt mỏi, loại bỏ hạn chế do con người và điểm mù.",
          icon: "🤖",
          color: "border-green-500",
        },
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
          <div className="text-4xl mb-4">
            {risk.icon}
          </div>

          <h3 className="font-bold text-gray-900 text-lg mb-3">
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

      {/* CONTENT LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
            III. Ứng dụng Giải pháp PDW cần thiết nhất ở đâu?
          </h2>

          <div className="h-1 w-20 bg-orange-500 mb-6"></div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Nguy cơ tai nạn xảy ra khi công nhân vô tình bước vào gần thiết bị
            máy móc hạng nặng mà không có nhận thức tình huống theo thời gian thực.
          </p>
        </div>

        {/* APPLICATION LIST */}
        <div className="space-y-5">
          {[
            {
              t: "Công trường Xây dựng",
              c: "Sự di chuyển thường xuyên của máy xúc, xe ben và cần cẩu có thể gây nguy hiểm cho công nhân trên mặt đất, đặc biệt tại các điểm mù.",
            },
            {
              t: "Nhà máy / Kho hàng",
              c: "Môi trường kho bận rộn với lối đi hẹp, tầm nhìn bị cản trở và giao thông đông đúc, dễ xảy ra tai nạn với xe nâng hoặc AGV.",
            },
            {
              t: "Cảng & Trung tâm Logistics",
              c: "Hoạt động liên tục với các phương tiện vận chuyển container lớn như reach stackers và straddle carriers, làm tăng nguy cơ va chạm giữa xe và người.",
            },
            {
              t: "Khai thác mỏ",
              c: "Xe tải tải trọng lớn và máy xúc lật có vùng mù rộng; bụi và ánh sáng yếu làm giảm khả năng nhận biết của công nhân.",
            },
            {
              t: "Cơ sở Dầu khí (Oil & Gas)",
              c: "Các giàn khoan, nhà máy lọc dầu và khu bảo trì có rủi ro cao do tầm nhìn hạn chế và bố cục vận hành phức tạp.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:bg-orange-100 hover:shadow-md transition-all duration-300"
            >
              <div className="mt-1 shrink-0">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {item.t}
                </h4>

                <p className="text-gray-700 leading-relaxed">
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
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[550px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={proximityWarningVideo} type="video/mp4" />
          </video>
        </div>

        {/* badge */}
        <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-red-600 text-white text-xs tracking-wider font-semibold shadow-lg animate-pulse">
          PROXIMITY ALERT
        </div>

        {/* glow */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
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
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[620px] md:h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={proximityWarningVideo} type="video/mp4" />
          </video>
        </div>

        {/* floating alert */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-8 right-8 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg"
        >
          PROXIMITY ALERT ACTIVE
        </motion.div>

        {/* glow */}
        <div className="absolute -top-4 -left-4 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
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
            IV. Cách Thức Hoạt động PDW (Computer Vision)
          </h2>

          <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Giải pháp{" "}
            <span className="text-orange-400 font-bold">
              Proximity Detection
            </span>{" "}
            của Quốc Việt chuyển đổi hệ thống camera truyền thống của bạn
            thành công cụ an toàn thông minh.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              s: "01",
              t: "Chọn (Choose)",
              d: "Chọn mô-đun Proximity Detection từ Quốc Việt AI Hub. Mô-đun này được thiết kế để xác định sự gần gũi không an toàn giữa máy móc và công nhân hoặc giữa hai máy móc.",
            },
            {
              s: "02",
              t: "Kết nối (Connect)",
              d: "Mô-đun liên kết trực tiếp với các camera IP hoặc CCTV hiện có bằng RTSP. Đây là bản nâng cấp plug-and-play, không cần thêm phần cứng.",
            },
            {
              s: "03",
              t: "Ghi nhận (Capture)",
              d: "Hệ thống phân tích nguồn cấp video trực tiếp để theo dõi các khu vực rủi ro chính. Phát hiện máy móc hoạt động quá gần nhau, công nhân đi vào vùng tương tác không an toàn và các chồng chéo bất ngờ trong khu vực di chuyển.",
            },
            {
              s: "04",
              t: "Kiểm soát (Control)",
              d: "Nếu phát hiện sự tiếp cận không an toàn, cảnh báo được gửi ngay lập tức qua đèn, còi báo động, SMS hoặc dashboard. Đội ngũ EHS nhận được nhật ký và thông tin thời gian thực để phản ứng nhanh và cải thiện đào tạo.",
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

    </div>
  </div>
</section>

      
      {/* SECTION V: TÁC ĐỘNG & LỢI ÍCH */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4 max-w-6xl">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-3">
        V. Tác Động & Lợi Ích Chính
      </h2>
      <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>

      <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
        <span className="font-semibold text-gray-900">
          Proximity Detection
        </span>{" "}
        mang lại tác động có thể đo lường được trong việc giảm thiểu rủi ro
        và tăng cường hiệu quả vận hành tại môi trường công nghiệp.
      </p>
    </motion.div>

    {/* BENEFIT CARDS */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          num: "47%",
          title: "Giảm Sự cố Suýt xảy ra",
          desc: "Giảm tới 47% các sự cố suýt xảy ra nhờ phát hiện sớm hành vi tiếp cận nguy hiểm."
        },
        {
          num: "35%",
          title: "Tăng Độ chính xác Vùng Rủi ro",
          desc: "AI xác định vùng nguy hiểm chính xác hơn 35% so với phương pháp giám sát thủ công."
        },
        {
          num: "59%",
          title: "Cắt giảm Thời gian Phản hồi",
          desc: "Cảnh báo thời gian thực giúp giảm đáng kể thời gian phản ứng khẩn cấp."
        },
        {
          num: "2.7x",
          title: "Cải thiện Tài liệu An toàn",
          desc: "Tạo báo cáo và hồ sơ kiểm toán nhanh hơn 2.7 lần."
        },
        {
          num: "25%",
          title: "Điều chỉnh Hành vi",
          desc: "Tăng 25% khả năng sửa đổi hành vi không an toàn mà không cần đào tạo lại."
        },
        {
          num: "23%",
          title: "Giảm Yêu cầu Bảo hiểm",
          desc: "Giảm chi phí và tần suất yêu cầu bồi thường bảo hiểm."
        }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.08 }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
        >
          <div className="text-4xl font-black text-orange-500 mb-4">
            {item.num}
          </div>

          <h3 className="font-bold text-gray-900 text-lg mb-3">
            {item.title}
          </h3>

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
      <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
        VI. Case Study
      </h2>

      <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>

      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Nhà sản xuất Ô tô Đức giảm
        <span className="text-orange-500"> 61% </span>
        sự cố suýt va chạm
      </h3>

      <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-8">
        Ứng dụng AI Proximity Detection để giám sát khoảng cách an toàn giữa
        người lao động và máy móc trong môi trường sản xuất tốc độ cao.
      </p>
    </motion.div>

    {/* CASE CARD */}
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
              🚗 Ngành: Sản xuất Ô tô
            </div>

            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              📍 Địa điểm: Đức
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
              Nhà máy lắp ráp phải đối mặt với các sự cố suýt va chạm lặp đi
              lặp lại tại những khu vực tắc nghẽn như
              <span className="font-semibold text-gray-900">
                {" "}Dây chuyền lắp ráp cuối cùng
              </span>
              {" "}và
              <span className="font-semibold text-gray-900">
                {" "}Đường hầm Logistics
              </span>.
              Các biện pháp kiểm soát thủ công không đủ để đảm bảo nhận diện
              rủi ro theo thời gian thực.
            </p>
          </div>

          {/* SOLUTION */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-xl">
                🤖
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Giải pháp Quốc Việt
              </h4>
            </div>

            <p className="text-gray-600 leading-8">
              Tích hợp mô-đun
              <span className="font-bold text-gray-900">
                {" "}Proximity Detection
              </span>
              {" "}vào các khu vực trọng điểm.
              AI liên tục theo dõi khoảng cách giữa công nhân và máy móc,
              phát cảnh báo tức thời khi phát hiện sự tiếp cận không an toàn.
            </p>
          </div>
        </div>

        {/* RIGHT RESULT */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 md:p-14 flex flex-col justify-center">

          <h2 className="text-7xl md:text-8xl font-black leading-none">
            61%
          </h2>

          <p className="text-2xl font-semibold mt-4">
            Giảm sự cố suýt va chạm
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>
              <p className="leading-7 text-orange-50">
                Giảm đáng kể nguy cơ va chạm giữa người và máy móc.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>
              <p className="leading-7 text-orange-50">
                Cải thiện nhận thức an toàn của nhân viên trên dây chuyền.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>
              <p className="leading-7 text-orange-50">
                Hỗ trợ tuân thủ tiêu chuẩn ISO 45001.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>
              <p className="leading-7 text-orange-50">
                Đạt kết quả rõ rệt chỉ sau 90 ngày triển khai.
              </p>
            </div>
          </div>
        </div>

      </div>
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
             AI có thể làm những gì con người không thể: Giám sát 24/7 và cảnh báo ngay lập tức về rủi ro tiếp cận nguy hiểm.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
             Khám phá cách Quốc Việt Proximity Detection có thể tích hợp với hệ thống CCTV hiện có của bạn để chuyển từ giám sát thủ công sang phòng ngừa tai nạn chủ động.
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

      <PageFooter setCurrentPage={setCurrentPage} hideOtherSolutions={true} />
    </div>
  );
}

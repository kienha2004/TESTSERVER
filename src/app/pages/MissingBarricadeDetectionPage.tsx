import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import barrierImg from '../../imports/image_3.jpg';
import fallWarningVideo from '@/app/asset/demo_22.mp4';
import logoImg from '../../imports/logo.png';
import fallWarningVideo2 from '@/app/asset/demo_21.mp4';
import { Facebook, Linkedin } from 'lucide-react';

interface MissingBarricadeDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function MissingBarricadeDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: MissingBarricadeDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Missing Barricade | Quốc Việt";
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
          <div className="flex justify-center mb-6 text-6xl">🚨</div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            MISSING BARRICADE DETECTION
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Missing Barricade Detection: Đảm bảo An toàn Khu vực Quan trọng với Giám sát Rào chắn 24/7. AI video analytics của Quốc Việt chuyển đổi CCTV thành hệ thống an toàn chủ động, nhận diện rào chắn bị thiếu, di dời hoặc hư hỏng theo thời gian thực để ngăn chặn các khu vực không được bảo vệ trở thành các sự cố nghiêm trọng.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-10">
          {/* CỘT TRÁI: HÌNH ẢNH MINH HỌA */}
  <motion.div {...fLeft} className="sticky top-24">
    <div className="relative">
      <div className="rounded-3xl overflow-hidden shadow-2xl border-[12px] border-gray-50 relative z-10">
        <ImageWithFallback
          src={barrierImg}
          alt="Missing Barricade Detection AI"
          className="w-full h-auto object-cover"
        />

        {/* Overlay AI visualization */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-orange-500 w-48 h-32 opacity-60 animate-pulse flex items-center justify-center">
          <div className="bg-orange-500 text-white text-[10px] px-2 py-1 font-bold">
            MISSING BARRICADE
          </div>
        </div>
      </div>

      {/* background */}
      <div className="absolute -top-6 -left-6 w-full h-full bg-blue-50 rounded-3xl -z-0"></div>
    </div>
  </motion.div>

  {/* CỘT PHẢI: NỘI DUNG CHI TIẾT */}
  <motion.div {...fRight} className="space-y-8">
    <section>
      <h2 className="text-orange-600 font-bold text-xl mb-2 uppercase tracking-wider">
        I. Giải pháp là gì?
      </h2>

      <div className="h-1 w-20 bg-orange-500 mb-6"></div>

      <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
        <p>
          <span className="font-bold">
            Missing Barricade Detection
          </span>{" "}
          (MBD) là một giải pháp an toàn dựa trên Computer Vision được
          thiết kế để xác định các khu vực bị thiếu các rào chắn vật lý
          thiết yếu (như rào chắn, thanh chắn bảo vệ hoặc băng cảnh báo)
          theo thời gian thực. Mô-đun này được xây dựng để hỗ trợ các
          công trường xây dựng, sản xuất, logistics và năng lượng.
        </p>

        <p>
          Hệ thống sử dụng công nghệ{" "}
          <span className="font-semibold">
            video analytics độc quyền của Quốc Việt
          </span>{" "}
          để quét liên tục các nguồn cấp dữ liệu CCTV hoặc camera IP hiện
          có nhằm phát hiện rào chắn bị thiếu hoặc không hiệu quả.
        </p>

        <p>
          Giảm sự phụ thuộc vào kiểm tra thủ công định kỳ, vốn dễ bị chậm
          trễ và lỗi do con người. Hệ thống đưa ra{" "}
          <span className="text-orange-600 font-semibold">
            cảnh báo tức thì
          </span>{" "}
          ngay khi phát hiện sự cố liên quan đến rào chắn.
        </p>
      </div>
    </section>
  </motion.div>

</div>
      </main>

     {/* SECTION II: TẠI SAO QUAN TRỌNG */}
{/* SECTION: RỦI RO LIÊN QUAN ĐẾN LỖ HỔNG RÀO CHẮN */}
<section className="py-24 bg-gradient-to-b from-white via-gray-50 to-orange-50 overflow-hidden">

  <div className="container mx-auto px-4 max-w-7xl">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >

      <h2 className="text-orange-600 font-bold text-xl md:text-2xl uppercase tracking-[0.2em] mb-4">
        II. Tại Sao Thiếu Rào Chắn Là Mối Nguy Lớn?
      </h2>

      <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>

      <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
        Việc thiếu hoặc di dời rào chắn là nguy cơ phổ biến trên các công trường có nhịp độ nhanh.
        Những sự cố này thường xảy ra khi rào chắn bị tháo ra để tái chế vật liệu (rework)
        hoặc di chuyển thiết bị, nhưng sau đó không được đặt lại đúng vị trí ban đầu.
      </p>

    </motion.div>

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-14 text-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Rủi Ro Liên Quan Đến Lỗ Hổng Rào Chắn
      </h3>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        AI Camera MBD giúp phát hiện nhanh các lỗ hổng rào chắn và cảnh báo nguy hiểm theo thời gian thực.
      </p>
    </motion.div>

    {/* RISK GRID */}
    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6">

      {[
        {
          icon: "⚠️",
          title: "Nguy Cơ Té Ngã",
          desc: "Thiếu rào chắn tại mép sàn, hố thang máy hoặc giàn giáo là nguyên nhân trực tiếp dẫn đến tai nạn té ngã nghiêm trọng."
        },

        {
          icon: "🪨",
          title: "Vật Tư Rơi",
          desc: "Dụng cụ và vật liệu có thể rơi từ trên cao xuống khu vực bên dưới, gây nguy hiểm cho công nhân."
        },

        {
          icon: "🚷",
          title: "Tiếp Cận Nguy Hiểm",
          desc: "Người lao động có thể vô tình đi vào khu vực điện áp cao hoặc vùng vận hành máy móc nguy hiểm."
        },

        {
          icon: "👁️",
          title: "Điểm Mù Giám Sát",
          desc: "Giám sát viên không thể hiện diện mọi lúc. AI giúp loại bỏ các điểm mù và phát hiện rủi ro liên tục."
        },

        {
          icon: "📋",
          title: "Vi Phạm Tiêu Chuẩn",
          desc: "Thiếu rào chắn có thể vi phạm OSHA, ISO 45001 và gây ảnh hưởng nghiêm trọng đến doanh nghiệp."
        }
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: index * 0.12
          }}
          whileHover={{
            y: -10
          }}
          className="
            group
            bg-white
            rounded-3xl
            p-8
            border
            border-gray-100
            shadow-lg
            hover:shadow-2xl
            hover:border-orange-300
            transition-all
            duration-500
            relative
            overflow-hidden
          "
        >

          {/* BACKGROUND GLOW */}
          <div className="
            absolute
            top-0
            right-0
            w-32
            h-32
            bg-orange-100
            rounded-full
            blur-3xl
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-700
          "></div>

          {/* ICON */}
          <div className="
            relative
            z-10
            w-20
            h-20
            rounded-2xl
            bg-gradient-to-br
            from-orange-100
            to-orange-200
            flex
            items-center
            justify-center
            text-4xl
            mb-6
            group-hover:scale-110
            transition-transform
            duration-500
          ">
            {item.icon}
          </div>

          {/* TITLE */}
          <h4 className="
            relative
            z-10
            text-xl
            font-bold
            text-gray-900
            mb-4
            group-hover:text-orange-600
            transition-colors
          ">
            {item.title}
          </h4>

          {/* DESC */}
          <p className="
            relative
            z-10
            text-gray-600
            text-sm
            leading-relaxed
          ">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        mt-20
        rounded-3xl
        bg-gradient-to-r
        from-orange-500
        to-amber-500
        p-12
        text-center
        shadow-2xl
      "
    >

      <h3 className="text-4xl font-bold text-white mb-4">
        AI Giám Sát MBD
      </h3>

      <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
        Phát hiện thiếu rào chắn, cảnh báo nguy hiểm và bảo vệ an toàn công trường
        mọi lúc với hệ thống AI Camera giám sát 24/7.
      </p>

    </motion.div>

  </div>
</section>

    {/* SECTION III: ỨNG DỤNG */}
<section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
  <div className="w-full max-w-[1600px] mx-auto px-10">
    <div className="grid md:grid-cols-2 gap-24 items-center">

      {/* CONTENT LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
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
              Missing Barrier Detection (MBD)
            </span>{" "}
            cần thiết ở bất cứ nơi nào các khu vực phải được{" "}
            <span className="font-semibold text-orange-600">
              phân định vật lý
            </span>{" "}
            để đảm bảo an toàn, quy trình làm việc hoặc tuân thủ quy định.
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-6">
          {[
            {
              t: "Xây dựng (Construction)",
              c: "Theo dõi rào chắn gần giếng thang máy, cầu thang, rãnh và giàn giáo. Giảm đáng kể nguy cơ té ngã.",
            },
            {
              t: "Dầu khí (Oil & Gas)",
              c: "Giám sát các khu vực liên quan đến công việc nóng, hóa chất nguy hiểm hoặc thiết bị điện trực tiếp, nơi việc thiếu rào chắn có thể dẫn đến sự cố nghiêm trọng.",
            },
            {
              t: "Khai thác mỏ (Mining)",
              c: "Giám sát tuân thủ PPE trong khu vực sử dụng hóa chất nguy hại, bảo vệ an toàn trước rủi ro tiếp xúc chất độc hại.",
            },
            {
              t: "Nhà máy chế tạo (Manufacturing)",
              c: "Giám sát các khu vực bị hạn chế hoặc có năng lượng để đảm bảo công nhân tránh xa thiết bị vận hành hoặc khu vực điện áp cao.",
            },
            {
              t: "Logistics & Kho hàng",
              c: "Kiểm soát các khu vực bốc dỡ hàng hóa, sàn nâng và lối di chuyển của xe nâng nhằm ngăn chặn tai nạn do thiếu rào chắn hoặc xâm nhập vùng nguy hiểm.",
            },
            {
              t: "Hóa chất",
              c: "Bảo vệ các khu vực lưu trữ và xử lý hóa chất độc hại bằng cách phát hiện các điểm thiếu rào chắn, hạn chế nguy cơ tiếp xúc hoặc rò rỉ gây mất an toàn.",
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

      {/* VIDEO RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

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
              <source src={fallWarningVideo2} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* badge */}
        <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-red-600 text-white text-xs tracking-wider font-semibold shadow-lg animate-pulse">
          MISSING BARRIER ALERT
        </div>
      </motion.div>

    </div>
  </div>
</section>
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
  {/* SECTION IV: CÁCH THỨC HOẠT ĐỘNG */}
<section className="py-24 bg-slate-900 text-white overflow-hidden">
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
        <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>

        {/* video card */}
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[700px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={fallWarningVideo} type="video/mp4" />
          </video>
        </div>

        {/* badge */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-8 right-8 bg-red-600 text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg"
        >
          BARRIER ALERT ACTIVE
        </motion.div>
      </motion.div>

      {/* TEXT RIGHT */}
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
            Mô-đun{" "}
            <span className="text-orange-400 font-bold">
              Missing Barrier Detection (MBD)
            </span>{" "}
            tận dụng{" "}
            <span className="text-white font-semibold">
              Computer Vision
            </span>{" "}
            để theo dõi tình trạng rào chắn vật lý theo thời gian thực.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              s: "01",
              t: "Kết nối (Connect)",
              d: "Mô-đun tích hợp liền mạch với hệ thống giám sát hiện có của bạn qua giao thức RTSP. Không cần thêm thiết bị phần cứng.",
            },
            {
              s: "02",
              t: "Ghi nhận (Capture)",
              d: "AI sử dụng Computer Vision để quét các luồng video trực tiếp và xác định các khu vực nguy hiểm đã được cấu hình. Hệ thống phát hiện các cạnh, hố hoặc khu vực mở không có rào chắn; các rào chắn bị dịch chuyển, đổ sập hoặc đặt sai vị trí; đồng thời nhận diện công nhân hoặc thiết bị di chuyển trong các khu vực hạn chế nhưng thiếu hàng rào an toàn phù hợp.",
            },
            {
              s: "03",
              t: "Kiểm soát (Control)",
              d: "Khi phát hiện rào chắn bị thiếu hoặc sai vị trí, hệ thống gửi cảnh báo tức thì tại chỗ qua còi hoặc đèn chỉ báo, đồng thời gửi cảnh báo từ xa qua SMS, ứng dụng di động hoặc dashboard để đội ngũ EHS phản ứng ngay lập tức.",
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

    </div>
  </div>
</section>
  {/* SECTION V: TÁC ĐỘNG & LỢI ÍCH */}
<section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
  <div className="container mx-auto px-4 max-w-7xl">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
        V. Tác động và Lợi ích Chính
      </h2>

      <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

      <p className="text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
        Giải pháp <span className="font-bold text-gray-900">Missing Barricade Detection (MBD)</span> 
        của Quốc Việt mang lại khả năng giám sát chủ động theo thời gian thực,
        giúp doanh nghiệp nâng cao mức độ an toàn, tối ưu chi phí vận hành và cải thiện hiệu quả quản trị rủi ro.
      </p>
    </motion.div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          icon: "⏱️",
          title: "Giảm Thời gian Kiểm tra",
          content:
            "Cắt giảm tới 65% thời gian kiểm tra rào chắn thủ công nhờ tự động hóa quá trình giám sát và phát hiện.",
        },

        {
          icon: "🛡️",
          title: "Tăng Khả năng Phòng ngừa",
          content:
            "Nâng cao khả năng phát hiện sớm các rủi ro liên quan đến té ngã, xâm nhập và vi phạm an toàn tới 48%.",
        },

        {
          icon: "🚨",
          title: "Tốc độ Cảnh báo",
          content:
            "Hệ thống kích hoạt cảnh báo chỉ trong vòng 3 giây khi phát hiện rào chắn bị thiếu hoặc sai vị trí.",
        },

        {
          icon: "💰",
          title: "Giảm Chi phí Bảo hiểm",
          content:
            "Giảm tần suất yêu cầu bồi thường và tối ưu thời gian xử lý sự cố, giúp tiết kiệm chi phí vận hành.",
        },

        {
          icon: "📋",
          title: "Khả năng Kiểm toán",
          content:
            "Tạo nhật ký kiểm toán đầy đủ và có thể truy xuất nhanh chóng, hỗ trợ điều tra và báo cáo sự cố hiệu quả.",
        },

        {
          icon: "⚙️",
          title: "Tính linh hoạt",
          content:
            "Tự động cập nhật khu vực rủi ro theo từng giai đoạn thi công và thay đổi bố cục công trường.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500"
        >

          {/* ICON */}
          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
            {item.title}
          </h3>

          {/* CONTENT */}
          <p className="text-gray-600 leading-7 text-sm">
            {item.content}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* SECTION VI: CASE STUDY */}
<section className="py-24 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-6xl">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
        VI. Case Study
      </h2>

      <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>

      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Nhà thầu Singapore Cắt giảm 
        <span className="text-orange-500"> 65% </span>
        Vi phạm An toàn
      </h3>

      <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-8">
        Một ví dụ thực tế về cách công nghệ AI hỗ trợ doanh nghiệp 
        chủ động kiểm soát rủi ro và nâng cao tiêu chuẩn an toàn công trường.
      </p>
    </motion.div>

    {/* MAIN CARD */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-orange-50 via-white to-gray-50 rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden"
    >

      <div className="grid md:grid-cols-2 gap-0">

        {/* LEFT CONTENT */}
        <div className="p-10 md:p-14 space-y-10">

          {/* INFO */}
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              🏗️ Ngành: Xây dựng
            </div>

            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              📍 Địa điểm: Singapore
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
              Một nhà thầu xây dựng hàng đầu tại Singapore gặp phải tình trạng
              rào chắn bị tháo dỡ trong quá trình thi công và không được lắp đặt lại đúng vị trí.
              Điều này dẫn đến nhiều sự cố an toàn và các tình huống suýt gây tai nạn
              tại các khu vực nguy hiểm như mép sàn và giếng thang máy.
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
              Quốc Việt triển khai mô-đun 
              <span className="font-bold text-gray-900">
                {" "}Missing Barricade Detection (MBD)
              </span>
              {" "}bằng cách tận dụng hệ thống camera IP hiện có để giám sát liên tục
              các khu vực rủi ro cao theo thời gian thực.
            </p>
          </div>

        </div>

        {/* RIGHT IMPACT */}
        <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 md:p-14 flex flex-col justify-center">

          {/* BIG NUMBER */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h2 className="text-7xl md:text-8xl font-black leading-none">
              65%
            </h2>

            <p className="text-2xl font-semibold mt-4">
              Giảm Vi phạm An toàn
            </p>
          </motion.div>

          {/* IMPACT */}
          <div className="space-y-6">

            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>

              <p className="leading-7 text-orange-50">
                Giảm đáng kể các nguy cơ té ngã và xâm nhập trái phép.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>

              <p className="leading-7 text-orange-50">
                Nâng cao khả năng giám sát công trường theo thời gian thực.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl">✔️</div>

              <p className="leading-7 text-orange-50">
                Hỗ trợ doanh nghiệp đáp ứng tiêu chuẩn 
                Workplace Safety and Health (WSH) 2028 của Singapore.
              </p>
            </div>

          </div>

          {/* DECORATION */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

        </div>

      </div>
    </motion.div>
  </div>
</section>
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
              Đừng để giám sát rào chắn bị thiếu bị bỏ qua.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Khám phá cách Quốc Việt Missing Barricade Detection có thể tích hợp với hệ thống CCTV hiện có của bạn để ngăn ngừa tai nạn và tăng cường khả năng tuân thủ tới 48%.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('demoForm')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl transition-all"
            >
            YÊU CẦU BẢN DEMO NGAY HÔM NAY!
            </motion.button>
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

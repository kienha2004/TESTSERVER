import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  ShieldAlert,
  BellRing,
  Facebook,
  Linkedin,
  Activity,
  HeartPulse,
  Flame,
  AlertTriangle
} from 'lucide-react';

import violenceImg from '@/imports/image_13.jpg';
import violenceVideo from "@/app/asset/demo_1.mp4";
import violenceVideo2 from "@/app/asset/demo_2.mp4";

import logoImg from '@/imports/logo.png';

interface FightingDetectionPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };
const fRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export function FightingDetectionPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: FightingDetectionPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fighting Detection | Quốc Việt";
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
                <Flame className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              FIGHTING & VIOLENCE DETECTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Fighting & Violence Detection: Phát hiện Hành vi Hung hăng Sớm để Ngăn chặn Xung đột. Giải pháp sử dụng video analytics thông minh để phát hiện các dấu hiệu hung hăng sớm trước khi chúng leo thang, hoạt động theo thời gian thực tại các khu vực công nghiệp và công cộng.
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
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white z-10 bg-orange-50 p-4">

        <ImageWithFallback
          src={violenceImg}
          alt="Violence Detection AI"
          className="w-full h-[500px] object-contain"
        />

        {/* alert badge */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="absolute top-5 right-5 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        >
          VIOLENCE DETECTED
        </motion.div>
      </div>

      {/* background glow */}
      <div className="absolute -top-5 -left-5 w-full h-full bg-orange-100 rounded-[2.5rem] -z-0 blur-sm"></div>
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
            Phát Hiện Đánh nhau & Bạo lực
          </span>

          là mô-đun AI tiên tiến của{" "}
          <span className="text-orange-600 font-semibold">
            Quốc Việt
          </span>,
          sử dụng{" "}
          <span className="font-semibold text-gray-900">
            Computer Vision
          </span>{" "}
          và phân tích hành vi để giám sát video trực tiếp,
          nhận diện ngôn ngữ cơ thể hoặc các chuyển động liên quan đến
          hành vi hung hăng, đe dọa hoặc xung đột vật lý.
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed">
          AI có khả năng phát hiện các dấu hiệu tinh tế của sự leo thang
          căng thẳng như la hét, tiếp cận nhanh, nắm đấm giơ lên
          hoặc cử chỉ thất thường, giúp chuyển camera CCTV thông thường
          thành công cụ ngăn ngừa xung đột chủ động và rút ngắn
          thời gian phản ứng xuống chỉ còn vài giây.
        </p>
      </div>

      <div className="space-y-4 text-gray-600 text-[15px]">

        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3"
        >
          <Activity className="w-5 h-5 text-orange-500 shrink-0" />
          <p>
            Nhận diện chính xác các cử chỉ bạo lực như đấm,
            đá, xô đẩy hoặc hành vi hung hăng trong đám đông.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3"
        >
          <Users className="w-5 h-5 text-orange-500 shrink-0" />
          <p>
            Phát hiện tụ tập bất thường hoặc hành vi leo thang
            có nguy cơ dẫn đến xung đột vật lý.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3"
        >
          <HeartPulse className="w-5 h-5 text-orange-500 shrink-0" />
          <p>
            Cảnh báo sớm các dấu hiệu căng thẳng để đội an ninh
            có thể can thiệp trước khi xảy ra bạo lực.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ x: 6 }}
          className="flex items-start gap-3"
        >
          <BellRing className="w-5 h-5 text-orange-500 shrink-0" />
          <p>
            Gửi cảnh báo tức thì qua App, SMS hoặc bảng điều khiển
            cho đội phản ứng nhanh.
          </p>
        </motion.div>

      </div>
    </motion.div>

  </div>
</main>

      {/* SECTION II: TẠI SAO QUAN TRỌNG */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              II. Tại sao Phát hiện Đánh nhau & Bạo lực lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto leading-relaxed">
              Việc phát hiện một cuộc xung đột trước khi nó xảy ra phức tạp hơn
              nhiều so với phản ứng khi nó đã diễn ra. Các cuộc đối đầu hung hăng
              có thể bắt đầu bằng những cử chỉ, ánh nhìn hoặc tranh cãi đơn thuần
              — những tín hiệu tinh tế thường bị bỏ qua trong môi trường bận rộn.
            </p>
          </motion.div>

          {/* 5 BOXES */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Các Tín hiệu Hành vi Bỏ sót",
                content:
                  "Các cuộc gặp gỡ hung hăng thường bắt đầu bằng cử chỉ, ánh nhìn hoặc tranh cãi nhỏ. AI phát hiện các tín hiệu này với độ chính xác nhất quán.",
                icon: "👀",
                color: "border-orange-500",
              },
              {
                title: "Quá tải Giám sát",
                content:
                  "Nhân viên an ninh không thể theo dõi tất cả các nguồn cấp camera liên tục. AI tự động giám sát 24/7 mà không bị mệt mỏi.",
                icon: "📹",
                color: "border-red-500",
              },
              {
                title: "Nguy cơ Leo thang",
                content:
                  "Khi có người báo động thì thường đã quá muộn để ngăn chặn xung đột leo thang thành bạo lực nghiêm trọng.",
                icon: "⚠️",
                color: "border-blue-500",
              },
              {
                title: "Điểm nóng Rủi ro",
                content:
                  "Các cuộc đối đầu nhóm thường xảy ra gần hàng chờ, lối ra hoặc các khu vực nút thắt cổ chai đông người.",
                icon: "📍",
                color: "border-purple-500",
              },
              {
                title: "Các Dấu hiệu Cảnh báo Sớm",
                content:
                  "Các dấu hiệu cảnh báo đỏ thường bị nhân viên bỏ lỡ do mệt mỏi hoặc mất tập trung trong môi trường áp lực cao.",
                icon: "🚨",
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
                  scale: 1.03,
                }}
                className={`bg-white p-8 rounded-3xl border-t-4 ${risk.color}
          shadow-lg hover:shadow-2xl transition-all duration-300`}
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

          {/* THÁCH THỨC BELOW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-orange-100 shadow-lg"
          >
            <h3 className="text-xl font-bold text-orange-600 mb-4">
              Thách thức
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              Bằng cách phân tích thay đổi tư thế, chuyển động đột ngột,
              hành vi đám đông và các mẫu không gian, hệ thống video analytics
              phát hiện sự hung hăng ở giai đoạn sớm nhất.
              <span className="font-semibold text-gray-900">
                {" "}Không giống như giám sát thủ công thường bị chậm trễ và không nhất quán,
                AI của Quốc Việt cung cấp cảnh báo tự động ngay lập tức.
              </span>
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
            Nguy cơ xung đột có thể phát sinh ở bất cứ nơi nào mọi người tụ tập,
            làm việc hoặc đi qua. Phát hiện sớm là rất quan trọng để ngăn chặn
            sự leo thang và duy trì một môi trường an toàn, có kiểm soát.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              t: "Các Khu vực Công nghiệp với Lực lượng Lao động Lớn",
              c: "Tranh chấp tại nơi làm việc có thể nhanh chóng leo thang, đặc biệt trong thời gian chuyển ca hoặc khi áp lực công việc cao.",
            },
            {
              t: "Văn phòng Chính phủ & Tòa nhà Dịch vụ Công cộng",
              c: "Các quầy dịch vụ đông đúc và thời gian chờ đợi kéo dài có thể dẫn đến đối đầu.",
            },
            {
              t: "Khu vực Vận hành Từ xa hoặc Cô lập",
              c: "Trong các địa điểm xa xôi như mỏ hoặc giàn khoan dầu, AI giám sát liên tục và cảnh báo giám sát viên theo thời gian thực.",
            },
            {
              t: "Cửa hàng Bán lẻ & Trung tâm Mua sắm",
              c: "Giám sát các lối vào, khu vực thanh toán và khu vực đông người để phát hiện căng thẳng leo thang.",
            },
            {
              t: "Cơ sở Hạ tầng Công cộng & Ga Quá cảnh",
              c: "AI theo dõi các khu vực xếp hàng và lên tàu, phát hiện sớm các dấu hiệu hung hăng.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ x: 8, scale: 1.02 }}
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
            <source src={violenceVideo} type="video/mp4" />
          </video>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        >
          CONFLICT PREVENTION
        </motion.div>
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
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5 p-3">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-[620px] md:h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={violenceVideo2} type="video/mp4" />
          </video>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        >
          VIOLENCE ALERT
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
          <h2 className="text-orange-400 font-bold text-xl uppercase tracking-wider mb-2">
            IV. Cách Thức Hoạt động (Computer Vision)
          </h2>

          <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Giải pháp này sử dụng AI để nhận biết các dấu hiệu hung hăng
            và kích hoạt phản ứng nhanh chóng theo thời gian thực.
          </p>
        </div>

        <div className="space-y-5">
          {[
            {
              num: "01",
              title: "Kết nối (Connect)",
              desc: "Kết nối mô-đun AI với hệ thống CCTV hoặc IP camera hiện có bằng giao thức RTSP.",
            },
            {
              num: "02",
              title: "Ghi nhận (Capture)",
              desc: "AI liên tục phân tích từng khung hình video để phát hiện hành vi bất thường.",
            },
            {
              num: "03",
              title: "Phân tích hành vi",
              desc: "Nhận diện chen chúc, tranh cãi gay gắt, cử chỉ đe dọa.",
            },
            {
              num: "04",
              title: "Kiểm soát (Control)",
              desc: "Gửi cảnh báo tức thì đến phòng điều khiển, app và dashboard.",
            },
            {
              num: "05",
              title: "Lưu trữ & Kiểm toán",
              desc: "Toàn bộ sự cố được ghi lại để phục vụ điều tra và báo cáo.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              className="flex gap-5 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-lg">
                {item.num}
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
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

          {/* heading */}
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
              AI của{" "}
              <span className="text-orange-600 font-semibold">
                Quốc Việt
              </span>{" "}
              cung cấp khả năng phát hiện chủ động, giúp giảm đáng kể nguy cơ leo thang
              xung đột và cải thiện tốc độ phản ứng của đội ngũ an ninh.
            </p>
          </motion.div>


          {/* cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Độ chính xác Phát hiện Sớm",
                value: "89%",
                desc: "Xác định hành vi hung hăng giai đoạn đầu bằng cách phân tích cử chỉ, tốc độ di chuyển và tư thế.",
              },
              {
                title: "Giảm Sự cố Leo thang",
                value: "72%",
                desc: "Giảm tỷ lệ leo thang thành đánh nhau nhờ phát hiện sớm các mẫu hành vi thù địch.",
              },
              {
                title: "Tăng Tốc độ Phản hồi",
                value: "4X",
                desc: "Giảm thời gian phản ứng của lực lượng an ninh nhờ cảnh báo thời gian thực.",
              },
              {
                title: "Phát hiện Căng thẳng Tiền xung đột",
                value: "3X",
                desc: "Gắn cờ căng thẳng trước khi xảy ra bạo lực bằng cách theo dõi chen chúc, tiến lên đột ngột và tương tác lớn tiếng.",
              },
              {
                title: "Giảm Cảnh báo Sai",
                value: "65%",
                desc: "AI thích ứng giúp giảm cảnh báo sai bằng cách học các xu hướng chuyển động đặc thù tại từng địa điểm.",
              },
              {
                title: "Phối hợp Nhóm",
                value: "58%",
                desc: "Cải thiện phối hợp đội phản ứng qua dashboard hợp nhất với cảnh báo trực tiếp và dấu thời gian.",
              },
              {
                title: "Phân tích Sự cố",
                value: "5X",
                desc: "Rút ngắn thời gian điều tra bằng cách tự động gắn thẻ và phát lại tức thì các sự kiện bạo lực.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="bg-orange-50 border border-orange-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300"
              >
                {/* big stat */}
                <div className="text-5xl font-black text-orange-500 mb-5">
                  {item.value}
                </div>

                {/* title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
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
                Khu mỏ Ghana Giảm 62% Xô xát tại Nơi làm việc
              </h2>

              <div className="text-orange-100 text-lg relative z-10">
                <span className="font-semibold">Ngành:</span> Khai thác mỏ (Mining)
                <span className="mx-4">•</span>
                <span className="font-semibold">Địa điểm:</span> Ghana, Châu Phi
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
                    Một nhà điều hành khai thác mỏ lớn phải đối mặt với các cuộc
                    xô xát lặp đi lặp lại giữa các công nhân, đặc biệt trong ca đêm
                    và giờ ăn. Địa điểm xa xôi cùng số lượng nhân viên giám sát hạn
                    chế khiến việc can thiệp kịp thời trở nên vô cùng khó khăn.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Giải pháp của Quốc Việt
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Triển khai mô-đun{" "}
                    <span className="font-semibold text-orange-600">
                      Phát hiện Đánh nhau & Bạo lực
                    </span>{" "}
                    trên hệ thống CCTV hiện có, giúp AI giám sát hành vi theo thời gian
                    thực và gửi cảnh báo ngay khi phát hiện các dấu hiệu hung hăng,
                    căng thẳng hoặc xung đột leo thang.
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
                    62%
                  </div>

                  <p className="text-gray-800 text-lg font-medium">
                    Giảm các vụ xô xát vật lý, hành vi hung hăng và gián đoạn hoạt động liên quan đến xung đột
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
                    3 THÁNG
                  </div>

                  <p className="text-gray-800 text-lg font-medium">
                    Thời gian để đạt hiệu quả rõ rệt sau khi triển khai AI
                  </p>
                </motion.div>

              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

   {/* CTA SECTION */}
<section className="py-20 bg-slate-900 border-t border-white/10">
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

        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Đừng để những bất đồng leo thang thành bạo lực nghiêm trọng.
        </h2>

        <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Khám phá cách{" "}
          <span className="text-orange-400 font-semibold">
            Quốc Việt Fighting & Violence Detection
          </span>{" "}
          có thể tăng tốc phản ứng lên gấp 4 lần và giảm tỷ lệ leo thang sự cố tới{" "}
          <span className="text-orange-400 font-bold">72%</span> bằng cách sử dụng hệ thống CCTV hiện có của bạn.
        </p>

      </div>

      {/* BUTTON */}
      <div className="pt-4">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 15px 35px rgba(249,115,22,0.35)"
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

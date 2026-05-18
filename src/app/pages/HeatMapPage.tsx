import React from 'react';
import { motion, type Transition } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  Users,
  Map as MapIcon,
  TrendingUp,
  Zap,
  ShieldAlert,
  Eye,
  BarChart3,
  Facebook,
  Linkedin,
  Activity,
  UserCheck
} from 'lucide-react';

import heatMapImg from '@/imports/image_8.jpg';
import heatMapVideo2 from '@/app/asset/demo_11.mp4';
import heatMapVideo from '@/app/asset/demo_12.mp4';
import logoImg from '@/imports/logo.png';

interface HeatMapPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const fRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export function HeatMapPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: HeatMapPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workforce Heat Maps | Quốc Việt";
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
      <div className="bg-white py-20 border-b border-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-50 rounded-full">
                <MapIcon className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#1A202C] mb-8 tracking-tight uppercase">
              WORKFORCE HEAT MAPS
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Bản đồ Nhiệt - Tối Ưu Hóa Nhân Lực: Trực quan hóa mật độ và luồng di chuyển của nhân sự để tối ưu hóa việc phân bổ lao động, cải thiện quy trình vận hành và đảm bảo an toàn tối đa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* SECTION I: GIẢI PHÁP */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div {...fLeft} className="space-y-6">
            <div>
              <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
                I. Giải pháp là gì?
              </h2>

              <div className="h-1 w-20 bg-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-gray-900 text-2xl block mb-3">
                  Workforce Heat Map (WHM)
                </span>
                là giải pháp{" "}
                <span className="font-semibold">Computer Vision</span> của{" "}
                <span className="text-orange-600 font-semibold">Quốc Việt</span>,
                giúp chuyển đổi cơ sở hạ tầng CCTV hiện có thành một{" "}
                <span className="font-semibold">
                  công cụ tình báo không gian mạnh mẽ
                </span>.
                Hệ thống sử dụng AI để phát hiện vật thể và theo dõi chuyển động,
                lập bản đồ quỹ đạo của công nhân theo thời gian thực nhằm trực quan
                hóa mật độ, nút thắt cổ chai và khu vực nhàn rỗi.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-[15px]">
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Cung cấp thông tin chi tiết chuyên sâu về sự di chuyển của lực lượng
                  lao động, hỗ trợ quản lý phân bổ nhân sự hiệu quả hơn.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Giảm tắc nghẽn và phát hiện các nút thắt vận hành thông qua phân tích
                  luồng di chuyển và mật độ tập trung.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Tạo bản đồ nhiệt bằng phân tích dữ liệu không gian-thời gian ở cấp
                  độ pixel, không cần GPS hoặc thiết bị đeo.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-orange-500 shrink-0" />
                <p>
                  Công cụ quan trọng cho các nhà lãnh đạo vận hành để theo dõi nơi
                  thời gian và hiệu quả bị mất bằng bản đồ nhiệt lực lượng lao động.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fRight} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white z-10">
              <ImageWithFallback
                src={heatMapImg}
                alt="Workforce Heat Map AI"
                className="w-full h-auto object-cover"
              />

              <div className="absolute top-4 right-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">
                LIVE: HEAT MAP ANALYSIS
              </div>
            </div>

            <div className="absolute -top-5 -right-5 w-full h-full bg-orange-50 rounded-3xl -z-0"></div>
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
              II. Tại sao WHMs lại quan trọng?
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-gray-700 text-lg max-w-5xl mx-auto">
              Việc phân bổ sai lực lượng lao động và quá tải là những rủi ro vô hình
              nhưng cực kỳ nghiêm trọng trên các công trường phức tạp, đặc biệt trong
              các ngành công nghiệp rủi ro cao.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quá tải ở khu vực làm việc hạn chế hoặc khu vực rủi ro cao.",
                icon: "⚠️",
                color: "border-red-500",
              },
              {
                title: "Thiếu nhân sự ở các khu vực nguy hiểm hoặc cô lập.",
                icon: "👷",
                color: "border-orange-500",
              },
              {
                title: "Công nhân nhàn rỗi hoặc lảng vảng trong quá trình chuyển ca.",
                icon: "⏳",
                color: "border-yellow-500",
              },
              {
                title: "Thiếu tầm nhìn theo thời gian thực về sự tập trung của công nhân.",
                icon: "👁️",
                color: "border-blue-500",
              },
              {
                title:
                  "Tắc nghẽn do sự can thiệp giữa các ngành nghề trong các khu vực dùng chung như thang máy hoặc hành lang.",
                icon: "🚧",
                color: "border-purple-500",
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
                <h3 className="font-bold text-gray-900 text-lg leading-relaxed">
                  {risk.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* NGUY CƠ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-14 bg-orange-50 border-l-4 border-orange-500 rounded-2xl p-8 max-w-5xl mx-auto text-left shadow-sm"
          >
            <h3 className="text-orange-600 font-bold text-lg mb-3">
              Nguy cơ
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Sự sai sót trong phân bổ một vài công nhân có thể dẫn đến năng suất thấp hơn,
              tắc nghẽn, hoặc vi phạm an toàn nghiêm trọng. AI của Quốc Việt giúp phát hiện
              các cụm nhàn rỗi, khu vực quá tải hoặc sự phân tán rủi ro trước khi chúng dẫn
              đến tai nạn.
            </p>
          </motion.div>
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
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100 p-4">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[680px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
          >
            <source src={heatMapVideo2} type="video/mp4" />
          </video>
        </div>

        {/* floating badge */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute top-8 right-8 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
        >
          LIVE HEAT MAP
        </motion.div>
      </motion.div>


      {/* TEXT RIGHT */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
            III. Ứng dụng Giải pháp Cần thiết nhất ở đâu?
          </h2>

          <div className="h-1 w-24 bg-orange-500 rounded-full mb-6"></div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Dữ liệu về chuyển động của công nhân là rất quan trọng ở những nơi
            hoạt động thâm dụng lao động gặp phải bố cục phức tạp.
          </p>
        </motion.div>

        <div className="space-y-5">
          {[
            {
              icon: "📦",
              title: "Kho hàng & Trung tâm Lưu trữ",
              content:
                "Theo dõi mật độ dòng chảy ở các khu vực bốc dỡ hoặc phân loại, giúp đội ngũ hậu cần điều chỉnh tuyến đường và nhân sự để giảm tắc nghẽn.",
            },
            {
              icon: "🚢",
              title: "Xưởng đóng tàu & Cơ sở Kỹ thuật nặng",
              content:
                "Trực quan hóa sự phân bố không gian, làm nổi bật sự tập trung (clustering) và hỗ trợ duy trì khoảng cách an toàn.",
            },
            {
              icon: "🏗️",
              title: "Công trường Xây dựng",
              content:
                "Đưa ra cảnh báo quá tải tức thì, giúp tối ưu hóa phân bổ nhân lực và đảm bảo điều hướng công trường an toàn hơn.",
            },
            {
              icon: "🏭",
              title: "Sàn Sản xuất",
              content:
                "Theo dõi dòng chảy của công nhân qua các trạm, tiết lộ sự kém hiệu quả của bố cục và các khu vực chưa được sử dụng hết.",
            },
            {
              icon: "⛽",
              title: "Khu vực Dầu khí & Mỏ (Red Zones)",
              content:
                "Phát hiện quá tải theo thời gian thực gần các khu vực rủi ro cao, giúp nhóm EHS quản lý rủi ro và thực thi giao thức phân vùng.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ x: 6 }}
              className="bg-orange-50 p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl shrink-0">{item.icon}</div>

                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
              Workforce Heat Maps
            </span>{" "}
            sử dụng AI video analytics để trực quan hóa mật độ và mẫu
            chuyển động của nhân sự trên toàn công trường.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              s: "01",
              t: "Kết nối (Connect)",
              d: "AI kết nối trực tiếp với hệ thống IP Camera hoặc CCTV hiện có thông qua giao thức RTSP, không cần đeo thêm thiết bị cho nhân viên.",
            },
            {
              s: "02",
              t: "Ghi nhận (Capture)",
              d: "Hệ thống liên tục xử lý video trực tiếp để tạo bản đồ nhiệt động, phát hiện các điểm tắc nghẽn hoặc khu vực quá tải nhân sự.",
            },
            {
              s: "03",
              t: "Phân tích AI",
              d: "Trực quan hóa mật độ lao động theo thời gian thực, xác định các vùng có hoạt động thấp hoặc mẫu chuyển động không hiệu quả.",
            },
            {
              s: "04",
              t: "Kiểm soát (Control)",
              d: "Cung cấp thông tin chi tiết trên bảng điều khiển tập trung giúp giám sát viên tái cân bằng lao động và tối ưu hóa quy trình làm việc.",
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


      {/* VIDEO RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-4">
    
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-[720px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
    >
      <source src={heatMapVideo} type="video/mp4" />
    </video>

  </div>

  {/* alert badge */}
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: 2,
    }}
    className="absolute top-8 right-8 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg"
  >
    LIVE: HEAT MAP ANALYSIS
  </motion.div>

  {/* glow */}
  <div className="absolute -top-4 -right-4 w-full h-full bg-orange-500/10 rounded-[2.5rem] blur-xl -z-10"></div>
</motion.div>

    </div>
  </div>
</section>

      {/* SECTION V: TÁC ĐỘNG VÀ LỢI ÍCH CHÍNH */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              V. Tác động và Lợi ích Chính
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto mb-8"></div>

            <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
              Bản đồ nhiệt của Quốc Việt cung cấp thông tin chi tiết dự đoán và trí
              tuệ không gian để ngăn chặn sự cố trước khi chúng xảy ra.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                value: "90%",
                title: "Giảm Sự cố Khu vực Đỏ",
                desc: "Giảm 90% xâm nhập Khu vực Đỏ (Red Zone) và sự cố quan trọng.",
              },
              {
                value: "80%",
                title: "Giảm Lỗi Phân bổ",
                desc: "Loại bỏ 80% lỗi thủ công trong việc sắp xếp lực lượng lao động bằng cách sử dụng theo dõi mật độ theo thời gian thực.",
              },
              {
                value: "10x",
                title: "Tối ưu hóa Tắc nghẽn",
                desc: "Giảm tắc nghẽn trong quá trình chuyển ca/chuyển đổi 10 lần bằng cách tối ưu hóa luồng vào/ra dựa trên mẫu lịch sử.",
              },
              {
                value: "52%",
                title: "Cải thiện An toàn Vùng Cần trục",
                desc: "Giảm 52% tắc nghẽn khi AI gắn cờ mật độ không an toàn gần khu vực cần trục.",
              },
              {
                value: "3x",
                title: "Tăng Tốc độ Phân tích",
                desc: "Phân tích nguyên nhân gốc rễ nhanh hơn 3 lần thông qua phát lại không gian của các sự cố.",
              },
              {
                value: "HSE",
                title: "Tuân thủ",
                desc: "Hỗ trợ tuân thủ các quy định HSE (Ví dụ: GCC) và giao thức Giấy phép Làm việc (PTW).",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl font-black text-orange-600 mb-4">
                  {item.value}
                </div>

                <p className="font-bold text-gray-900 text-lg mb-3">
                  {item.title}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION VI: CASE STUDY */}
      <section className="py-24 bg-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 font-bold text-xl uppercase tracking-wider mb-2">
              VI. Case Study
            </h2>

            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>

            <h3 className="text-3xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Lãnh đạo Năng lượng GCC Cắt giảm{" "}
              <span className="text-orange-600">90%</span> Quá tải
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-orange-100 p-10 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-10">

              {/* LEFT INFO */}
              <div className="space-y-8">

                <div>
                  <p className="text-sm font-semibold text-orange-600 mb-2">
                    NGÀNH
                  </p>
                  <p className="text-gray-800 font-medium">
                    Dầu khí (Oil & Gas)
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-orange-600 mb-2">
                    ĐỊA ĐIỂM
                  </p>
                  <p className="text-gray-800 font-medium">
                    GCC (Gulf Cooperation Council)
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-orange-600 mb-2">
                    VẤN ĐỀ
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Một công ty năng lượng lớn ở GCC phải đối mặt với tình trạng
                    quá tải lặp đi lặp lại gần các Khu vực Đỏ rủi ro cao
                    (như khu vực BOP, khu vực bàn quay). Tình trạng này gây ra
                    rủi ro va chạm và nghiền nát nghiêm trọng.
                  </p>
                </div>

              </div>

              {/* RIGHT INFO */}
              <div className="space-y-8">

                <div>
                  <p className="text-sm font-semibold text-orange-600 mb-2">
                    GIẢI PHÁP CỦA QUỐC VIỆT
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Công ty đã triển khai Mô-đun Workforce Heatmap của Quốc Việt
                    để trực quan hóa chuyển động của công nhân theo thời gian
                    thực và cảnh báo rủi ro tắc nghẽn.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                  <p className="text-sm font-semibold text-orange-600 mb-3">
                    TÁC ĐỘNG
                  </p>

                  <div className="text-6xl font-black text-orange-600 mb-4">
                    90%
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Trong vòng ba tháng, công ty đã báo cáo giảm{" "}
                    <span className="font-semibold">
                      90% xâm nhập Khu vực Đỏ
                    </span>{" "}
                    và không có sự cố nghiêm trọng nào trong các khu vực được
                    giám sát.
                  </p>

                  <p className="text-gray-700 leading-relaxed mt-4">
                    Bản đồ nhiệt lực lượng lao động đã hỗ trợ việc giám sát
                    Khu vực Đỏ và tuân thủ các quy định HSE của GCC.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
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
                Đừng để sự mơ hồ về vị trí của công nhân làm ảnh hưởng đến hiệu quả hoạt động và an toàn của bạn.
              </h2>

              <p className="text-gray-700 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Khám phá cách Quốc Việt Workforce Heat Map có thể tích hợp liền mạch với hệ thống CCTV hiện có của bạn để đạt được sự tối ưu hóa nguồn nhân lực dựa trên dữ liệu và quản lý an toàn không gian thông minh.
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

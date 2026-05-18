import React from 'react';
import { ChevronLeft, Home, Shield, Zap, Target, ArrowRight, Activity, Bell, Eye, Lock, ShieldAlert, Cpu } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImg from '@/imports/logo.png';
import safetyHeroImg from '@/imports/image_safety_one_million_hours.png';
import ppePreviewImg from '@/imports/image_1.jpg';
import fallDetectionImg from '@/imports/image_2.jpg';
import barrierImg from '@/imports/image_3.jpg';
import helmet from '@/imports/image_4.jpg';
import caution from '@/imports/image_5.jpg';
import overheadLoad from '@/imports/image_6.jpg';
import caution2 from '@/imports/image_7.jpg';
import heatMap from '@/imports/image_8.jpg';
import fenceMonitoring from '@/imports/image_9.jpg';
import weaponDetectionImg from '@/imports/image_10.jpg';
import theftPreventionImg from '@/imports/image_11.jpg';
import suspiciousPersonImg from '@/imports/image_12.jpg';
import violenceDetectionImg from '@/imports/image_13.jpg';
import { motion } from 'framer-motion';
import { PageFooter } from '../components/PageFooter';
import { SafetyHeader } from '../components/SafetyHeader';

interface SafetyVideoAnalyticsPageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const fScale = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const ModuleSection = ({ 
  id, title, desc, benefits, img, isReverse, onClick 
}: { 
  id: string, title: string, desc: string, benefits: {t: string, c: string}[], img: any, isReverse?: boolean, onClick: () => void 
}) => (
  <motion.section 
    id={id}
    {...fUp} 
    className="py-24 border-b border-gray-50 last:border-0"
  >
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
      
      <div className={`space-y-8 ${isReverse ? 'lg:order-2' : ''}`}>
        
        
        <h2 
          onClick={onClick}
          className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tighter cursor-pointer hover:text-orange-500 transition-colors"
        >
          {title}
        </h2>
        
        <p className="text-xl text-gray-500 leading-relaxed font-medium">
          {desc}
        </p>

        <div className="grid gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: isReverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{b.t}</h4>
                <p className="text-gray-500 text-sm">{b.c}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          onClick={onClick}
          className="flex items-center gap-2 text-orange-500 font-black uppercase tracking-widest text-xs group"
        >
          Explore Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className={`relative ${isReverse ? 'lg:order-1' : ''}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-[3rem] blur-3xl opacity-50" />
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
          <div className="rounded-[2.5rem] overflow-hidden h-full">
            <ImageWithFallback
              src={img}
              alt={title}
              className="w-full aspect-[4/3] object-cover hover:scale-110 transition-transform duration-1000"
            />
          </div>
          {/* Module Status Badge */}
          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-gray-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-tighter text-gray-900">Active Monitoring</span>
          </div>
        </div>
      </motion.div>

    </div>
  </motion.section>
);

export function SafetyVideoAnalyticsPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: SafetyVideoAnalyticsPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Safety Video Analytics | Quốc Việt";
  }, []);

  const modules = [
    {
      id: 'ppe',
      title: "Phát Hiện Bảo Hộ Lao Động (PPE)",
      desc: "Giải pháp của chúng tôi đảm bảo tuân thủ đầy đủ các quy định về trang bị bảo hộ cá nhân (PPE) một cách liên tục, 24/7. Hệ thống tự động giám sát việc sử dụng mũ bảo hiểm, dây đai an toàn và các thiết bị cần thiết khác, từ đó giúp ngăn ngừa hiệu quả các trường hợp vi phạm và rủi ro tai nạn lao động.",
      benefits: [
        { t: "Nâng cao an toàn lao động", c: "Tự động phát hiện và cảnh báo các vi phạm về PPE ngay lập tức, đảm bảo môi trường làm việc an toàn hơn cho mọi công nhân." },
        { t: "Tối ưu hóa quy trình", c: "Giúp loại bỏ quy trình kiểm tra an toàn thủ công tốn thời gian, giúp doanh nghiệp tiết kiệm chi phí và nguồn lực đáng kể." },
        { t: "Giảm thiểu rủi ro", c: "Chủ động phát hiện và cảnh báo các hành vi không tuân thủ, từ đó giảm thiểu đáng kể nguy cơ xảy ra tai nạn nghiêm trọng." }
      ],
      img: ppePreviewImg,
      page: 'ppeDetection'
    },
    {
      id: 'edge',
      title: "Phát Hiện Thiếu Hàng Rào Bảo Vệ",
      desc: "Giải pháp của chúng tôi tự động xác định và cảnh báo các rủi ro té ngã từ độ cao theo thời gian thực. Hệ thống sẽ ngay lập tức nhận diện công nhân hoặc thiết bị đang tiến gần đến các khu vực không an toàn như mép giàn giáo, rìa mái nhà hoặc các cạnh không có rào chắn bảo vệ.",
      benefits: [
        { t: "Nâng cao an toàn lao động", c: "Chủ động phòng ngừa tai nạn, giảm thiểu đáng kể nguy cơ té ngã cho công nhân làm việc trên cao." },
        { t: "Giám sát thông minh", c: "Tự động theo dõi các khu vực nguy hiểm, giảm sự phụ thuộc vào việc giám sát thủ công và nâng cao hiệu quả quản lý an toàn." },
        { t: "Đảm bảo tuân thủ", c: "Giúp doanh nghiệp dễ dàng tuân thủ các quy định nghiêm ngặt về an toàn lao động, tránh những rủi ro pháp lý không đáng có." }
      ],
      img: fallDetectionImg,
      page: 'unguardedEdgeDetection',
      isReverse: true
    },
    {
       id: 'barricade',
       title: "Giám Sát Rào Chắn Nguy Hiểm",
       desc: "Hệ thống của chúng tôi cung cấp cảnh báo tức thì ngay khi phát hiện rào chắn tại khu vực nguy hiểm bị thiếu, di dời hoặc hư hỏng. Việc cảnh báo được thực hiện chỉ trong vòng 3 giây, đảm bảo phản ứng nhanh chóng để ngăn ngừa các rủi ro tiềm tàng.",
       benefits: [
         { t: "Phòng ngừa tai nạn", c: "Chủ động cảnh báo khi có nguy cơ, ngăn chặn hiệu quả các vụ té ngã hoặc xâm nhập trái phép vào khu vực nguy hiểm." },
         { t: "Tối ưu hóa an ninh", c: "Nâng cao khả năng giám sát an ninh tại các công trường, đảm bảo các khu vực giới hạn luôn được bảo vệ." },
         { t: "Phản ứng tức thì", c: "Cảnh báo gần như ngay lập tức giúp đội ngũ an toàn có thể khắc phục sự cố kịp thời, giảm thiểu tối đa rủi ro." }
       ],
       img: barrierImg,
       page: 'missingBarricadeDetection'
    },
    {
      id: 'fall',
      title: "Phát Hiện Té Ngã - Cứu Hộ",
      desc: "Giải pháp của chúng tôi cung cấp khả năng phản ứng tức thì với các vụ té ngã từ độ cao, một trong những nguyên nhân tử vong hàng đầu trong ngành xây dựng. Hệ thống tự động nhận diện sự thay đổi tư thế đột ngột hoặc sự sụp đổ của công nhân, từ đó kích hoạt cảnh báo khẩn cấp ngay lập tức.",
      benefits: [
        { t: "Phản ứng khẩn cấp", c: "Đảm bảo đội ngũ cứu hộ có thể tiếp cận hiện trường nhanh nhất có thể, tối đa hóa cơ hội cứu sống nạn nhân." },
        { t: "Bảo vệ toàn diện", c: "Giám sát liên tục để phát hiện các rủi ro, ngay cả trong những môi trường làm việc phức tạp nhất, nơi việc giám sát thủ công gặp nhiều khó khăn." },
        { t: "An tâm làm việc", c: "Giúp công nhân và ban quản lý dự án yên tâm hơn khi biết rằng có một hệ thống tự động luôn giám sát và sẵn sàng hỗ trợ trong tình huống khẩn cấp." }
      ],
      img: helmet,
      page: 'fallDetection',
      isReverse: true
    },
    {
      id: 'proximity',
      title: "Cảnh Báo Tiếp Cận Nguy Hiểm",
      desc: "Giải pháp của chúng tôi giải quyết các điểm mù nguy hiểm bằng cách thiết lập các vùng an toàn ảo xung quanh máy móc hạng nặng như xe nâng, xe xúc. Hệ thống tự động theo dõi khoảng cách giữa con người và máy móc, đưa ra cảnh báo tức thì khi phát hiện có người hoặc thiết bị tiến vào vùng nguy hiểm.",
      benefits: [
        { t: "Phòng tránh va chạm", c: "Chủ động ngăn ngừa các sự cố va chạm giữa người và máy móc, bảo vệ an toàn cho công nhân." },
        { t: "Nâng cao nhận thức an toàn", c: "Cảnh báo kịp thời giúp người điều khiển máy và công nhân xung quanh nhận thức rõ hơn về rủi ro, từ đó cải thiện quy trình làm việc an toàn." },
        { t: "Giảm thiểu rủi ro", c: "Giúp doanh nghiệp quản lý hiệu quả các khu vực có mật độ hoạt động cao, giảm thiểu đáng kể các tai nạn không mong muốn." }
      ],
      img: caution,
      page: 'proximityDetection'
    },
    {
      id: 'load',
      title: "Giám Sát Vật Treo Trên Cao",
      desc: "Giải pháp của chúng tôi được thiết kế để ngăn ngừa mối nguy hiểm nghiêm trọng từ các vật thể rơi. Hệ thống tự động phát hiện và cảnh báo tức thì khi có công nhân xâm nhập vào khu vực nguy hiểm bên dưới cần trục hoặc tải trọng đang được treo.",
      benefits: [
        { t: "Ngăn ngừa tai nạn", c: "Chủ động bảo vệ công nhân khỏi nguy cơ bị vật thể rơi trúng, một trong những tai nạn nghiêm trọng nhất tại công trường." },
        { t: "Tăng cường an toàn", c: "Đảm bảo không gian làm việc luôn được giám sát, giúp duy trì kỷ luật và nâng cao nhận thức về an toàn cho toàn bộ công nhân." },
        { t: "Tối ưu hóa quy trình", c: "Hỗ trợ quản lý khu vực làm việc phức tạp một cách hiệu quả, giúp các hoạt động nâng hạ diễn ra an toàn và suôn sẻ." }
      ],
      img: overheadLoad,
      page: 'suspendedLoadMonitoring',
      isReverse: true
    },
    {
      id: 'intrusion',
      title: "Xâm Nhập Khu Vực Cấm",
      desc: "Giải pháp của chúng tôi thực thi kiểm soát ra vào khu vực nguy hiểm một cách gần như tức thời. Hệ thống sẽ phát hiện và cảnh báo ngay lập tức bằng ánh sáng và âm thanh khi có nhân viên xâm nhập vào các khu vực bị hạn chế (Red Zone), giúp đảm bảo an ninh và an toàn tuyệt đối.",
      benefits: [
        { t: "Kiểm soát truy cập hiệu quả", c: "Ngăn chặn các hành vi xâm nhập trái phép vào khu vực nguy hiểm, bảo vệ cả công nhân lẫn tài sản." },
        { t: "Cảnh báo tức thì", c: "Tốc độ phản hồi chỉ trong 1 giây giúp ngăn ngừa rủi ro ngay từ khi mới phát sinh, tránh được các tai nạn không đáng có." },
        { t: "Tăng cường kỷ luật", c: "Hỗ trợ duy trì sự tuân thủ nghiêm ngặt các quy định về an toàn, tạo ra một môi trường làm việc có ý thức cao hơn." }
      ],
      img: caution2,
      page: 'intrusionDetection'
    },
    {
      id: 'heatmap',
      title: "Heat Map - Trí Tuệ Không Gian",
      desc: "Giải pháp này sử dụng trí tuệ không gian để trực quan hóa luồng di chuyển và mật độ làm việc của công nhân. Thông qua bản đồ nhiệt, bạn có thể dễ dàng nhận biết các khu vực có quá nhiều người, giúp tối ưu hóa việc phân bổ nhân lực và đảm bảo an toàn tại những khu vực nhạy cảm.",
      benefits: [
        { t: "Quản lý hiệu quả", c: "Giúp ban quản lý hiểu rõ hơn về cách công nhân di chuyển và tập trung, từ đó sắp xếp lại quy trình làm việc để đạt năng suất cao nhất." },
        { t: "Ngăn ngừa quá tải", c: "Chủ động phát hiện và cảnh báo các khu vực có mật độ lao động quá cao, giảm thiểu rủi ro an toàn và sự cố không đáng có." },
        { t: "Hỗ trợ ra quyết định", c: "Cung cấp dữ liệu trực quan giúp nhà quản lý đưa ra các quyết định chính xác về việc bố trí và điều phối lực lượng lao động." }
      ],
      img: heatMap,
      page: 'heatMap',
      isReverse: true
    },
    {
      id: 'peripheral',
      title: "Phát Hiện Xâm Nhập Bất Hợp Pháp",
      desc: "Giải pháp này cung cấp lớp phòng thủ 24/7 cho toàn bộ ranh giới công trường. Hệ thống tự động phát hiện mọi hành vi leo trèo, giả mạo hoặc xâm nhập trái phép, đảm bảo khu vực làm việc luôn được bảo vệ nghiêm ngặt.",
      benefits: [
        { t: "An ninh toàn diện", c: "Giúp doanh nghiệp bảo vệ tài sản và công nhân khỏi các mối đe dọa từ bên ngoài một cách hiệu quả và liên tục." },
        { t: "Phản ứng nhanh", c: "Cảnh báo ngay lập tức giúp đội ngũ an ninh có thể can thiệp kịp thời, ngăn chặn các sự cố trước khi chúng xảy ra." },
        { t: "Tăng cường kiểm soát", c: "Hỗ trợ quản lý chặt chẽ khu vực chu vi, giảm thiểu rủi ro từ những người không có thẩm quyền." }
      ],
      img: fenceMonitoring,
      page: 'peripheralIntrusion'
    },
    {
      id: 'weapon',
      title: "Phát Hiện Vũ Khí & Mối Đe Dọa",
      desc: "Giải pháp này sử dụng công nghệ AI tiên tiến để chủ động nhận dạng và phát hiện các mối đe dọa tiềm ẩn. Hệ thống có khả năng tự động nhận diện súng, dao và các vật thể nguy hiểm khác, giúp ngăn chặn rủi ro an ninh ngay từ khi mới phát sinh.",
      benefits: [
        { t: "Tăng cường an ninh", c: "Chủ động phát hiện vũ khí giúp bảo vệ công nhân và tài sản khỏi các mối đe dọa bạo lực, đảm bảo một môi trường làm việc an toàn." },
        { t: "Phản ứng nhanh chóng", c: "Cảnh báo tức thì cho phép đội ngũ an ninh phản ứng nhanh chóng, giảm thiểu nguy cơ xảy ra các sự cố nghiêm trọng." },
        { t: "Giám sát hiệu quả", c: "Hệ thống tự động giám sát, giảm sự phụ thuộc vào con người và nâng cao hiệu quả của các biện pháp an ninh tổng thể." }
      ],
      img: weaponDetectionImg,
      page: 'weaponDetection',
      isReverse: true
    },
    {
      id: 'theft',
      title: "Chống Trộm Cắp Tài Sản",
      desc: "Giải pháp của chúng tôi được thiết kế để bảo vệ các tài sản có giá trị cao và giảm thiểu tổn thất. Hệ thống tự động phát hiện các hành vi đáng ngờ như truy cập trái phép, giả mạo thiết bị, hoặc các tư thế che giấu đồ vật, giúp ngăn chặn hành vi trộm cắp ngay từ đầu.",
      benefits: [
        { t: "Bảo vệ tài sản", c: "Giúp doanh nghiệp bảo vệ hiệu quả các thiết bị, vật tư và tài sản có giá trị khỏi nguy cơ bị mất cắp." },
        { t: "Cảnh báo sớm", c: "Cung cấp cảnh báo tức thì, cho phép đội ngũ an ninh phản ứng kịp thời và ngăn chặn các sự cố trộm cắp xảy ra." },
        { t: "Tăng cường an ninh", c: "Giảm sự phụ thuộc vào giám sát thủ công, đảm bảo khu vực làm việc luôn được theo dõi chặt chẽ, 24/7." }
      ],
      img: theftPreventionImg,
      page: 'theftDetection'
    },
    {
      id: 'loitering',
      title: "Phát Hiện Lảng Vảng",
      desc: "Giải pháp này sử dụng công nghệ phân tích hành vi để ngăn chặn các mối đe dọa tiềm ẩn. Hệ thống sẽ tự động gắn cờ và cảnh báo khi phát hiện sự hiện diện bất thường hoặc hành vi nán lại quá lâu của một người hoặc nhóm người tại khu vực được giám sát.",
      benefits: [
        { t: "Phòng ngừa sớm", c: "Chủ động phát hiện các hành vi khả nghi trước khi chúng có thể dẫn đến trộm cắp, phá hoại hoặc xâm nhập trái phép." },
        { t: "Tối ưu hóa phản ứng", c: "Giảm thời gian điều tra và phản ứng với các sự cố tiềm ẩn một cách hiệu quả hơn." },
        { t: "Giám sát thông minh", c: "Giảm thiểu cảnh báo sai và cho phép nhân viên an ninh tập trung vào các sự kiện thực sự quan trọng, nâng cao hiệu quả giám sát tổng thể." }
      ],
      img: suspiciousPersonImg,
      page: 'loiteringDetection',
      isReverse: true
    },
    {
      id: 'violence',
      title: "Phát Hiện Đánh Nhau & Bạo Lực",
      desc: "Giải pháp này giúp can thiệp sớm để ngăn chặn các xung đột leo thang. Hệ thống sử dụng công nghệ phân tích hành vi để nhận diện những dấu hiệu hung hăng ban đầu như tư thế cơ thể hoặc các chuyển động đột ngột, từ đó phát hiện nguy cơ bạo lực trước khi nó xảy ra.",
      benefits: [
        { t: "Ngăn chặn xung đột", c: "Chủ động cảnh báo khi có dấu hiệu căng thẳng, giúp nhân viên an ninh can thiệp kịp thời, tránh các vụ xô xát không mong muốn." },
        { t: "Bảo vệ môi trường làm việc", c: "Tạo ra một không gian làm việc an toàn, nơi mọi người đều cảm thấy được bảo vệ khỏi các hành vi bạo lực." },
        { t: "Tăng cường an ninh", c: "Hỗ trợ đội ngũ an ninh giám sát hiệu quả hơn, đặc biệt tại các khu vực nhạy cảm, giảm thiểu các sự cố liên quan đến bạo lực." }
      ],
      img: violenceDetectionImg,
      page: 'fightingDetection'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <SafetyHeader
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-48 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full text-xs font-black uppercase tracking-widest mb-10 shadow-2xl"
          >
            <Activity className="w-4 h-4 text-orange-500" />
            AI Video Analytics Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8"
          >
            Giám sát thông minh <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">An toàn tuyệt đối.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
          >
            Hệ thống AI tự động phân tích dữ liệu video thời gian thực, giúp nhà máy của bạn đạt đến chuẩn mực an toàn cao nhất thế giới.
          </motion.p>

          <motion.div
            {...fScale}
            className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white group"
          >
            <img
              src={safetyHeroImg}
              alt="Safety Hero"
              className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <div className="text-left space-y-2">
                <div className="text-orange-500 font-black text-xs uppercase tracking-widest">Tiêu chuẩn toàn cầu</div>
                <div className="text-3xl font-black text-white tracking-tight">1,000,000 Giờ làm việc an toàn</div>
              </div>
              <div className="hidden md:flex gap-4">
               
                  
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Detailed Modules */}
      <div className="container mx-auto px-4">
        {modules.map((m, i) => (
          <ModuleSection 
            key={i}
            id={m.id}
            title={m.title}
            desc={m.desc}
            benefits={m.benefits}
            img={m.img}
            isReverse={m.isReverse}
            onClick={() => setCurrentPage(m.page)}
          />
        ))}
      </div>

      <PageFooter setCurrentPage={setCurrentPage} hideOtherSolutions={true} />
    </div>
  );
}

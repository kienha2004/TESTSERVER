import React, { useEffect, useState } from 'react';
import { Monitor, FileText, BarChart3, Shield, Info, BookOpen, Facebook, Linkedin, ArrowRight, Sparkles, Zap, Target, Menu, X, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImg from '../../imports/logo.png';
import bannerAboutImg from '../../imports/banner_about_us_image.jpg';
import { motion, AnimatePresence } from "framer-motion";
import { SafetyDropdown } from '../components/SafetyDropdown';
import { PageFooter } from '../components/PageFooter';

interface HomePageProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const fUp: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function HomePage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: HomePageProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSafetyOpen, setIsMobileSafetyOpen] = useState(false);

  const safetyItems = [
    { label: 'PPE Detection', icon: '🦺', page: 'ppeDetection' },
    { label: 'Unguarded Edge Detection', icon: '🚧', page: 'unguardedEdgeDetection' },
    { label: 'Missing Barricade Detection', icon: '🚨', page: 'missingBarricadeDetection' },
    { label: 'Fall Detection', icon: '🤕', page: 'fallDetection' },
    { label: 'Proximity Detection & Warning', icon: '⚠️', page: 'proximityDetection' },
    { label: 'Work Under Suspended Load Monitoring', icon: '🏗️', page: 'suspendedLoadMonitoring' },
    { label: 'Unauthorized Intrusion Detection', icon: '🏢', page: 'intrusionDetection' },
    { label: 'Workforce Heat Maps', icon: '🗺️', page: 'heatMap' },
    { label: 'Perimeter Intrusion Detection', icon: '🛡️', page: 'peripheralIntrusion' },
    { label: 'Weapon Detection', icon: '🔫', page: 'weaponDetection' },
    { label: 'Theft Detection', icon: '🔒', page: 'theftDetection' },
    { label: 'Loitering Detection', icon: '🚶', page: 'loiteringDetection' },
    { label: 'Fighting & Violence Detection', icon: '🤼', page: 'fightingDetection' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Quốc Việt | Digital Excellence";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">

      {/* Dynamic Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-all group"
          >
            <div className="p-1.5 bg-orange-50 rounded-xl group-hover:rotate-12 transition-transform">
              <ImageWithFallback src={logoImg} alt="Logo" className="h-8 w-auto" />
            </div>
            <span className="font-black text-xl tracking-tighter text-gray-900">
              QUỐC VIỆT <span className="text-orange-500 underline decoration-2 underline-offset-4">DIGITIZATION</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 lg:gap-10 text-sm font-bold items-center text-gray-600">
            <SafetyDropdown
              setCurrentPage={setCurrentPage}
              showSafetyDropdown={showSafetyDropdown}
              setShowSafetyDropdown={setShowSafetyDropdown}
              dropdownRef={dropdownRef}
            />

            {['E-Forms', 'Mixing Control', 'Case Studies', 'About Us'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'E-Forms') setCurrentPage('eForm');
                  if (item === 'About Us') setCurrentPage('aboutUs');
                }}
                className="hover:text-orange-500 transition-colors relative group uppercase tracking-widest text-[11px] shrink-0"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('demoForm')}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-black hover:bg-orange-500 transition-colors shadow-lg shadow-gray-200 shrink-0 ml-2"
            >
              Get Started
            </motion.button>
          </nav>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5 max-h-[80vh] overflow-y-auto">
                {/* Safety Accordion */}
                <div className="border-b border-gray-50 pb-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentPage('safetyVideoAnalytics');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left font-black text-gray-900 text-xs uppercase tracking-widest hover:text-orange-500 transition-colors"
                    >
                      Safety Video Analytics
                    </button>
                    <button
                      onClick={() => setIsMobileSafetyOpen(!isMobileSafetyOpen)}
                      className="p-1 text-gray-500 hover:text-orange-500 transition-colors"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileSafetyOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isMobileSafetyOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 pl-4 flex flex-col gap-3 border-l border-orange-200 overflow-hidden"
                      >
                        {safetyItems.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentPage(item.page);
                              setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-3 py-1.5 text-left text-xs font-semibold text-gray-600 hover:text-orange-500 transition-colors"
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other menu items */}
                {['E-Forms', 'Mixing Control', 'Case Studies', 'About Us'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      if (item === 'E-Forms') setCurrentPage('eForm');
                      if (item === 'About Us') setCurrentPage('aboutUs');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left font-black text-gray-900 text-xs uppercase tracking-widest hover:text-orange-500 transition-colors border-b border-gray-50 pb-4"
                  >
                    {item}
                  </button>
                ))}

                {/* Get Started Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setCurrentPage('demoForm');
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-gray-900 text-white w-full py-4 rounded-full text-center text-xs uppercase tracking-widest font-black hover:bg-orange-500 transition-colors shadow-lg shadow-gray-200"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -150, 0],
              y: [0, -100, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px]"
          />
        </div>

        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center space-y-10">


            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter"
            >
              Giải pháp số cho sự phát triển <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500">bền vững.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Chúng tôi cam kết mang đến những giải pháp công nghệ tiên tiến nhất, giúp doanh nghiệp tối ưu hóa quy trình và bứt phá trong kỷ nguyên số.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('demoForm')}
                className="group relative bg-orange-500 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-orange-200 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span>Bắt đầu ngay</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <button
                onClick={() => setCurrentPage('safetyVideoAnalytics')}
                className="text-gray-900 font-bold hover:text-orange-500 transition-colors flex items-center gap-2 px-6 py-3"
              >
                Xem các giải pháp AI
              </button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Vision & Mission Section */}
      <section className="py-32 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-100 rounded-full -z-10 animate-pulse" />

              <div className="rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <ImageWithFallback
                  src={bannerAboutImg}
                  alt="About Quốc Việt"
                  className="w-full aspect-[4/5] object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-12">
              <motion.div {...fUp}>
                <h2 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4">
                  Our DNA
                </h2>

                <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-none mb-8">
                  Kiến tạo tương lai số cùng doanh nghiệp Việt.
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Tại <span className="font-semibold text-gray-900">QUỐC VIỆT</span>,
                  chúng tôi tin rằng công nghệ chính là chìa khóa để mở ra những tiềm năng vô hạn cho doanh nghiệp.
                  Sứ mệnh của chúng tôi không chỉ dừng ở việc cung cấp giải pháp, mà là đồng hành cùng các tổ chức
                  trên hành trình chuyển đổi số toàn diện — giúp tái định hình cách vận hành, thúc đẩy sáng tạo
                  và kiến tạo giá trị bền vững.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      t: "Tầm nhìn chiến lược",
                      d: "Xây dựng một hệ sinh thái số mạnh mẽ, nơi dữ liệu được khai thác thông minh, quy trình được tối ưu tự động và nguồn lực được phát huy tối đa, giúp doanh nghiệp Việt bứt phá trong kỷ nguyên 4.0.",
                    },
                    {
                      t: "Sứ mệnh đồng hành",
                      d: "Đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số toàn diện, cung cấp các giải pháp công nghệ linh hoạt, an toàn và bền vững nhằm tái định hình vận hành, thúc đẩy sáng tạo và kiến tạo giá trị lâu dài.",
                    },
                    {
                      t: "Cam kết phát triển",
                      d: "Với tinh thần đổi mới, tốc độ và trách nhiệm, QUỐC VIỆT cam kết trở thành đối tác tin cậy giúp khách hàng tiến nhanh hơn, vươn xa hơn và chinh phục những đỉnh cao mới.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * i }}
                      className="flex gap-6 group"
                    >
                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-6 h-6" />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {item.t}
                        </h4>
                        <p className="text-gray-500 leading-relaxed">
                          {item.d}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentPage("aboutUs")}
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-orange-50 hover:text-orange-600 transition-all flex items-center gap-3"
              >
                Tìm hiểu thêm
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 px-4 bg-orange-50/50 rounded-[4rem] mx-4 relative overflow-hidden border border-orange-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 max-w-4xl mx-auto"
          >
            <h2 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4">Các giải pháp của chúng tôi</h2>
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6">Giải pháp số hóa toàn diện</h3>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Chúng tôi cung cấp một loạt các giải pháp số hóa toàn diện, được thiết kế để đáp ứng mọi nhu cầu của doanh nghiệp.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "QR Code Management",
                desc: "Hệ thống quản lý, truy xuất nguồn gốc và kiểm soát kho bằng mã QR thông minh.",
                icon: <Monitor className="w-10 h-10" />,
                grad: "from-blue-500/20 to-blue-600/5"
              },
              {
                title: "E-Form Reports",
                desc: "Số hóa toàn bộ biểu mẫu giấy, báo cáo thời gian thực và phê duyệt đa cấp linh hoạt.",
                icon: <FileText className="w-10 h-10" />,
                grad: "from-emerald-500/20 to-emerald-600/5",
                onClick: () => setCurrentPage('eForm')
              },
              {
                title: "Safety Video AI",
                desc: "Sử dụng trí tuệ nhân tạo để giám sát an toàn lao động, phát hiện vi phạm 24/7.",
                icon: <Shield className="w-10 h-10" />,
                grad: "from-orange-500/20 to-orange-600/5",
                onClick: () => setCurrentPage('safetyVideoAnalytics')
              },
              {
                title: "Mixing Controls",
                desc: "Tự động hóa quy trình pha chế Syrup và kiểm soát chất lượng nguyên liệu.",
                icon: <BarChart3 className="w-10 h-10" />,
                grad: "from-purple-500/20 to-purple-600/5"
              },
              {
                title: "About Us",
                desc: "Tìm hiểu thêm về tầm nhìn, sứ mệnh và đội ngũ chuyên gia của Quốc Việt.",
                icon: <Info className="w-10 h-10" />,
                grad: "from-yellow-500/20 to-yellow-600/5",
                onClick: () => setCurrentPage('aboutUs')
              },
              {
                title: "Case Studies",
                desc: "Khám phá cách chúng tôi đã giúp hàng trăm doanh nghiệp thành công rực rỡ.",
                icon: <BookOpen className="w-10 h-10" />,
                grad: "from-pink-500/20 to-pink-600/5"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -12, backgroundColor: 'rgba(255,255,255,1)', borderColor: 'rgba(249, 115, 22, 0.2)' }}
                onClick={item.onClick}
                className="group p-10 rounded-[3rem] border border-gray-200 bg-white/60 backdrop-blur-md cursor-pointer transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-2xl"
              >
                <div className="relative z-10">
                  <div className="mb-8 p-4 bg-orange-50 text-orange-500 rounded-2xl inline-block group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-8">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter setCurrentPage={setCurrentPage} hideOtherSolutions={true} />
    </div>
  );
}

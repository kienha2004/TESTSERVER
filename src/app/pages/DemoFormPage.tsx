import React from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Sparkles, Send, Globe, ShieldCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImg from '../../imports/logo.png';
import { motion } from 'framer-motion';

interface DemoFormPageProps {
  setCurrentPage: (page: 'home' | 'demoForm' | 'eForm' | 'safetyVideoAnalytics') => void;
}

const fUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function DemoFormPage({ setCurrentPage }: DemoFormPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Yêu cầu Demo | Quốc Việt";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100">
      
      {/* Background Decorators */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px]" />
      </div>

      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-all group"
          >
            <div className="p-1.5 bg-orange-50 rounded-xl group-hover:rotate-12 transition-transform">
              <ImageWithFallback src={logoImg} alt="Logo" className="h-8 w-auto" />
            </div>
            <span className="font-black text-xl tracking-tighter text-gray-900 uppercase">QUỐC VIỆT</span>
          </button>
          
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-gray-500 font-bold hover:text-orange-500 px-6 py-2 rounded-full bg-gray-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </motion.button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-20 items-center">
          
          {/* Left Column: Visual & Info */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div {...fUp} className="space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Schedule a Demo
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">
                Trải nghiệm <span className="text-orange-500">AI Safety.</span>
              </h1>
              <p className="text-xl text-gray-500 font-medium leading-relaxed">
                Đăng ký ngay để được chuyên gia của chúng tôi tư vấn và trình diễn trực tiếp các giải pháp giám sát an toàn thông minh hàng đầu.
              </p>
            </motion.div>

            <motion.div 
              {...fUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {[
                { icon: <ShieldCheck className="text-emerald-500" />, t: "Bảo mật dữ liệu", d: "Cam kết bảo mật 100% dữ liệu khách hàng." },
                { icon: <Globe className="text-blue-500" />, t: "Hỗ trợ 24/7", d: "Đội ngũ kỹ thuật luôn sẵn sàng đồng hành." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-gray-50 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-gray-900 leading-none mb-2">{item.t}</h4>
                    <p className="text-gray-500 text-sm font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 bg-white p-8 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-30 -mr-24 -mt-24" />
            
            <form className="space-y-8 relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Họ và tên *</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full px-8 py-5 rounded-[2rem] border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-500 transition-all font-bold"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email công việc *</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full px-8 py-5 rounded-[2rem] border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-500 transition-all font-bold"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Số điện thoại *</label>
                  <input 
                    type="tel" 
                    placeholder="0983..." 
                    className="w-full px-8 py-5 rounded-[2rem] border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-500 transition-all font-bold"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Tên công ty *</label>
                  <input 
                    type="text" 
                    placeholder="Quốc Việt Co., Ltd" 
                    className="w-full px-8 py-5 rounded-[2rem] border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-500 transition-all font-bold"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Nhu cầu cụ thể</label>
                <textarea 
                  rows={4} 
                  placeholder="Mô tả nhu cầu của bạn..." 
                  className="w-full px-8 py-6 rounded-[2rem] border border-gray-100 bg-gray-50 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:bg-white focus:border-orange-500 transition-all font-bold resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 text-white font-black py-6 rounded-[2.5rem] shadow-2xl shadow-orange-200 flex items-center justify-center gap-4 text-xl tracking-tighter"
              >
                <span>Gửi yêu cầu Demo</span>
                <Send className="w-6 h-6" />
              </motion.button>
              
              <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                Chúng tôi sẽ phản hồi bạn trong 24h.
              </p>
            </form>
          </motion.div>

        </div>
      </main>

      <footer className="py-20 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center gap-12">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <span className="font-bold text-gray-900">+84.983.092.393</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-gray-900">customer_service@quocviet.com.vn</span>
            </div>
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2026 Quốc Việt Digitization Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

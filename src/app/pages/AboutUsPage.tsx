import React from 'react';
import { motion } from 'framer-motion';
import { SafetyHeader } from '../components/SafetyHeader';
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, ArrowRight, Globe, Users, Award } from 'lucide-react';
import logoImg from '../../imports/logo.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutUsPageProps {
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

export function AboutUsPage({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: AboutUsPageProps) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Về chúng tôi | Quốc Việt";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100">
      <SafetyHeader 
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-48 px-4 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 text-orange-500 rounded-full text-xs font-black uppercase tracking-widest mb-10"
            >
              <Globe className="w-3.5 h-3.5" />
              Global Reach, Local Impact
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none"
            >
                           Liên hệ với <span className="text-orange-500">chúng tôi.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed"
            >
              Nếu bạn có gì thắc mắc hãy liên hệ với chúng tôi qua địa chỉ.
            </motion.p>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="container mx-auto px-4 -mt-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <MapPin className="w-8 h-8" />, t: "Địa chỉ", d: "04 Cao Đức Lân, P.Bình Trưng, TP. Hồ Chí Minh, Việt Nam" },
              { icon: <Phone className="w-8 h-8" />, t: "Điện thoại", d: "0983.092.393" },
              { icon: <Mail className="w-8 h-8" />, t: "Email", d: "customer_service@quocviet.com.vn" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 text-center space-y-4 hover:shadow-orange-100 transition-all flex flex-col items-center justify-center h-full"
              >
                <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900">{item.t}</h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info & Form */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              
              <motion.div {...fUp} className="space-y-16">
                <div>
                  <h2 className="text-orange-500 font-black text-xs uppercase tracking-[0.3em] mb-4">Contact Hub</h2>
                  <h3 className="text-5xl font-black text-gray-900 tracking-tighter mb-10 leading-none">Kết nối với chúng tôi.</h3>
                  
                  <div className="space-y-10">
                    {[
                      { icon: <MapPin className="text-orange-500" />, t: "Trụ sở chính", d: "4 Cao Đức Lân, An Phú, TP. Thủ Đức, TP. HCM" },
                      { icon: <Phone className="text-blue-500" />, t: "Hotline", d: "0983.092.393" },
                      { icon: <Mail className="text-emerald-500" />, t: "Email", d: "customer_service@quocviet.com.vn" }
                    ].map((info, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{info.t}</h4>
                          <p className="text-gray-500 font-medium">{info.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-50 h-[400px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.147137965403!2d106.7348981757805!3d10.79975765886981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175269784333671%3A0x6d9f582046894d8d!2zNCBDYW8gxJDhu6ljIEzDom4sIEFuIFBow7osIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1715150000000!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Location"
                  ></iframe>
                </div>
              </motion.div>

              <motion.div 
                {...fUp}
                className="bg-gray-50/50 p-12 rounded-[4rem] border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-30" />
                
                <div className="mb-12 relative">
                  <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                    Gửi thắc mắc cho chúng tôi</h2>
                  <p className="text-gray-500 font-medium">Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>
                </div>

                <form className="space-y-8 relative">
                  <div className="grid gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Họ và tên</label>
                      <input 
                        type="text" 
                        placeholder="Nguyễn Văn A" 
                        className="w-full px-8 py-5 rounded-[2rem] border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all font-bold"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Email</label>
                        <input 
                          type="email" 
                          placeholder="a@gmail.com" 
                          className="w-full px-8 py-5 rounded-[2rem] border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all font-bold"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Số điện thoại</label>
                        <input 
                          type="tel" 
                          placeholder="09xx..." 
                          className="w-full px-8 py-5 rounded-[2rem] border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all font-bold"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Lời nhắn</label>
                      <textarea 
                        rows={4} 
                        placeholder="Tôi muốn tìm hiểu về giải pháp..." 
                        className="w-full px-8 py-6 rounded-[2rem] border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all font-bold resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-orange-500 text-white font-black py-6 rounded-[2.5rem] shadow-2xl shadow-orange-200 flex items-center justify-center gap-4 text-xl tracking-tighter"
                  >
                    <span>Gửi yêu cầu</span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-20 px-4 border-t border-gray-100">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <ImageWithFallback src={logoImg} alt="Logo" className="h-10 w-auto" />
            <h3 className="font-black text-2xl text-gray-900 tracking-tighter uppercase">QUỐC VIỆT</h3>
          </div>
          <div className="flex justify-center gap-4 mb-10">
            {[
              { icon: <Facebook className="w-5 h-5" />, href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" }
            ].map((s, i) => (
              <a key={i} href={s.href} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 hover:text-orange-500 shadow-sm border border-gray-100 transition-all">
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2026 Quốc Việt Digitization Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

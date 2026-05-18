import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  FileText,
  BarChart3,
  Shield,
  Info,
  BookOpen,
  Facebook,
  Linkedin
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/logo.png';

interface PageFooterProps {
  setCurrentPage: (page: any) => void;
  hideOtherSolutions?: boolean;
}

export function PageFooter({
  setCurrentPage,
  hideOtherSolutions
}: PageFooterProps) {
  return (
    <>
      {/* SECTION: OTHER SOLUTIONS */}
      {!hideOtherSolutions && (
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          className="py-24 px-4 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto relative z-10">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Khám Phá Các Giải Pháp Khác
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                Chúng tôi cung cấp một loạt các giải pháp số hóa toàn diện,
                được thiết kế để đáp ứng mọi nhu cầu của doanh nghiệp.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'QR Code',
                  desc: 'Giải pháp quản lý mã QR thông minh và hiệu quả',
                  icon: <Monitor className="w-8 h-8 text-blue-600" />,
                  bg: 'bg-blue-100',
                  onClick: () => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      const el = document.getElementById(
                        'solutions-section'
                      );
                      if (el)
                        el.scrollIntoView({
                          behavior: 'smooth'
                        });
                    }, 100);
                  }
                },
                {
                  title: 'Form Report System',
                  desc: 'Hệ thống báo cáo tự động hóa, chính xác',
                  icon: <FileText className="w-8 h-8 text-green-600" />,
                  bg: 'bg-green-100',
                  onClick: () => {
                    setCurrentPage('eForm');
                    window.scrollTo(0, 0);
                  }
                },
                {
                  title: 'Syrup Mixing Controls',
                  desc: 'Kiểm soát quy trình pha chế tự động',
                  icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
                  bg: 'bg-purple-100'
                },
                {
                  title: 'Safety Video AI',
                  desc: 'Giám sát an toàn thông minh bằng AI',
                  icon: <Shield className="w-8 h-8 text-red-600" />,
                  bg: 'bg-red-100',
                  onClick: () => {
                    setCurrentPage('safetyVideoAnalytics');
                    window.scrollTo(0, 0);
                  }
                },
                {
                  title: 'About Us',
                  desc: 'Tìm hiểu về Quốc Việt',
                  icon: <Info className="w-8 h-8 text-pink-600" />,
                  bg: 'bg-pink-100',
                  onClick: () => {
                    setCurrentPage('aboutUs');
                    window.scrollTo(0, 0);
                  }
                },
                {
                  title: 'Case Studies',
                  desc: 'Các dự án thực tế thành công',
                  icon: <BookOpen className="w-8 h-8 text-yellow-600" />,
                  bg: 'bg-yellow-100'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30
                    },
                    show: {
                      opacity: 1,
                      y: 0
                    }
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03
                  }}
                  onClick={item.onClick}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${item.bg}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-14 px-4 border-t border-gray-200">
        <div className="container mx-auto text-center">

          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <ImageWithFallback
              src={logoImg}
              alt="Logo"
              className="h-10 w-auto"
            />

            <h3 className="font-bold text-xl text-gray-900 tracking-tight">
              QUỐC VIỆT CO., Ltd
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Chuyên gia hàng đầu trong lĩnh vực chuyển đổi số,
            giúp doanh nghiệp tối ưu hóa quy trình
            và tăng trưởng bền vững.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gray-300 mx-auto my-6" />

          {/* Social */}
          <div className="flex justify-center gap-4 mb-6">
            <motion.a
              whileHover={{
                y: -4,
                scale: 1.08
              }}
              href="https://www.facebook.com/QuocVietTradingAndEngineeringLtd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{
                y: -4,
                scale: 1.08
              }}
              href="https://www.linkedin.com/company/quoc-viet-trading-and-engineering-co-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-sky-700 text-white flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            © 2026 Quốc Việt Digitization Solutions. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
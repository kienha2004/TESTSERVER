import React from 'react';
import { ChevronLeft, Home, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from '../../imports/logo.png';
import { SafetyDropdown } from './SafetyDropdown';
import { motion } from 'framer-motion';

interface SafetyHeaderProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  backPage?: any;
}

export function SafetyHeader({
  setCurrentPage,
  showSafetyDropdown,
  setShowSafetyDropdown,
  dropdownRef,
  backPage = 'home'
}: SafetyHeaderProps) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50 py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(backPage)}
              className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 group"
            >
              <div className="p-1.5 bg-orange-50 rounded-xl group-hover:rotate-12 transition-transform">
                <ImageWithFallback src={logoImg} alt="Logo" className="h-8 w-auto" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-black text-lg tracking-tighter text-gray-900">QUỐC VIỆT</span>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-500">Digitization</span>
              </div>
            </button>

            <div className="h-8 w-px bg-gray-100 mx-2 hidden md:block"></div>

            <div className="hidden lg:block">
              <SafetyDropdown
                setCurrentPage={setCurrentPage}
                showSafetyDropdown={showSafetyDropdown}
                setShowSafetyDropdown={setShowSafetyDropdown}
                dropdownRef={dropdownRef}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('demoForm')}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-[11px] uppercase tracking-widest font-black hover:bg-orange-500 transition-all shadow-lg shadow-gray-200 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Demo
            </motion.button>

            <motion.button
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage('home')}
              className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-all"
            >
              <Home className="w-5 h-5" />
            </motion.button>
          </div>

        </div>
      </div>
    </motion.header>
  );
}

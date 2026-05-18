import { useState, useEffect, useRef } from 'react';
import { HomePage } from './pages/HomePage';
import { EFormPage } from './pages/EFormPage';
import { DemoFormPage } from './pages/DemoFormPage';
import { SafetyVideoAnalyticsPage } from './pages/SafetyVideoAnalyticsPage';
import { PPEDetectionPage } from './pages/PPEDetectionPage';
import { UnguardedEdgeDetectionPage } from './pages/UnguardedEdgeDetectionPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { MissingBarricadeDetectionPage } from './pages/MissingBarricadeDetectionPage';
import { FallDetectionPage } from './pages/FallDetectionPage';
import { ProximityDetectionPage } from './pages/ProximityDetectionPage';
import { SuspendedLoadPage } from './pages/SuspendedLoadPage';
import { IntrusionDetectionPage } from './pages/IntrusionDetectionPage';
import { HeatMapPage } from './pages/HeatMapPage';
import { PerimeterIntrusionPage } from './pages/PerimeterIntrusionPage';
import { WeaponDetectionPage } from './pages/WeaponDetectionPage';
import { TheftDetectionPage } from './pages/TheftDetectionPage';
import { LoiteringDetectionPage } from './pages/LoiteringDetectionPage';
import { FightingDetectionPage } from './pages/FightingDetectionPage';

type Page = 'home' | 'demoForm' | 'eForm' | 'safetyVideoAnalytics' | 'ppeDetection' | 'unguardedEdgeDetection' | 'aboutUs' | 'missingBarricadeDetection' | 'fallDetection' | 'proximityDetection' | 'suspendedLoadMonitoring' | 'intrusionDetection' | 'heatMap' | 'peripheralIntrusion' | 'weaponDetection' | 'theftDetection' | 'loiteringDetection' | 'fightingDetection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showSafetyDropdown, setShowSafetyDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSafetyDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Routing
  if (currentPage === 'eForm') {
    return <EFormPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === 'demoForm') {
    return <DemoFormPage setCurrentPage={setCurrentPage} />;
  }

  if (currentPage === 'safetyVideoAnalytics') {
    return (
      <SafetyVideoAnalyticsPage
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'ppeDetection') {
    return (
      <PPEDetectionPage
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'proximityDetection') {
    return (
      <ProximityDetectionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'suspendedLoadMonitoring') {
    return (
      <SuspendedLoadPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'intrusionDetection') {
    return (
      <IntrusionDetectionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'heatMap') {
    return (
      <HeatMapPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'peripheralIntrusion') {
    return (
      <PerimeterIntrusionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'weaponDetection') {
    return (
      <WeaponDetectionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'theftDetection') {
    return (
      <TheftDetectionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'loiteringDetection') {
    return (
      <LoiteringDetectionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'fightingDetection') {
    return (
      <FightingDetectionPage 
        setCurrentPage={setCurrentPage} 
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'unguardedEdgeDetection') {
    return (
      <UnguardedEdgeDetectionPage
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'fallDetection') {
    return (
      <FallDetectionPage
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'missingBarricadeDetection') {
    return (
      <MissingBarricadeDetectionPage
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  if (currentPage === 'aboutUs') {
    return (
      <AboutUsPage
        setCurrentPage={setCurrentPage}
        showSafetyDropdown={showSafetyDropdown}
        setShowSafetyDropdown={setShowSafetyDropdown}
        dropdownRef={dropdownRef}
      />
    );
  }

  return (
    <HomePage
      setCurrentPage={setCurrentPage}
      showSafetyDropdown={showSafetyDropdown}
      setShowSafetyDropdown={setShowSafetyDropdown}
      dropdownRef={dropdownRef}
    />
  );
}
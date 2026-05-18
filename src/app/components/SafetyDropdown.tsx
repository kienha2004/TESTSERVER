import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SafetyDropdownProps {
  setCurrentPage: (page: any) => void;
  showSafetyDropdown: boolean;
  setShowSafetyDropdown: (show: boolean) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export function SafetyDropdown({ setCurrentPage, showSafetyDropdown, setShowSafetyDropdown, dropdownRef }: SafetyDropdownProps) {
  const items = [
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

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        <button
          onClick={() => setCurrentPage('safetyVideoAnalytics')}
          className="hover:text-orange-500 transition-colors duration-300 font-medium"
        >
          Safety Video Analytics
        </button>
        <button
          onClick={() => setShowSafetyDropdown(!showSafetyDropdown)}
          className="p-1 hover:text-orange-500 transition-colors duration-300"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showSafetyDropdown ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {showSafetyDropdown && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl w-72 py-2 z-50 max-h-[450px] overflow-y-auto">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(item.page);
                setShowSafetyDropdown(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors text-left"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

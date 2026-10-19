import React from 'react';
import { InspectionStats } from '../utils/inspection-logic';
import {
  Printer,
  RotateCcw,
  CheckCircle2,
  FileText,
  FileCheck,
  Eye,
  Sliders,
} from 'lucide-react';

interface HeaderBarProps {
  activePage: number | 'all';
  setActivePage: (page: number | 'all') => void;
  stats: InspectionStats;
  onMarkAllPass: () => void;
  onReset: () => void;
  onLoadSampleData: () => void;
  onPrint: () => void;
  zoomLevel: number;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  activePage,
  setActivePage,
  stats,
  onMarkAllPass,
  onReset,
  onLoadSampleData,
  onPrint,
  zoomLevel,
  setZoomLevel,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-xs px-3 sm:px-6 py-2">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Document Title & Progress */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-gray-900 text-sm">
            <FileText size={17} className="text-sky-600" />
            <span>דוח בדיקת גנרטור — שער הגולן</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 bg-gray-100 rounded text-gray-700 text-[11px] font-sans">
            <span className="font-semibold">{stats.checked}/54</span> סעיפים נבדקו
            {stats.checked > 0 && (
              <span className="text-gray-500">
                ({stats.p} P, {stats.f} F, {stats.nc} NC, {stats.na} NA)
              </span>
            )}
          </div>
        </div>

        {/* Page Selector Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5">
          <button
            type="button"
            onClick={() => setActivePage('all')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              activePage === 'all'
                ? 'bg-sky-600 text-white font-semibold shadow-2xs'
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            כל 7 הדפים ברצף
          </button>

          <span className="text-gray-300 mx-0.5">|</span>

          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setActivePage(num)}
              className={`w-7 h-7 flex items-center justify-center text-xs font-medium rounded transition-colors cursor-pointer ${
                activePage === num
                  ? 'bg-sky-600 text-white font-semibold shadow-2xs'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
              title={`עבור לדף ${num}`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Action Tools */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] text-gray-600 border border-gray-200 rounded px-1.5 py-1">
            <button
              type="button"
              onClick={() => setZoomLevel((prev) => Math.max(0.75, prev - 0.1))}
              className="px-1 hover:text-black cursor-pointer font-bold"
              title="הקטן תצוגה"
            >
              -
            </button>
            <span className="w-9 text-center font-mono">{Math.round(zoomLevel * 100)}%</span>
            <button
              type="button"
              onClick={() => setZoomLevel((prev) => Math.min(1.3, prev + 0.1))}
              className="px-1 hover:text-black cursor-pointer font-bold"
              title="הגדל תצוגה"
            >
              +
            </button>
          </div>

          {/* Quick Mark All Pass */}
          <button
            type="button"
            onClick={onMarkAllPass}
            className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 rounded text-xs font-medium transition-colors cursor-pointer"
            title="סמן את כל 54 הסעיפים כתקין (P)"
          >
            <CheckCircle2 size={13} className="text-emerald-600" />
            <span className="hidden md:inline">סמן הכל תקין</span>
          </button>

          {/* Load Sample Data */}
          <button
            type="button"
            onClick={onLoadSampleData}
            className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 rounded text-xs font-medium transition-colors cursor-pointer"
            title="מלא נתוני בדיקה לדוגמה"
          >
            <FileCheck size={13} className="text-blue-600" />
            <span className="hidden md:inline">נתוני דוגמה</span>
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900 border border-gray-200 hover:bg-gray-50 rounded text-xs font-medium transition-colors cursor-pointer"
            title="איפוס טופס למצב המקורי"
          >
            <RotateCcw size={13} />
            <span className="hidden md:inline">איפוס</span>
          </button>

          {/* Print / Export PDF */}
          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1 bg-gray-900 text-white hover:bg-gray-800 rounded text-xs font-medium shadow-2xs transition-colors cursor-pointer"
            title="הדפסה או ייצוא כ-PDF"
          >
            <Printer size={13} />
            <span>הדפסה / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};

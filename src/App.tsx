import React, { useState, useEffect } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';
import { Page3 } from './components/Page3';
import { Page4 } from './components/Page4';
import { Page5 } from './components/Page5';
import { Page6 } from './components/Page6';
import { Page7 } from './components/Page7';
import { INITIAL_FORM_DATA, ReportFormData } from './data/report-data';
import { getSampleReportData } from './data/sample-data';
import { calculateInspectionStats, InspectionStatus } from './utils/inspection-logic';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const STORAGE_KEY = 'generator_inspection_report_v1';

export default function App() {
  const [formData, setFormData] = useState<ReportFormData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return INITIAL_FORM_DATA;
  });

  const [activePage, setActivePage] = useState<number | 'all'>('all');
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  const stats = calculateInspectionStats(formData.checklistStatuses, 54);

  const handleUpdateForm = <K extends keyof ReportFormData>(
    key: K,
    value: ReportFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleUpdateStatus = (id: number, status: InspectionStatus) => {
    setFormData((prev) => ({
      ...prev,
      checklistStatuses: {
        ...prev.checklistStatuses,
        [`item_${id}`]: status,
      },
    }));
  };

  const handleUpdateNote = (id: number, note: string) => {
    setFormData((prev) => ({
      ...prev,
      checklistNotes: {
        ...prev.checklistNotes,
        [`item_${id}`]: note,
      },
    }));
  };

  const handleUpdateInstrument = (
    index: number,
    field: 'type' | 'manufacturer' | 'model' | 'serial' | 'calDate',
    val: string
  ) => {
    setFormData((prev) => {
      const updated = [...prev.instruments];
      updated[index] = {
        ...updated[index],
        [field]: val,
      };
      return {
        ...prev,
        instruments: updated,
      };
    });
  };

  const handleMarkAllPass = () => {
    const updatedStatuses: Record<string, InspectionStatus> = { ...formData.checklistStatuses };
    for (let i = 1; i <= 54; i++) {
      updatedStatuses[`item_${i}`] = 'P';
    }
    setFormData((prev) => ({
      ...prev,
      checklistStatuses: updatedStatuses,
    }));
  };

  const handleReset = () => {
    if (window.confirm('האם לאפס את כל הנתונים בטופס למצב המקורי?')) {
      setFormData(INITIAL_FORM_DATA);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    }
  };

  const handleLoadSampleData = () => {
    setFormData(getSampleReportData());
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-200/60 text-gray-900 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Top Application Navigation and Action Toolbar */}
      <HeaderBar
        activePage={activePage}
        setActivePage={setActivePage}
        stats={stats}
        onMarkAllPass={handleMarkAllPass}
        onReset={handleReset}
        onLoadSampleData={handleLoadSampleData}
        onPrint={handlePrint}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />

      {/* Main Pages Canvas Container */}
      <main className="flex-1 py-6 px-2 sm:px-4 flex flex-col items-center justify-start overflow-x-auto">
        <div
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
          className="transition-transform duration-150 w-full flex flex-col items-center"
        >
          {/* Printable wrapper: in print mode, all 7 pages always print */}
          <div className="w-full flex flex-col items-center gap-8">
            {/* Page 1 */}
            <div className={activePage === 'all' || activePage === 1 ? 'w-full' : 'hidden print:block'}>
              <Page1
                formData={formData}
                stats={stats}
                onUpdateForm={handleUpdateForm}
                onUpdateStatus={handleUpdateStatus}
                onUpdateNote={handleUpdateNote}
              />
            </div>

            {/* Page 2 */}
            <div className={activePage === 'all' || activePage === 2 ? 'w-full' : 'hidden print:block'}>
              <Page2
                formData={formData}
                onUpdateStatus={handleUpdateStatus}
                onUpdateNote={handleUpdateNote}
              />
            </div>

            {/* Page 3 */}
            <div className={activePage === 'all' || activePage === 3 ? 'w-full' : 'hidden print:block'}>
              <Page3
                formData={formData}
                onUpdateStatus={handleUpdateStatus}
                onUpdateNote={handleUpdateNote}
              />
            </div>

            {/* Page 4 */}
            <div className={activePage === 'all' || activePage === 4 ? 'w-full' : 'hidden print:block'}>
              <Page4
                formData={formData}
                onUpdateStatus={handleUpdateStatus}
                onUpdateNote={handleUpdateNote}
              />
            </div>

            {/* Page 5 */}
            <div className={activePage === 'all' || activePage === 5 ? 'w-full' : 'hidden print:block'}>
              <Page5 formData={formData} onUpdateForm={handleUpdateForm} />
            </div>

            {/* Page 6 */}
            <div className={activePage === 'all' || activePage === 6 ? 'w-full' : 'hidden print:block'}>
              <Page6 formData={formData} onUpdateForm={handleUpdateForm} />
            </div>

            {/* Page 7 */}
            <div className={activePage === 'all' || activePage === 7 ? 'w-full' : 'hidden print:block'}>
              <Page7
                formData={formData}
                onUpdateForm={handleUpdateForm}
                onUpdateInstrument={handleUpdateInstrument}
              />
            </div>
          </div>
        </div>

        {/* Single Page Navigation Footer (shown when looking at a single page) */}
        {activePage !== 'all' && (
          <div className="no-print mt-6 mb-8 flex items-center justify-center gap-4 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-xs text-xs">
            <button
              type="button"
              disabled={activePage <= 1}
              onClick={() => setActivePage((prev) => (typeof prev === 'number' ? Math.max(1, prev - 1) : 1))}
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:pointer-events-none rounded transition-colors cursor-pointer"
            >
              <ChevronRight size={14} />
              <span>דף קודם</span>
            </button>

            <span className="font-semibold text-gray-700">
              דף {activePage} מתוך 7
            </span>

            <button
              type="button"
              disabled={activePage >= 7}
              onClick={() => setActivePage((prev) => (typeof prev === 'number' ? Math.min(7, prev + 1) : 7))}
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:pointer-events-none rounded transition-colors cursor-pointer"
            >
              <span>דף הבא</span>
              <ChevronLeft size={14} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

import React from 'react';
import { InspectionStatus } from '../utils/inspection-logic';

interface CheckRowProps {
  id: number;
  text: string;
  status: InspectionStatus;
  note: string;
  onStatusChange: (status: InspectionStatus) => void;
  onNoteChange: (note: string) => void;
}

export const CheckRow: React.FC<CheckRowProps> = ({
  id,
  text,
  status,
  note,
  onStatusChange,
  onNoteChange,
}) => {
  const handleToggle = (clicked: InspectionStatus) => {
    if (status === clicked) {
      onStatusChange(null);
    } else {
      onStatusChange(clicked);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-200 py-1.5 px-2 hover:bg-blue-50/20 transition-colors text-xs leading-relaxed">
      {/* Right: Item description */}
      <div className="flex-1 text-right pr-2 text-gray-800 font-normal select-none">
        {text}
      </div>

      {/* Center: P | F | NC | NA segmented buttons */}
      <div className="flex items-center justify-center shrink-0 mx-2">
        <div className="inline-flex border border-gray-300 divide-x divide-x-reverse divide-gray-300 rounded-none bg-white shadow-2xs">
          {/* P button */}
          <button
            type="button"
            aria-label={`סמן תקין עבור ${text}`}
            onClick={() => handleToggle('P')}
            className={`w-7 h-6 flex items-center justify-center text-[11px] font-sans transition-all cursor-pointer ${
              status === 'P'
                ? 'bg-emerald-600 text-white font-bold ring-1 ring-emerald-600 shadow-inner'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            }`}
            title="P – תקין"
          >
            P
          </button>

          {/* F button */}
          <button
            type="button"
            aria-label={`סמן לא תקין עבור ${text}`}
            onClick={() => handleToggle('F')}
            className={`w-7 h-6 flex items-center justify-center text-[11px] font-sans transition-all cursor-pointer ${
              status === 'F'
                ? 'bg-rose-600 text-white font-bold ring-1 ring-rose-600 shadow-inner'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            }`}
            title="F – לא תקין"
          >
            F
          </button>

          {/* NC button */}
          <button
            type="button"
            aria-label={`סמן לא נבדק עבור ${text}`}
            onClick={() => handleToggle('NC')}
            className={`w-7 h-6 flex items-center justify-center text-[11px] font-sans transition-all cursor-pointer ${
              status === 'NC'
                ? 'bg-amber-500 text-white font-bold ring-1 ring-amber-500 shadow-inner'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            }`}
            title="NC – לא נבדק"
          >
            NC
          </button>

          {/* NA button */}
          <button
            type="button"
            aria-label={`סמן לא ישים עבור ${text}`}
            onClick={() => handleToggle('NA')}
            className={`w-7 h-6 flex items-center justify-center text-[11px] font-sans transition-all cursor-pointer ${
              status === 'NA'
                ? 'bg-slate-600 text-white font-bold ring-1 ring-slate-600 shadow-inner'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
            }`}
            title="NA – לא ישים"
          >
            NA
          </button>
        </div>
      </div>

      {/* Left: Notes input */}
      <div className="w-48 sm:w-64 pl-1">
        <input
          type="text"
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="פירוט / הערות..."
          className="w-full text-right text-[11px] py-0.5 px-2 text-gray-700 bg-white border border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:outline-none transition-colors placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

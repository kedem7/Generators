import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectFieldProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder?: string;
  allowCustom?: boolean;
  className?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  value,
  onChange,
  options,
  placeholder = '—',
  allowCustom = true,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsEditing(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayValue = value || placeholder;

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className={`relative inline-flex items-stretch h-6 border border-gray-300 bg-white text-[11px] text-gray-800 transition-colors hover:border-gray-400 ${className}`}
    >
      {/* Left side: Chevron icon trigger button matching PDF layout */}
      <button
        type="button"
        aria-label="בחר אפשרות"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-5 flex items-center justify-center border-r border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer shrink-0 transition-colors"
      >
        <ChevronDown size={11} strokeWidth={2.2} />
      </button>

      {/* Right side: Value content (supports RTL display) */}
      <div className="flex-1 px-1.5 flex items-center justify-center overflow-hidden" dir="rtl">
        {isEditing && allowCustom ? (
          <input
            autoFocus
            type="text"
            value={value === '—' ? '' : value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsEditing(false);
            }}
            className="w-full h-full text-center outline-none bg-transparent text-[11px]"
          />
        ) : (
          <span
            onClick={() => {
              if (allowCustom) setIsEditing(true);
              else setIsOpen(true);
            }}
            className="cursor-pointer truncate select-none text-center w-full"
            title={displayValue}
          >
            {displayValue}
          </span>
        )}
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          dir="rtl"
          className="absolute top-full left-0 z-50 mt-0.5 min-w-[150px] max-h-60 overflow-y-auto bg-white border border-gray-300 shadow-md py-1 text-right"
        >
          {options.map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
                setIsEditing(false);
              }}
              className={`w-full text-right px-2.5 py-1 text-[11px] cursor-pointer hover:bg-blue-50 transition-colors ${
                value === opt ? 'bg-sky-50 font-semibold text-sky-900' : 'text-gray-800'
              }`}
            >
              {opt}
            </button>
          ))}
          {allowCustom && (
            <div className="border-t border-gray-200 mt-1 pt-1 px-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsEditing(true);
                }}
                className="w-full text-right text-[10px] text-sky-600 hover:underline cursor-pointer"
              >
                + עריכה ידנית...
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

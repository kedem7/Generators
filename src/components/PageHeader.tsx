import React from 'react';

interface PageHeaderProps {
  pageNum: number;
  timeString?: string;
  categoryString?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  pageNum,
  timeString = '20:50 ,18.10.2026',
  categoryString = 'גנרטור',
}) => {
  return (
    <div className="w-full flex items-center justify-between text-[11px] text-gray-700 pb-1 mb-2 select-none">
      {/* Right side (Child 1 in RTL): 0.00 box on page 6 & 7 */}
      <div className="w-20 flex justify-start">
        {(pageNum === 6 || pageNum === 7) ? (
          <div className="border border-gray-300 px-3 py-0.5 text-xs text-gray-800 bg-white font-mono shadow-2xs">
            0.00
          </div>
        ) : (
          <div className="w-20" />
        )}
      </div>

      {/* Center (Child 2 in RTL): גנרטור */}
      <div className="font-sans font-medium text-center text-gray-700">
        {categoryString}
      </div>

      {/* Left side (Child 3 in RTL): Timestamp 20:50 ,18.10.2026 */}
      <div className="w-28 flex justify-end text-left font-sans text-gray-700 tracking-wide font-normal">
        {timeString}
      </div>
    </div>
  );
};

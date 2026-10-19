import React from 'react';

interface PageFooterProps {
  pageNum: number;
  totalPageCount?: number;
}

export const PageFooter: React.FC<PageFooterProps> = ({
  pageNum,
  totalPageCount = 7,
}) => {
  return (
    <div className="w-full mt-6 pt-3 flex flex-col items-center justify-center text-[11px] text-gray-600 select-none border-t border-transparent">
      {pageNum === 7 && (
        <div className="text-[11px] text-gray-500 mb-1 tracking-wide">
          סגל אריאל הנדסת חשמל בע״מ · נוצר ב-18.10.2026
        </div>
      )}
      <div className="font-sans font-normal text-gray-500">
        דף מספר {pageNum} מתוך {totalPageCount}
      </div>
    </div>
  );
};

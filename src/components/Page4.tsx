import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { CheckRow } from './CheckRow';
import { ReportFormData, CHECKLIST_ITEMS } from '../data/report-data';
import { InspectionStatus } from '../utils/inspection-logic';

interface Page4Props {
  formData: ReportFormData;
  onUpdateStatus: (id: number, status: InspectionStatus) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const Page4: React.FC<Page4Props> = ({
  formData,
  onUpdateStatus,
  onUpdateNote,
}) => {
  const page4Items = CHECKLIST_ITEMS.filter((item) => item.page === 4);

  const electricalItems = page4Items.filter((item) => item.section === 'בדיקות חשמליות');
  const operationItems = page4Items.filter((item) => item.section === 'הפעלה והחלפה');
  const indicatorItems = page4Items.filter((item) => item.section === 'סימון וחיווי');

  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        <PageHeader pageNum={4} />

        <div className="border border-gray-300 mt-2">
          {/* Header Row */}
          <div className="flex flex-row items-center justify-between bg-gray-50 border-b border-gray-300 py-1.5 px-3 text-xs font-bold text-gray-800">
            <div className="flex-1 text-right">בדיקות נוספות</div>
            <div className="shrink-0 mx-2 text-[10px] text-gray-500 font-normal">
              P – תקין | F – לא תקין | NC – לא נבדק | NA – לא ישים
            </div>
            <div className="w-48 sm:w-64 text-center text-[11px] text-gray-600 font-normal">
              פירוט והערות
            </div>
          </div>

          {/* בדיקות חשמליות */}
          <div className="bg-gray-100/80 border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            בדיקות חשמליות
          </div>
          <div className="divide-y divide-gray-200">
            {electricalItems.map((item) => (
              <CheckRow
                key={item.id}
                id={item.id}
                text={item.text}
                status={formData.checklistStatuses[`item_${item.id}`] || null}
                note={formData.checklistNotes[`item_${item.id}`] || ''}
                onStatusChange={(status) => onUpdateStatus(item.id, status)}
                onNoteChange={(note) => onUpdateNote(item.id, note)}
              />
            ))}
          </div>

          {/* הפעלה והחלפה */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            הפעלה והחלפה
          </div>
          <div className="divide-y divide-gray-200">
            {operationItems.map((item) => (
              <CheckRow
                key={item.id}
                id={item.id}
                text={item.text}
                status={formData.checklistStatuses[`item_${item.id}`] || null}
                note={formData.checklistNotes[`item_${item.id}`] || ''}
                onStatusChange={(status) => onUpdateStatus(item.id, status)}
                onNoteChange={(note) => onUpdateNote(item.id, note)}
              />
            ))}
          </div>

          {/* סימון וחיווי */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            סימון וחיווי
          </div>
          <div className="divide-y divide-gray-200">
            {indicatorItems.map((item) => (
              <CheckRow
                key={item.id}
                id={item.id}
                text={item.text}
                status={formData.checklistStatuses[`item_${item.id}`] || null}
                note={formData.checklistNotes[`item_${item.id}`] || ''}
                onStatusChange={(status) => onUpdateStatus(item.id, status)}
                onNoteChange={(note) => onUpdateNote(item.id, note)}
              />
            ))}
          </div>
        </div>
      </div>

      <PageFooter pageNum={4} />
    </div>
  );
};

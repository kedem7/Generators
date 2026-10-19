import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { CheckRow } from './CheckRow';
import { ReportFormData, CHECKLIST_ITEMS } from '../data/report-data';
import { InspectionStatus } from '../utils/inspection-logic';

interface Page3Props {
  formData: ReportFormData;
  onUpdateStatus: (id: number, status: InspectionStatus) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const Page3: React.FC<Page3Props> = ({
  formData,
  onUpdateStatus,
  onUpdateNote,
}) => {
  const page3Items = CHECKLIST_ITEMS.filter((item) => item.page === 3);

  const safetyItems = page3Items.filter((item) => item.section === 'מבנה ובטיחות');
  const ventilationItems = page3Items.filter((item) => item.section === 'אוורור ופליטה');
  const protectionItems = page3Items.filter((item) => item.section === 'הגנות');
  const fireItems = page3Items.filter((item) => item.section === 'אש');

  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        <PageHeader pageNum={3} />

        <div className="border border-gray-300 mt-2">
          {/* Header Row */}
          <div className="flex flex-row items-center justify-between bg-gray-50 border-b border-gray-300 py-1.5 px-3 text-xs font-bold text-gray-800">
            <div className="flex-1 text-right">בדיקת חדר הגנרטור</div>
            <div className="shrink-0 mx-2 text-[10px] text-gray-500 font-normal">
              P – תקין | F – לא תקין | NC – לא נבדק | NA – לא ישים
            </div>
            <div className="w-48 sm:w-64 text-center text-[11px] text-gray-600 font-normal">
              פירוט והערות
            </div>
          </div>

          {/* מבנה ובטיחות */}
          <div className="bg-gray-100/80 border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            מבנה ובטיחות
          </div>
          <div className="divide-y divide-gray-200">
            {safetyItems.map((item) => (
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

          {/* אוורור ופליטה */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            אוורור ופליטה
          </div>
          <div className="divide-y divide-gray-200">
            {ventilationItems.map((item) => (
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

          {/* הגנות */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            הגנות
          </div>
          <div className="divide-y divide-gray-200">
            {protectionItems.map((item) => (
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

          {/* אש */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            אש
          </div>
          <div className="divide-y divide-gray-200">
            {fireItems.map((item) => (
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

      <PageFooter pageNum={3} />
    </div>
  );
};

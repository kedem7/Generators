import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { CheckRow } from './CheckRow';
import { ReportFormData, CHECKLIST_ITEMS } from '../data/report-data';
import { InspectionStatus } from '../utils/inspection-logic';

interface Page2Props {
  formData: ReportFormData;
  onUpdateStatus: (id: number, status: InspectionStatus) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const Page2: React.FC<Page2Props> = ({
  formData,
  onUpdateStatus,
  onUpdateNote,
}) => {
  // Page 2 items are 2 to 20
  const page2Items = CHECKLIST_ITEMS.filter((item) => item.page === 2);

  const topItems = page2Items.filter((item) => item.section === 'כללי');
  const conductorItems = page2Items.filter((item) => item.section === 'מוליכים והארקות');
  const signageItems = page2Items.filter((item) => item.section === 'שילוט');
  const batteryItems = page2Items.filter((item) => item.section === 'מצברים וטעינה');

  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        <PageHeader pageNum={2} />

        <div className="border border-gray-300 mt-2">
          {/* Top 2 general items */}
          <div className="divide-y divide-gray-200">
            {topItems.map((item) => (
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

          {/* מוליכים והארקות */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            מוליכים והארקות
          </div>
          <div className="divide-y divide-gray-200">
            {conductorItems.map((item) => (
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

          {/* שילוט */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            שילוט
          </div>
          <div className="divide-y divide-gray-200">
            {signageItems.map((item) => (
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

          {/* מצברים וטעינה */}
          <div className="bg-gray-100/80 border-t border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800">
            מצברים וטעינה
          </div>
          <div className="divide-y divide-gray-200">
            {batteryItems.map((item) => (
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

      <PageFooter pageNum={2} />
    </div>
  );
};

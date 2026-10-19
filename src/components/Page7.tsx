import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { SelectField } from './SelectField';
import { ReportFormData } from '../data/report-data';
import { DROPDOWN_OPTIONS } from '../data/options';
import { Calendar } from 'lucide-react';

interface Page7Props {
  formData: ReportFormData;
  onUpdateForm: <K extends keyof ReportFormData>(key: K, value: ReportFormData[K]) => void;
  onUpdateInstrument: (
    index: number,
    field: 'type' | 'manufacturer' | 'model' | 'serial' | 'calDate',
    val: string
  ) => void;
}

export const Page7: React.FC<Page7Props> = ({
  formData,
  onUpdateForm,
  onUpdateInstrument,
}) => {
  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        <PageHeader pageNum={7} />

        {/* מפסק אוטומטי בצד מתח נמוך */}
        <div className="border border-gray-300 mb-4">
          <div className="bg-gray-50 border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800 text-center">
            מפסק אוטומטי בצד מתח נמוך
          </div>

          <div className="divide-y divide-gray-200 text-xs">
            {/* סוג מפסק */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">סוג מפסק</span>
              <SelectField
                value={formData.p7BreakerType}
                onChange={(val) => onUpdateForm('p7BreakerType', val)}
                options={DROPDOWN_OPTIONS.breakerTypes}
                className="w-48"
              />
            </div>

            {/* זרם נקוב */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">זרם נקוב (A)</span>
              <SelectField
                value={formData.p7BreakerRatedCurrent}
                onChange={(val) => onUpdateForm('p7BreakerRatedCurrent', val)}
                options={['—', '100', '160', '250', '400', '630', '800', '1000', '1250', '1600', '2000', '2500', '3200']}
                className="w-48"
              />
            </div>

            {/* יצרן */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">יצרן</span>
              <SelectField
                value={formData.p7BreakerManufacturer}
                onChange={(val) => onUpdateForm('p7BreakerManufacturer', val)}
                options={['—', 'ABB', 'Schneider Electric', 'Siemens', 'Eaton', 'Terasaki', 'Hyundai', 'LS', 'Chint', 'אחר']}
                className="w-48"
              />
            </div>

            {/* דגם */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">דגם</span>
              <SelectField
                value={formData.p7BreakerModel}
                onChange={(val) => onUpdateForm('p7BreakerModel', val)}
                options={['—', 'Compact NSX', 'Tmax XT', '3VA', 'NZM', 'Masterpact']}
                className="w-48"
              />
            </div>

            {/* מנגנון */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">מנגנון</span>
              <SelectField
                value={formData.p7BreakerMechanism}
                onChange={(val) => onUpdateForm('p7BreakerMechanism', val)}
                options={DROPDOWN_OPTIONS.breakerMechanisms}
                className="w-48"
              />
            </div>

            {/* חיבור לסליל הפסקה */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">חיבור לסליל הפסקה</span>
              <SelectField
                value={formData.p7BreakerShuntTrip}
                onChange={(val) => onUpdateForm('p7BreakerShuntTrip', val)}
                options={DROPDOWN_OPTIONS.shuntTripConnections}
                className="w-48"
              />
            </div>

            {/* Check item 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-1.5 px-3 gap-2">
              <span className="text-gray-800 text-xs font-normal">
                כוונון ההגנות במפסק ההזנה מתאים לזרם הקצר המינימלי הצפוי
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SelectField
                  value={formData.p7BreakerFitMinShortCircuit}
                  onChange={(val) => onUpdateForm('p7BreakerFitMinShortCircuit', val)}
                  options={DROPDOWN_OPTIONS.checkOptionsDash}
                  className="w-14"
                />
                <input
                  type="text"
                  value={formData.p7BreakerFitMinShortCircuitNote}
                  onChange={(e) => onUpdateForm('p7BreakerFitMinShortCircuitNote', e.target.value)}
                  placeholder="פירוט / הערות..."
                  className="border border-gray-300 px-2 py-0.5 h-6 w-48 sm:w-60 text-right text-[11px] outline-none"
                />
              </div>
            </div>

            {/* Check item 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-1.5 px-3 gap-2">
              <span className="text-gray-800 text-xs font-normal">
                כווננו ההגנות במפסק ההגנה. בדו״ח מפורטים הערכים לאחר הכוונון
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SelectField
                  value={formData.p7BreakerCalibrated}
                  onChange={(val) => onUpdateForm('p7BreakerCalibrated', val)}
                  options={DROPDOWN_OPTIONS.checkOptionsDash}
                  className="w-14"
                />
                <input
                  type="text"
                  value={formData.p7BreakerCalibratedNote}
                  onChange={(e) => onUpdateForm('p7BreakerCalibratedNote', e.target.value)}
                  placeholder="פירוט / הערות..."
                  className="border border-gray-300 px-2 py-0.5 h-6 w-48 sm:w-60 text-right text-[11px] outline-none"
                />
              </div>
            </div>

            {/* Check item 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-1.5 px-3 gap-2">
              <span className="text-gray-800 text-xs font-normal">
                נדרשת החלפת מפסק הזנה
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <SelectField
                  value={formData.p7BreakerReplacementRequired}
                  onChange={(val) => onUpdateForm('p7BreakerReplacementRequired', val)}
                  options={DROPDOWN_OPTIONS.checkOptionsDash}
                  className="w-14"
                />
                <input
                  type="text"
                  value={formData.p7BreakerReplacementRequiredNote}
                  onChange={(e) => onUpdateForm('p7BreakerReplacementRequiredNote', e.target.value)}
                  placeholder="פירוט / הערות..."
                  className="border border-gray-300 px-2 py-0.5 h-6 w-48 sm:w-60 text-right text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* מכשור ביצוע המדידות */}
        <div className="border border-gray-300 mb-4">
          <div className="bg-gray-50 border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800 text-center">
            מכשור ביצוע המדידות
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-right border-collapse">
              <thead>
                <tr className="bg-gray-100/70 border-b border-gray-300 text-gray-700 text-[11px]">
                  <th className="p-1.5 border-l border-gray-300 w-12 text-center font-semibold">מספר</th>
                  <th className="p-1.5 border-l border-gray-300 font-semibold">סוג מכשיר המדידה</th>
                  <th className="p-1.5 border-l border-gray-300 w-28 font-semibold">יצרן</th>
                  <th className="p-1.5 border-l border-gray-300 w-28 font-semibold">דגם</th>
                  <th className="p-1.5 border-l border-gray-300 w-28 font-semibold">מס׳ סידורי</th>
                  <th className="p-1.5 font-semibold w-36 text-center">תאריך תפוגת כיול</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {formData.instruments.map((inst, idx) => (
                  <tr key={inst.num}>
                    <td className="p-1.5 border-l border-gray-300 text-center font-mono text-[11px]">
                      {inst.num}
                    </td>
                    <td className="p-1 border-l border-gray-300">
                      <input
                        type="text"
                        value={inst.type}
                        placeholder={idx === 0 ? 'בודק התקנות משולב (Multifunction)' : 'מד התנגדות בידוד (Megger)'}
                        onChange={(e) => onUpdateInstrument(idx, 'type', e.target.value)}
                        className="w-full text-right px-1.5 py-0.5 text-[11px] outline-none bg-transparent"
                      />
                    </td>
                    <td className="p-1 border-l border-gray-300">
                      <input
                        type="text"
                        value={inst.manufacturer}
                        placeholder="Metrel / Fluke"
                        onChange={(e) => onUpdateInstrument(idx, 'manufacturer', e.target.value)}
                        className="w-full text-right px-1.5 py-0.5 text-[11px] outline-none bg-transparent"
                      />
                    </td>
                    <td className="p-1 border-l border-gray-300">
                      <input
                        type="text"
                        value={inst.model}
                        placeholder={idx === 0 ? 'MI 3102 BT' : '1507'}
                        onChange={(e) => onUpdateInstrument(idx, 'model', e.target.value)}
                        className="w-full text-right px-1.5 py-0.5 text-[11px] outline-none bg-transparent"
                      />
                    </td>
                    <td className="p-1 border-l border-gray-300">
                      <input
                        type="text"
                        value={inst.serial}
                        placeholder="מס׳ סידורי..."
                        onChange={(e) => onUpdateInstrument(idx, 'serial', e.target.value)}
                        className="w-full text-right px-1.5 py-0.5 text-[11px] outline-none bg-transparent"
                      />
                    </td>
                    <td className="p-1">
                      <div className="flex items-center justify-center gap-1">
                        <Calendar size={12} className="text-gray-400 shrink-0" />
                        <input
                          type="text"
                          value={inst.calDate}
                          onChange={(e) => onUpdateInstrument(idx, 'calDate', e.target.value)}
                          className="w-24 text-center px-1 py-0.5 text-[11px] outline-none bg-transparent text-gray-700"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* פרטי הבודק */}
        <div className="border border-gray-300">
          <div className="bg-gray-50 border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800 text-center">
            פרטי הבודק
          </div>

          <div className="text-xs">
            {/* Row 1: Inspector details */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300 border-b border-gray-300">
              <div className="flex items-center justify-between p-2">
                <span className="font-semibold text-gray-800">שם הבודק:</span>
                <input
                  type="text"
                  value={formData.inspectorName}
                  onChange={(e) => onUpdateForm('inspectorName', e.target.value)}
                  className="font-medium text-gray-900 text-right outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center justify-between p-2">
                <span className="font-semibold text-gray-800">מס׳ רישיון:</span>
                <input
                  type="text"
                  value={formData.inspectorLicense}
                  onChange={(e) => onUpdateForm('inspectorLicense', e.target.value)}
                  className="font-mono text-gray-900 text-right outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center justify-between p-2">
                <span className="font-semibold text-gray-800">תאריך:</span>
                <div className="flex items-center gap-1">
                  <Calendar size={12} className="text-gray-400 shrink-0" />
                  <input
                    type="text"
                    value={formData.inspectorDate}
                    onChange={(e) => onUpdateForm('inspectorDate', e.target.value)}
                    className="w-24 text-right outline-none bg-transparent text-gray-900"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Signature & Official Stamp */}
            <div className="p-3 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-xs font-bold text-gray-800 shrink-0">
                חתימה וחותמת:
              </div>

              {/* Exact original high-resolution extracted stamp & signature */}
              <div className="relative border border-gray-200 p-2 bg-white shadow-2xs max-w-sm rounded-sm">
                <img
                  src="/assets/stamp_signature.jpg"
                  alt="חותמת וחתימת בודק אריאל סגל"
                  className="w-full h-auto max-h-24 object-contain select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter pageNum={7} />
    </div>
  );
};

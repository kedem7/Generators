import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { SelectField } from './SelectField';
import { ReportFormData } from '../data/report-data';
import { DROPDOWN_OPTIONS } from '../data/options';
import { calculateShortCircuitCurrent, calculate3PhaseShortCircuit } from '../utils/inspection-logic';

interface Page6Props {
  formData: ReportFormData;
  onUpdateForm: <K extends keyof ReportFormData>(key: K, value: ReportFormData[K]) => void;
}

export const Page6: React.FC<Page6Props> = ({ formData, onUpdateForm }) => {
  const handleZChange = (
    zKey: keyof ReportFormData,
    iscKey: keyof ReportFormData,
    val: string,
    voltage: number = 230
  ) => {
    onUpdateForm(zKey, val);
    const calculated = calculateShortCircuitCurrent(val, voltage);
    if (calculated !== null) {
      onUpdateForm(iscKey, calculated.toString());
    }
  };

  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        <PageHeader pageNum={6} />

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
                value={formData.p6BreakerType}
                onChange={(val) => onUpdateForm('p6BreakerType', val)}
                options={DROPDOWN_OPTIONS.breakerTypes}
                className="w-48"
              />
            </div>

            {/* זרם נקוב */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">זרם נקוב (A)</span>
              <SelectField
                value={formData.p6BreakerRatedCurrent}
                onChange={(val) => onUpdateForm('p6BreakerRatedCurrent', val)}
                options={['—', '100', '160', '250', '400', '630', '800', '1000', '1250', '1600', '2000', '2500', '3200']}
                className="w-48"
              />
            </div>

            {/* יצרן */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">יצרן</span>
              <SelectField
                value={formData.p6BreakerManufacturer}
                onChange={(val) => onUpdateForm('p6BreakerManufacturer', val)}
                options={['—', 'ABB', 'Schneider Electric', 'Siemens', 'Eaton', 'Terasaki', 'Hyundai', 'LS', 'Chint', 'אחר']}
                className="w-48"
              />
            </div>

            {/* דגם */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">דגם</span>
              <SelectField
                value={formData.p6BreakerModel}
                onChange={(val) => onUpdateForm('p6BreakerModel', val)}
                options={['—', 'Compact NSX', 'Tmax XT', '3VA', 'NZM', 'Masterpact']}
                className="w-48"
              />
            </div>

            {/* מנגנון */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">מנגנון</span>
              <SelectField
                value={formData.p6BreakerMechanism}
                onChange={(val) => onUpdateForm('p6BreakerMechanism', val)}
                options={DROPDOWN_OPTIONS.breakerMechanisms}
                className="w-48"
              />
            </div>

            {/* חיבור לסליל הפסקה */}
            <div className="flex items-center justify-between p-1.5 px-3">
              <span className="text-gray-700 font-medium">חיבור לסליל הפסקה</span>
              <SelectField
                value={formData.p6BreakerShuntTrip}
                onChange={(val) => onUpdateForm('p6BreakerShuntTrip', val)}
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
                  value={formData.p6BreakerFitMinShortCircuit}
                  onChange={(val) => onUpdateForm('p6BreakerFitMinShortCircuit', val)}
                  options={DROPDOWN_OPTIONS.checkOptionsDash}
                  className="w-14"
                />
                <input
                  type="text"
                  value={formData.p6BreakerFitMinShortCircuitNote}
                  onChange={(e) => onUpdateForm('p6BreakerFitMinShortCircuitNote', e.target.value)}
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
                  value={formData.p6BreakerCalibrated}
                  onChange={(val) => onUpdateForm('p6BreakerCalibrated', val)}
                  options={DROPDOWN_OPTIONS.checkOptionsDash}
                  className="w-14"
                />
                <input
                  type="text"
                  value={formData.p6BreakerCalibratedNote}
                  onChange={(e) => onUpdateForm('p6BreakerCalibratedNote', e.target.value)}
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
                  value={formData.p6BreakerReplacementRequired}
                  onChange={(val) => onUpdateForm('p6BreakerReplacementRequired', val)}
                  options={DROPDOWN_OPTIONS.checkOptionsDash}
                  className="w-14"
                />
                <input
                  type="text"
                  value={formData.p6BreakerReplacementRequiredNote}
                  onChange={(e) => onUpdateForm('p6BreakerReplacementRequiredNote', e.target.value)}
                  placeholder="פירוט / הערות..."
                  className="border border-gray-300 px-2 py-0.5 h-6 w-48 sm:w-60 text-right text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* עכבת לולאת התקלה וזרם הקצר הצפוי מהמקור הראשי (חברת חשמל) */}
        <div className="border border-gray-300">
          <div className="bg-gray-50 border-b border-gray-300 px-3 py-1 text-xs font-bold text-gray-800 text-center">
            עכבת לולאת התקלה וזרם הקצר הצפוי מהמקור הראשי (חברת חשמל)
          </div>

          <div className="p-2 space-y-3 text-xs">
            {/* Table Header */}
            <div className="grid grid-cols-3 text-center font-semibold text-gray-700 border-b border-gray-300 pb-1">
              <div className="text-right pr-4">גודל</div>
              <div>עכבה</div>
              <div className="text-left pl-4">זרם קצר</div>
            </div>

            {/* פאזה ↔ הארקה */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-sky-800 text-right">פאזה ↔ הארקה</div>

              {/* Z ph1-e */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph1-e</div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh1E}
                    onChange={(e) => handleZChange('gridZPh1E', 'gridIscPh1E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1">
                  <input
                    type="text"
                    value={formData.gridIscPh1E}
                    onChange={(e) => onUpdateForm('gridIscPh1E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph2-e */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph2-e</div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh2E}
                    onChange={(e) => handleZChange('gridZPh2E', 'gridIscPh2E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1">
                  <input
                    type="text"
                    value={formData.gridIscPh2E}
                    onChange={(e) => onUpdateForm('gridIscPh2E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph3-e */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph3-e</div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh3E}
                    onChange={(e) => handleZChange('gridZPh3E', 'gridIscPh3E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1">
                  <input
                    type="text"
                    value={formData.gridIscPh3E}
                    onChange={(e) => onUpdateForm('gridIscPh3E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">kA</span>
                </div>
              </div>
            </div>

            {/* פאזה ↔ אפס */}
            <div className="space-y-1.5 pt-2 border-t border-gray-200">
              <div className="text-xs font-bold text-sky-800 text-right">פאזה ↔ אפס</div>

              {/* Z ph1-n */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph1-n</div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh1N}
                    onChange={(e) => handleZChange('gridZPh1N', 'gridIscPh1N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1">
                  <input
                    type="text"
                    value={formData.gridIscPh1N}
                    onChange={(e) => onUpdateForm('gridIscPh1N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph2-n */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph2-n</div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh2N}
                    onChange={(e) => handleZChange('gridZPh2N', 'gridIscPh2N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1">
                  <input
                    type="text"
                    value={formData.gridIscPh2N}
                    onChange={(e) => onUpdateForm('gridIscPh2N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph3-n */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph3-n</div>
                <div className="flex items-center justify-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh3N}
                    onChange={(e) => handleZChange('gridZPh3N', 'gridIscPh3N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1">
                  <input
                    type="text"
                    value={formData.gridIscPh3N}
                    onChange={(e) => onUpdateForm('gridIscPh3N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">kA</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-sans font-medium text-gray-800 text-[11px]">Z ph1-ph2</span>
                <div className="flex items-center gap-1">
                  <input
                    type="text"
                    value={formData.gridZPh1Ph2}
                    onChange={(e) => {
                      const val = e.target.value;
                      onUpdateForm('gridZPh1Ph2', val);
                      const calc3p = calculate3PhaseShortCircuit(val);
                      if (calc3p !== null) {
                        onUpdateForm('gridIsc3PhCalc', calc3p.toString());
                      }
                    }}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-600 font-sans">mΩ</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-sans font-medium text-gray-800 text-[11px]">Isc 2ph (kA)</span>
                <input
                  type="text"
                  value={formData.gridIsc2Ph}
                  onChange={(e) => onUpdateForm('gridIsc2Ph', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-800 text-[11px]">Isc 3ph מחושב (kA)</span>
                <input
                  type="text"
                  value={formData.gridIsc3PhCalc}
                  onChange={(e) => onUpdateForm('gridIsc3PhCalc', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter pageNum={6} />
    </div>
  );
};

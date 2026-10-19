import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { ReportFormData } from '../data/report-data';
import { InspectionStatus, calculateShortCircuitCurrent, calculate3PhaseShortCircuit } from '../utils/inspection-logic';

interface Page5Props {
  formData: ReportFormData;
  onUpdateForm: <K extends keyof ReportFormData>(key: K, value: ReportFormData[K]) => void;
}

export const Page5: React.FC<Page5Props> = ({ formData, onUpdateForm }) => {
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

  const renderStatusButtons = (
    currentStatus: InspectionStatus,
    onStatusChange: (status: InspectionStatus) => void
  ) => {
    const options: InspectionStatus[] = ['P', 'F', 'NC', 'NA'];
    return (
      <div className="inline-flex border border-gray-300 divide-x divide-x-reverse divide-gray-300 bg-white shadow-2xs">
        {options.map((opt) => {
          const isActive = currentStatus === opt;
          let activeStyle = '';
          if (isActive) {
            if (opt === 'P') activeStyle = 'bg-emerald-600 text-white font-bold';
            else if (opt === 'F') activeStyle = 'bg-rose-600 text-white font-bold';
            else if (opt === 'NC') activeStyle = 'bg-amber-500 text-white font-bold';
            else if (opt === 'NA') activeStyle = 'bg-slate-600 text-white font-bold';
          } else {
            activeStyle = 'text-gray-500 hover:bg-gray-100 hover:text-gray-800';
          }

          return (
            <button
              key={opt}
              type="button"
              onClick={() => onStatusChange(isActive ? null : opt)}
              className={`w-7 h-6 flex items-center justify-center text-[11px] font-sans transition-all cursor-pointer ${activeStyle}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        <PageHeader pageNum={5} />

        {/* Section Title with blue accent mark */}
        <div className="flex items-center justify-start border-r-4 border-sky-600 pr-2 mb-3">
          <h2 className="text-sm font-bold text-gray-900">מדידות ובדיקות</h2>
        </div>

        {/* מידות הגנרטור */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            מידות הגנרטור
          </div>
          <div className="border border-gray-300 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300 p-1 text-xs">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800">רוחב הגנרטור :(cm)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700">cm</span>
                  <input
                    type="text"
                    value={formData.generatorWidthCm}
                    onChange={(e) => onUpdateForm('generatorWidthCm', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800">אורך הגנרטור :(cm)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700">cm</span>
                  <input
                    type="text"
                    value={formData.generatorLengthCm}
                    onChange={(e) => onUpdateForm('generatorLengthCm', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800">גובה הגנרטור :(cm)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700">cm</span>
                  <input
                    type="text"
                    value={formData.generatorHeightCm}
                    onChange={(e) => onUpdateForm('generatorHeightCm', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* מידות החדר */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            מידות החדר
          </div>
          <div className="border border-gray-300 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300 p-1 text-xs">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800">רוחב החדר :(cm)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700">cm</span>
                  <input
                    type="text"
                    value={formData.roomWidthCm}
                    onChange={(e) => onUpdateForm('roomWidthCm', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800">אורך החדר :(cm)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700">cm</span>
                  <input
                    type="text"
                    value={formData.roomLengthCm}
                    onChange={(e) => onUpdateForm('roomLengthCm', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800">גובה החדר :(cm)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700">cm</span>
                  <input
                    type="text"
                    value={formData.roomHeightCm}
                    onChange={(e) => onUpdateForm('roomHeightCm', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* התנגדות בידוד */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            התנגדות בידוד
          </div>
          <div className="border border-gray-300 bg-white p-3 space-y-3 text-xs">
            <div className="font-semibold text-gray-800 text-center">התנגדות בידוד לגוף הגנרטור</div>

            <div className="flex flex-wrap items-center justify-around gap-4" dir="ltr">
              <div className="flex items-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">R ph-e:</span>
                <input
                  type="text"
                  value={formData.rPhE}
                  onChange={(e) => onUpdateForm('rPhE', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
                <span className="text-[11px] text-gray-700 font-sans">MΩ</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">PI :</span>
                <input
                  type="text"
                  value={formData.pi}
                  onChange={(e) => onUpdateForm('pi', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
              </div>

              <div className="flex items-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">tan δ:</span>
                <input
                  type="text"
                  value={formData.tanDelta}
                  onChange={(e) => onUpdateForm('tanDelta', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
              </div>
            </div>

            {/* תקינות והערה */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 border-t border-gray-200 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-800 text-[11px] font-medium">:תקינות</span>
                {renderStatusButtons(formData.insulationStatus, (st) => onUpdateForm('insulationStatus', st))}
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto flex-1 sm:max-w-md mr-0 sm:mr-4">
                <span className="text-gray-800 text-[11px] shrink-0">הערה</span>
                <input
                  type="text"
                  value={formData.insulationNote}
                  onChange={(e) => onUpdateForm('insulationNote', e.target.value)}
                  placeholder="הערה..."
                  className="border border-gray-300 px-2 py-0.5 h-6 w-full text-right text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* התנגדות בידוד כבלים */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            התנגדות בידוד כבלים
          </div>
          <div className="border border-gray-300 bg-white p-3 space-y-3 text-xs">
            <div className="font-semibold text-gray-800 text-center">התנגדות בידוד כבלי היציאה מהגנרטור</div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" dir="ltr">
              <div className="flex items-center justify-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">R ph1-e</span>
                <input
                  type="text"
                  value={formData.rPh1E}
                  onChange={(e) => onUpdateForm('rPh1E', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-16 text-center text-[11px] outline-none"
                />
                <span className="text-[11px] text-gray-700 font-sans">MΩ</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">R ph2-e</span>
                <input
                  type="text"
                  value={formData.rPh2E}
                  onChange={(e) => onUpdateForm('rPh2E', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-16 text-center text-[11px] outline-none"
                />
                <span className="text-[11px] text-gray-700 font-sans">MΩ</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">R ph3-e</span>
                <input
                  type="text"
                  value={formData.rPh3E}
                  onChange={(e) => onUpdateForm('rPh3E', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-16 text-center text-[11px] outline-none"
                />
                <span className="text-[11px] text-gray-700 font-sans">MΩ</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="font-sans font-medium text-gray-800 text-[11px]">R n-e</span>
                <input
                  type="text"
                  value={formData.rNE}
                  onChange={(e) => onUpdateForm('rNE', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-16 text-center text-[11px] outline-none"
                />
                <span className="text-[11px] text-gray-700 font-sans">MΩ</span>
              </div>
            </div>

            {/* תקינות והערה */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 border-t border-gray-200 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-800 text-[11px] font-medium">:תקינות</span>
                {renderStatusButtons(formData.cableInsulationStatus, (st) => onUpdateForm('cableInsulationStatus', st))}
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto flex-1 sm:max-w-md mr-0 sm:mr-4">
                <span className="text-gray-800 text-[11px] shrink-0">הערה</span>
                <input
                  type="text"
                  value={formData.cableInsulationNote}
                  onChange={(e) => onUpdateForm('cableInsulationNote', e.target.value)}
                  placeholder="הערה..."
                  className="border border-gray-300 px-2 py-0.5 h-6 w-full text-right text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* עכבת לולאת התקלה וזרם הקצר הצפוי בחיבור גנרטור */}
        <div>
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1 text-center">
            עכבת לולאת התקלה וזרם הקצר הצפוי בחיבור גנרטור
          </div>
          <div className="border border-gray-300 bg-white p-3 space-y-3 text-xs">
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
                <div className="flex items-center justify-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh1E}
                    onChange={(e) => handleZChange('genZPh1E', 'genIscPh1E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genIscPh1E}
                    onChange={(e) => onUpdateForm('genIscPh1E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph2-e */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph2-e</div>
                <div className="flex items-center justify-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh2E}
                    onChange={(e) => handleZChange('genZPh2E', 'genIscPh2E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genIscPh2E}
                    onChange={(e) => onUpdateForm('genIscPh2E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph3-e */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph3-e</div>
                <div className="flex items-center justify-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh3E}
                    onChange={(e) => handleZChange('genZPh3E', 'genIscPh3E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genIscPh3E}
                    onChange={(e) => onUpdateForm('genIscPh3E', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">kA</span>
                </div>
              </div>
            </div>

            {/* פאזה ↔ אפס */}
            <div className="space-y-1.5 pt-2 border-t border-gray-200">
              <div className="text-xs font-bold text-sky-800 text-right">פאזה ↔ אפס</div>

              {/* Z ph1-n */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph1-n</div>
                <div className="flex items-center justify-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh1N}
                    onChange={(e) => handleZChange('genZPh1N', 'genIscPh1N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genIscPh1N}
                    onChange={(e) => onUpdateForm('genIscPh1N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph2-n */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph2-n</div>
                <div className="flex items-center justify-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh2N}
                    onChange={(e) => handleZChange('genZPh2N', 'genIscPh2N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genIscPh2N}
                    onChange={(e) => onUpdateForm('genIscPh2N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">kA</span>
                </div>
              </div>

              {/* Z ph3-n */}
              <div className="grid grid-cols-3 items-center py-0.5">
                <div className="text-right pr-4 font-sans font-medium text-gray-800 text-[11px]">Z ph3-n</div>
                <div className="flex items-center justify-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh3N}
                    onChange={(e) => handleZChange('genZPh3N', 'genIscPh3N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
                <div className="flex items-center justify-end pl-4 gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genIscPh3N}
                    onChange={(e) => onUpdateForm('genIscPh3N', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">kA</span>
                </div>
              </div>
            </div>

            {/* Bottom 3 values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-sans font-medium text-gray-800 text-[11px]">Z ph1-ph2</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <input
                    type="text"
                    value={formData.genZPh1Ph2}
                    onChange={(e) => {
                      const val = e.target.value;
                      onUpdateForm('genZPh1Ph2', val);
                      const calc3p = calculate3PhaseShortCircuit(val);
                      if (calc3p !== null) {
                        onUpdateForm('genIsc3PhCalc', calc3p.toString());
                      }
                    }}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                  />
                  <span className="text-[11px] text-gray-700 font-sans">mΩ</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-sans font-medium text-gray-800 text-[11px]">Isc 2ph (kA)</span>
                <input
                  type="text"
                  value={formData.genIsc2Ph}
                  onChange={(e) => onUpdateForm('genIsc2Ph', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-800 text-[11px]">Isc 3ph מחושב (kA)</span>
                <input
                  type="text"
                  value={formData.genIsc3PhCalc}
                  onChange={(e) => onUpdateForm('genIsc3PhCalc', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-20 text-center text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageFooter pageNum={5} />
    </div>
  );
};

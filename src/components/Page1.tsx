import React from 'react';
import { PageHeader } from './PageHeader';
import { PageFooter } from './PageFooter';
import { SelectField } from './SelectField';
import { CheckRow } from './CheckRow';
import { ReportFormData } from '../data/report-data';
import { DROPDOWN_OPTIONS } from '../data/options';
import { InspectionStatus, InspectionStats } from '../utils/inspection-logic';
import { Calendar } from 'lucide-react';

interface Page1Props {
  formData: ReportFormData;
  stats: InspectionStats;
  onUpdateForm: <K extends keyof ReportFormData>(key: K, value: ReportFormData[K]) => void;
  onUpdateStatus: (id: number, status: InspectionStatus) => void;
  onUpdateNote: (id: number, note: string) => void;
}

export const Page1: React.FC<Page1Props> = ({
  formData,
  stats,
  onUpdateForm,
  onUpdateStatus,
  onUpdateNote,
}) => {
  return (
    <div className="pdf-page bg-white mx-auto shadow-sm border border-gray-300 p-6 md:p-8 max-w-[850px] min-h-[1130px] flex flex-col justify-between text-right text-gray-900 leading-tight">
      <div>
        {/* Page Top Header */}
        <PageHeader pageNum={1} />

        {/* Company and Document Title Block */}
        <div className="text-center my-3 space-y-0.5">
          <h1 className="text-base font-bold text-gray-900">
            סגל אריאל הנדסת חשמל בע״מ
          </h1>
          <h2 className="text-xl font-bold text-gray-900">
            שער הגולן
          </h2>
          <h3 className="text-sm font-bold text-sky-600">
            בדיקת גנרטור
          </h3>
          <h4 className="text-base font-bold text-sky-500">
            גנרטור
          </h4>
        </div>

        {/* Section 1: נתונים כלליים */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            נתונים כלליים
          </div>
          <div className="border border-gray-300 divide-y divide-gray-300 text-xs bg-white">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">תאריך הבדיקה:</span>
                <div className="flex items-center gap-1 border border-gray-300 px-2 py-0.5 h-6 bg-white text-[11px]" dir="ltr">
                  <input
                    type="text"
                    value={formData.inspectionDate}
                    onChange={(e) => onUpdateForm('inspectionDate', e.target.value)}
                    className="w-20 text-center outline-none bg-transparent"
                  />
                  <Calendar size={12} className="text-gray-500 shrink-0" />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">יצרן מחולל:</span>
                <SelectField
                  value={formData.generatorManufacturer}
                  onChange={(val) => onUpdateForm('generatorManufacturer', val)}
                  options={DROPDOWN_OPTIONS.generatorManufacturers}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">שם המתקן:</span>
                <input
                  type="text"
                  value={formData.facilityName}
                  onChange={(e) => onUpdateForm('facilityName', e.target.value)}
                  className="border border-gray-300 px-2 py-0.5 h-6 w-36 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">דגם:</span>
                <SelectField
                  value={formData.generatorModel}
                  onChange={(val) => onUpdateForm('generatorModel', val)}
                  options={['—', 'UCI274', 'HCI434', 'TAL044', 'LSA42.3', 'ECO38']}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספור מקומי של הגנרטור:</span>
                <input
                  type="text"
                  value={formData.localGeneratorNumber}
                  onChange={(e) => onUpdateForm('localGeneratorNumber', e.target.value)}
                  className="border border-gray-300 px-2 py-0.5 h-6 w-36 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר סידורי של המחולל:</span>
                <input
                  type="text"
                  value={formData.generatorSerialNumber}
                  onChange={(e) => onUpdateForm('generatorSerialNumber', e.target.value)}
                  className="border border-gray-300 px-2 py-0.5 h-6 w-36 text-center text-[11px] bg-white outline-none"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">סוג דלק:</span>
                <SelectField
                  value={formData.fuelType}
                  onChange={(val) => onUpdateForm('fuelType', val)}
                  options={DROPDOWN_OPTIONS.fuelTypes}
                  className="w-36"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מתח נקוב:</span>
                <SelectField
                  value={formData.ratedVoltage}
                  onChange={(val) => onUpdateForm('ratedVoltage', val)}
                  options={DROPDOWN_OPTIONS.voltages}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מיקום הגנרטור וסוג המבנה:</span>
                <SelectField
                  value={formData.generatorLocationStructure}
                  onChange={(val) => onUpdateForm('generatorLocationStructure', val)}
                  options={DROPDOWN_OPTIONS.generatorLocations}
                  className="w-36"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">תדירות:</span>
                <SelectField
                  value={formData.frequency}
                  onChange={(val) => onUpdateForm('frequency', val)}
                  options={DROPDOWN_OPTIONS.frequencies}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">יצרן מנוע מניע:</span>
                <SelectField
                  value={formData.engineManufacturer}
                  onChange={(val) => onUpdateForm('engineManufacturer', val)}
                  options={DROPDOWN_OPTIONS.engineManufacturers}
                  className="w-36"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">ייעוד האספקה:</span>
                <SelectField
                  value={formData.supplyPurpose}
                  onChange={(val) => onUpdateForm('supplyPurpose', val)}
                  options={DROPDOWN_OPTIONS.supplyPurposes}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">דגם מנוע:</span>
                <SelectField
                  value={formData.engineModel}
                  onChange={(val) => onUpdateForm('engineModel', val)}
                  options={['—', 'QSL9-G5', '1106A-70TAG4', 'C9', 'TAD734GE']}
                  className="w-36"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium leading-none">גנרטור קבוע / מובא בהתאם לצורך:</span>
                <SelectField
                  value={formData.generatorTypeStationaryOrPortable}
                  onChange={(val) => onUpdateForm('generatorTypeStationaryOrPortable', val)}
                  options={DROPDOWN_OPTIONS.stationaryOrPortable}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר סידורי של המנוע:</span>
                <input
                  type="text"
                  value={formData.engineSerialNumber}
                  onChange={(e) => onUpdateForm('engineSerialNumber', e.target.value)}
                  className="border border-gray-300 px-2 py-0.5 h-6 w-36 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מתקן מוזן בשלמותו מהגנרטור:</span>
                <SelectField
                  value={formData.fullFacilityFedFromGenerator}
                  onChange={(val) => onUpdateForm('fullFacilityFedFromGenerator', val)}
                  options={DROPDOWN_OPTIONS.yesNoPartial}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 9 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">שנת ייצור:</span>
                <input
                  type="text"
                  value={formData.productionYear}
                  onChange={(e) => onUpdateForm('productionYear', e.target.value)}
                  className="border border-gray-300 px-2 py-0.5 h-6 w-36 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">גנרטור פועל אוטומטית:</span>
                <SelectField
                  value={formData.generatorAutomaticOperation}
                  onChange={(val) => onUpdateForm('generatorAutomaticOperation', val)}
                  options={DROPDOWN_OPTIONS.yesNo}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 10 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">הספק הגנרטור:</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[11px] text-gray-700 font-sans font-medium">kVA</span>
                  <input
                    type="text"
                    value={formData.generatorPowerKVA}
                    onChange={(e) => onUpdateForm('generatorPowerKVA', e.target.value)}
                    className="border border-gray-300 px-2 py-0.5 h-6 w-28 text-center text-[11px] bg-white outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">היתר ממשרד האנרגיה והתשתית:</span>
                <SelectField
                  value={formData.ministryOfEnergyPermit}
                  onChange={(val) => onUpdateForm('ministryOfEnergyPermit', val)}
                  options={DROPDOWN_OPTIONS.energyPermits}
                  className="w-36"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: הארקות */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            הארקות
          </div>
          <div className="border border-gray-300 divide-y divide-gray-300 text-xs bg-white">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">אופן הארקת השיטה בגנרטור:</span>
                <SelectField
                  value={formData.systemEarthingMethod}
                  onChange={(val) => onUpdateForm('systemEarthingMethod', val)}
                  options={DROPDOWN_OPTIONS.systemEarthing}
                  className="w-24"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium leading-none">שטח חתך מוליכי הארקת שיטה :(mm²)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[10px] text-gray-700">mm²</span>
                  <input
                    type="text"
                    value={formData.systemEarthingConductorArea}
                    onChange={(e) => onUpdateForm('systemEarthingConductorArea', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                  />
                  <SelectField
                    value="—"
                    onChange={(val) => onUpdateForm('systemEarthingConductorArea', val)}
                    options={['—', '16', '25', '35', '50', '70', '95', '120', '150']}
                    className="w-10"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">חומר מוליך השיטה:</span>
                <SelectField
                  value={formData.systemEarthingConductorMaterial}
                  onChange={(val) => onUpdateForm('systemEarthingConductorMaterial', val)}
                  options={DROPDOWN_OPTIONS.conductorMaterials}
                  className="w-24"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">אופן הארקת הגנה בגנרטור:</span>
                <SelectField
                  value={formData.protectiveEarthingMethod}
                  onChange={(val) => onUpdateForm('protectiveEarthingMethod', val)}
                  options={DROPDOWN_OPTIONS.protectiveEarthing}
                  className="w-24"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium leading-none">שטח חתך מוליכי הארקת הגנה :(mm²)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[10px] text-gray-700">mm²</span>
                  <input
                    type="text"
                    value={formData.protectiveEarthingConductorArea}
                    onChange={(e) => onUpdateForm('protectiveEarthingConductorArea', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                  />
                  <SelectField
                    value="—"
                    onChange={(val) => onUpdateForm('protectiveEarthingConductorArea', val)}
                    options={['—', '16', '25', '35', '50', '70', '95', '120', '150']}
                    className="w-10"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">חומר מוליך הגנה:</span>
                <SelectField
                  value={formData.protectiveEarthingConductorMaterial}
                  onChange={(val) => onUpdateForm('protectiveEarthingConductorMaterial', val)}
                  options={DROPDOWN_OPTIONS.conductorMaterials}
                  className="w-24"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">שיטת הגנה כנגד חשמול במתקן:</span>
                <SelectField
                  value={formData.facilityProtectionMethod}
                  onChange={(val) => onUpdateForm('facilityProtectionMethod', val)}
                  options={DROPDOWN_OPTIONS.systemEarthing}
                  className="w-32"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">שיטת הגנה בהזנה מגנרטור:</span>
                <SelectField
                  value={formData.generatorFeedingProtectionMethod}
                  onChange={(val) => onUpdateForm('generatorFeedingProtectionMethod', val)}
                  options={DROPDOWN_OPTIONS.systemEarthing}
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: מפסקים והגנות - highlighted header frame matching PDF */}
        <div className="mb-4 border border-sky-400 bg-white">
          <div className="border-b border-sky-400 px-3 py-1 text-xs font-bold text-gray-900 text-center">
            מפסקים והגנות
          </div>

          {/* מפסק גנרטור */}
          <div className="border-b border-gray-300">
            <div className="border-b border-gray-200 px-3 py-0.5 text-[11px] font-bold text-gray-800 text-center">
              מפסק גנרטור
            </div>
            <div className="divide-y divide-gray-300 text-xs">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מיקום מפסק ראשי:</span>
                <SelectField
                  value={formData.genBreakerLocation}
                  onChange={(val) => onUpdateForm('genBreakerLocation', val)}
                  options={DROPDOWN_OPTIONS.breakerLocations}
                  className="w-48"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">סוג מפסק:</span>
                  <SelectField
                    value={formData.genBreakerType}
                    onChange={(val) => onUpdateForm('genBreakerType', val)}
                    options={DROPDOWN_OPTIONS.breakerTypes}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">זרם נקוב :(A)</span>
                  <div className="flex items-center gap-1" dir="ltr">
                    <span className="text-[11px] text-gray-700">A</span>
                    <input
                      type="text"
                      value={formData.genBreakerRatedCurrent}
                      onChange={(e) => onUpdateForm('genBreakerRatedCurrent', e.target.value)}
                      className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                    />
                    <SelectField
                      value="—"
                      onChange={(val) => onUpdateForm('genBreakerRatedCurrent', val)}
                      options={['—', '100', '160', '250', '400', '630', '800', '1000', '1250', '1600']}
                      className="w-10"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">יצרן:</span>
                  <SelectField
                    value={formData.genBreakerManufacturer}
                    onChange={(val) => onUpdateForm('genBreakerManufacturer', val)}
                    options={['—', 'ABB', 'Schneider Electric', 'Siemens', 'Eaton', 'Terasaki', 'Hyundai', 'LS', 'Chint', 'אחר']}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">דגם:</span>
                  <SelectField
                    value={formData.genBreakerModel}
                    onChange={(val) => onUpdateForm('genBreakerModel', val)}
                    options={['—', 'Compact NSX', 'Tmax XT', '3VA', 'NZM', 'Masterpact']}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">מנגנון:</span>
                  <SelectField
                    value={formData.genBreakerMechanism}
                    onChange={(val) => onUpdateForm('genBreakerMechanism', val)}
                    options={DROPDOWN_OPTIONS.breakerMechanisms}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">חיבור לסליל הפסקה:</span>
                  <SelectField
                    value={formData.genBreakerShuntTrip}
                    onChange={(val) => onUpdateForm('genBreakerShuntTrip', val)}
                    options={DROPDOWN_OPTIONS.shuntTripConnections}
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* מפסק בלוח המוזן מהגנרטור */}
          <div>
            <div className="border-b border-gray-200 px-3 py-0.5 text-[11px] font-bold text-gray-800 text-center">
              מפסק בלוח המוזן מהגנרטור
            </div>
            <div className="divide-y divide-gray-300 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">סוג מפסק:</span>
                  <SelectField
                    value={formData.fedBreakerType}
                    onChange={(val) => onUpdateForm('fedBreakerType', val)}
                    options={DROPDOWN_OPTIONS.breakerTypes}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">זרם נקוב :(A)</span>
                  <div className="flex items-center gap-1" dir="ltr">
                    <span className="text-[11px] text-gray-700">A</span>
                    <input
                      type="text"
                      value={formData.fedBreakerRatedCurrent}
                      onChange={(e) => onUpdateForm('fedBreakerRatedCurrent', e.target.value)}
                      className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                    />
                    <SelectField
                      value="—"
                      onChange={(val) => onUpdateForm('fedBreakerRatedCurrent', val)}
                      options={['—', '100', '160', '250', '400', '630', '800', '1000', '1250', '1600']}
                      className="w-10"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">יצרן:</span>
                  <SelectField
                    value={formData.fedBreakerManufacturer}
                    onChange={(val) => onUpdateForm('fedBreakerManufacturer', val)}
                    options={['—', 'ABB', 'Schneider Electric', 'Siemens', 'Eaton', 'Terasaki', 'Hyundai', 'LS', 'Chint', 'אחר']}
                    className="w-24"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">דגם:</span>
                  <SelectField
                    value={formData.fedBreakerModel}
                    onChange={(val) => onUpdateForm('fedBreakerModel', val)}
                    options={['—', 'Compact NSX', 'Tmax XT', '3VA', 'NZM', 'Masterpact']}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">מנגנון:</span>
                  <SelectField
                    value={formData.fedBreakerMechanism}
                    onChange={(val) => onUpdateForm('fedBreakerMechanism', val)}
                    options={DROPDOWN_OPTIONS.breakerMechanisms}
                    className="w-24"
                  />
                </div>
                <div className="flex items-center justify-between p-1 px-2">
                  <span className="text-gray-800 font-medium">חיבור לסליל הפסקה:</span>
                  <SelectField
                    value={formData.fedBreakerShuntTrip}
                    onChange={(val) => onUpdateForm('fedBreakerShuntTrip', val)}
                    options={DROPDOWN_OPTIONS.shuntTripConnections}
                    className="w-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: כבלי היציאה מהגנרטור */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            כבלי היציאה מהגנרטור
          </div>
          <div className="border border-gray-300 divide-y divide-gray-300 text-xs bg-white">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">סוג כבל ההזנה:</span>
                <SelectField
                  value={formData.cableType}
                  onChange={(val) => onUpdateForm('cableType', val)}
                  options={DROPDOWN_OPTIONS.cableTypes}
                  className="w-24"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">סוג בידוד:</span>
                <SelectField
                  value={formData.insulationType}
                  onChange={(val) => onUpdateForm('insulationType', val)}
                  options={DROPDOWN_OPTIONS.insulationTypes}
                  className="w-24"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מבנה:</span>
                <SelectField
                  value={formData.structure}
                  onChange={(val) => onUpdateForm('structure', val)}
                  options={DROPDOWN_OPTIONS.cableStructures}
                  className="w-24"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר כבלים במקביל:</span>
                <input
                  type="text"
                  value={formData.parallelCablesCount}
                  onChange={(e) => onUpdateForm('parallelCablesCount', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium leading-none">שטח חתך פאזה :(mm²)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[10px] text-gray-700">mm²</span>
                  <input
                    type="text"
                    value={formData.phaseConductorArea}
                    onChange={(e) => onUpdateForm('phaseConductorArea', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                  />
                  <SelectField
                    value="—"
                    onChange={(val) => onUpdateForm('phaseConductorArea', val)}
                    options={['—', '16', '25', '35', '50', '70', '95', '120', '150', '185', '240', '300']}
                    className="w-10"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">שטח חתך אפס:</span>
                <SelectField
                  value={formData.neutralConductorArea}
                  onChange={(val) => onUpdateForm('neutralConductorArea', val)}
                  options={['—', '16 mm²', '25 mm²', '35 mm²', '50 mm²', '70 mm²', '95 mm²', '120 mm²', '150 mm²', '185 mm²', '240 mm²']}
                  className="w-24"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר מוליכי פאזה:</span>
                <input
                  type="text"
                  value={formData.phaseConductorsCount}
                  onChange={(e) => onUpdateForm('phaseConductorsCount', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר מוליכי אפס:</span>
                <input
                  type="text"
                  value={formData.neutralConductorsCount}
                  onChange={(e) => onUpdateForm('neutralConductorsCount', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר מוליכי הארקה:</span>
                <input
                  type="text"
                  value={formData.earthConductorsCount}
                  onChange={(e) => onUpdateForm('earthConductorsCount', e.target.value)}
                  className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium leading-none">שטח חתך מוליך הארקה :(mm²)</span>
                <div className="flex items-center gap-1" dir="ltr">
                  <span className="text-[10px] text-gray-700">mm²</span>
                  <input
                    type="text"
                    value={formData.earthConductorArea}
                    onChange={(e) => onUpdateForm('earthConductorArea', e.target.value)}
                    className="border border-gray-300 px-1 py-0.5 h-6 w-14 text-center text-[11px] bg-white outline-none"
                  />
                  <SelectField
                    value="—"
                    onChange={(val) => onUpdateForm('earthConductorArea', val)}
                    options={['—', '16', '25', '35', '50', '70', '95', '120', '150']}
                    className="w-10"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">חומר מוליך ההארקה:</span>
                <SelectField
                  value={formData.earthConductorMaterial}
                  onChange={(val) => onUpdateForm('earthConductorMaterial', val)}
                  options={DROPDOWN_OPTIONS.conductorMaterials}
                  className="w-24"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="flex items-center justify-between p-1 px-2">
              <span className="text-gray-800 font-medium">רישום כבל:</span>
              <SelectField
                value={formData.cableMarking}
                onChange={(val) => onUpdateForm('cableMarking', val)}
                options={DROPDOWN_OPTIONS.cableMarkings}
                className="w-48"
              />
            </div>
          </div>
        </div>

        {/* Section 5: מערכת החלפה / סנכרון */}
        <div className="mb-4">
          <div className="text-xs font-bold text-gray-900 mb-1 pr-1">
            מערכת החלפה / סנכרון
          </div>
          <div className="border border-gray-300 divide-y divide-gray-300 text-xs bg-white">
            {/* Row 1 */}
            <div className="flex items-center justify-between p-1 px-2">
              <span className="text-gray-800 font-medium">מערכת החלפה / סנכרון:</span>
              <SelectField
                value={formData.changeoverSystem}
                onChange={(val) => onUpdateForm('changeoverSystem', val)}
                options={DROPDOWN_OPTIONS.changeoverSystems}
                className="w-48"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">אמצעי מניעת פעולה הדדית:</span>
                <SelectField
                  value={formData.mutualOperationPrevention}
                  onChange={(val) => onUpdateForm('mutualOperationPrevention', val)}
                  options={DROPDOWN_OPTIONS.mutualOperationPreventions}
                  className="w-36"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">מספר קטבים במערכת ההחלפה:</span>
                <SelectField
                  value={formData.changeoverPolesCount}
                  onChange={(val) => onUpdateForm('changeoverPolesCount', val)}
                  options={DROPDOWN_OPTIONS.changeoverPoles}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-gray-300">
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">יצרן בקר ההחלפה:</span>
                <SelectField
                  value={formData.changeoverControllerManufacturer}
                  onChange={(val) => onUpdateForm('changeoverControllerManufacturer', val)}
                  options={DROPDOWN_OPTIONS.changeoverControllerMfrs}
                  className="w-36"
                />
              </div>
              <div className="flex items-center justify-between p-1 px-2">
                <span className="text-gray-800 font-medium">שיטת החיגור:</span>
                <SelectField
                  value={formData.interlockingMethod}
                  onChange={(val) => onUpdateForm('interlockingMethod', val)}
                  options={DROPDOWN_OPTIONS.interlockingMethods}
                  className="w-36"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex items-center justify-between p-1 px-2">
              <span className="text-gray-800 font-medium">דגם בקר ההחלפה:</span>
              <SelectField
                value={formData.changeoverControllerModel}
                onChange={(val) => onUpdateForm('changeoverControllerModel', val)}
                options={['—', 'DSE 7320', 'DSE 8610', 'InteliLite AMF 25', 'InteliGen GSC', 'AGC 150', 'Socomec ATyS']}
                className="w-48"
              />
            </div>
          </div>
        </div>

        {/* Section 6: פרטי הבדיקה + Item #1: תיעוד */}
        <div>
          {/* Summary Status Bar */}
          <div className="flex flex-row items-center justify-between mb-1 px-1 text-xs">
            <span className="font-bold text-gray-900">פרטי הבדיקה</span>
            <div className="text-gray-600 font-sans tracking-tight text-[11px]">
              <span className={stats.p > 0 ? 'text-emerald-700 font-semibold' : ''}>{stats.p} תקין</span>
              {' · '}
              <span className={stats.f > 0 ? 'text-rose-700 font-semibold' : ''}>{stats.f} לא תקין</span>
              {' · '}
              <span className={stats.nc > 0 ? 'text-amber-700 font-semibold' : ''}>{stats.nc} לא נבדק</span>
              {' · '}
              <span className={stats.na > 0 ? 'text-slate-700 font-semibold' : ''}>{stats.na} לא ישים</span>
              {' · '}
              <span>מתוך 54</span>
            </div>
          </div>

          <div className="border border-gray-300">
            {/* Table Header Row */}
            <div className="flex flex-row items-center justify-between border-b border-gray-300 py-1 px-2 text-xs font-semibold text-gray-700">
              <div className="flex-1 text-right pr-2">בדיקת גנרטור</div>
              <div className="shrink-0 mx-2 text-[10px] text-gray-500 font-normal">
                P – תקין | F – לא תקין | NC – לא נבדק | NA – לא ישים
              </div>
              <div className="w-48 sm:w-64 text-center text-[11px] text-gray-600 font-normal">
                פירוט והערות
              </div>
            </div>

            {/* Item 1: תיעוד */}
            <CheckRow
              id={1}
              text="תיעוד"
              status={formData.checklistStatuses['item_1'] || null}
              note={formData.checklistNotes['item_1'] || ''}
              onStatusChange={(status) => onUpdateStatus(1, status)}
              onNoteChange={(note) => onUpdateNote(1, note)}
            />
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <PageFooter pageNum={1} />
    </div>
  );
};

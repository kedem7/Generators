import { ReportFormData } from './report-data';
import { InspectionStatus } from '../utils/inspection-logic';

export const getSampleReportData = (): ReportFormData => {
  const statuses: Record<string, InspectionStatus> = {};
  const notes: Record<string, string> = {};

  for (let i = 1; i <= 54; i++) {
    if (i === 10) {
      statuses[`item_${i}`] = 'NA';
      notes[`item_${i}`] = 'אין מיכל דלק נפרד (מיכל יומי אינטגרלי)';
    } else if (i === 17) {
      statuses[`item_${i}`] = 'P';
      notes[`item_${i}`] = 'שילוט ברור ומלא';
    } else if (i === 28) {
      statuses[`item_${i}`] = 'P';
      notes[`item_${i}`] = 'מאצרה תקנית שלמה ויבשה';
    } else {
      statuses[`item_${i}`] = 'P';
      notes[`item_${i}`] = '';
    }
  }

  return {
    inspectionDate: '18/10/2026',
    facilityName: 'שער הגולן',
    localGeneratorNumber: 'GEN-01',
    fuelType: 'סולר',
    generatorLocationStructure: 'חדר ייעודי במבנה',
    engineManufacturer: 'Perkins',
    engineModel: '1106A-70TAG4',
    engineSerialNumber: 'PK-994821',
    productionYear: '2023',
    generatorPowerKVA: '250',
    generatorManufacturer: 'Stamford',
    generatorModel: 'UCI274',
    generatorSerialNumber: 'ST-884210',
    ratedVoltage: '400/230V',
    frequency: '50 Hz',
    supplyPurpose: 'חירום וגיבוי',
    generatorTypeStationaryOrPortable: 'גנרטור קבוע',
    fullFacilityFedFromGenerator: 'כן',
    generatorAutomaticOperation: 'כן',
    ministryOfEnergyPermit: 'קיים ובתוקף',

    systemEarthingMethod: 'TN-S',
    systemEarthingConductorArea: '70',
    systemEarthingConductorMaterial: 'נחושת Cu',
    protectiveEarthingMethod: 'הארקת הגנה בלבד',
    protectiveEarthingConductorArea: '70',
    protectiveEarthingConductorMaterial: 'נחושת Cu',
    facilityProtectionMethod: 'TN-S',
    generatorFeedingProtectionMethod: 'TN-S',

    genBreakerLocation: 'בלוח גנרטור',
    genBreakerType: 'MCCB (יצוק)',
    genBreakerRatedCurrent: '400',
    genBreakerManufacturer: 'ABB',
    genBreakerModel: 'Tmax XT5',
    genBreakerMechanism: 'אלקטרוני',
    genBreakerShuntTrip: 'מחובר ופועל',

    fedBreakerType: 'MCCB (יצוק)',
    fedBreakerRatedCurrent: '400',
    fedBreakerManufacturer: 'ABB',
    fedBreakerModel: 'Tmax XT5',
    fedBreakerMechanism: 'אלקטרוני',
    fedBreakerShuntTrip: 'מחובר ופועל',

    cableType: 'XLPE/PVC',
    insulationType: 'XLPE',
    structure: 'רב-גידי',
    parallelCablesCount: '1',
    phaseConductorArea: '185',
    neutralConductorArea: '95 mm²',
    phaseConductorsCount: '3',
    neutralConductorsCount: '1',
    earthConductorsCount: '1',
    earthConductorArea: '95',
    earthConductorMaterial: 'נחושת Cu',
    cableMarking: 'תקין ומסומן כנדרש',

    changeoverSystem: 'החלפה אוטומטית (ATS)',
    mutualOperationPrevention: 'חשמלי ומכני',
    changeoverPolesCount: '4 קטבים (4P)',
    changeoverControllerManufacturer: 'Deep Sea Electronics (DSE)',
    interlockingMethod: 'מכני + חשמלי',
    changeoverControllerModel: 'DSE 7320',

    checklistStatuses: statuses,
    checklistNotes: notes,

    generatorWidthCm: '115',
    generatorLengthCm: '320',
    generatorHeightCm: '185',
    roomWidthCm: '350',
    roomLengthCm: '550',
    roomHeightCm: '310',

    rPhE: '>999',
    pi: '3.4',
    tanDelta: '0.012',
    insulationStatus: 'P',
    insulationNote: 'תוצאה מצוינת, ערכים מעל 999MΩ',

    rPh1E: '>999',
    rPh2E: '>999',
    rPh3E: '>999',
    rNE: '>999',
    cableInsulationStatus: 'P',
    cableInsulationNote: 'תקין',

    genZPh1E: '180',
    genIscPh1E: '1.28',
    genZPh2E: '182',
    genIscPh2E: '1.26',
    genZPh3E: '179',
    genIscPh3E: '1.28',

    genZPh1N: '175',
    genIscPh1N: '1.31',
    genZPh2N: '176',
    genIscPh2N: '1.31',
    genZPh3N: '174',
    genIscPh3N: '1.32',

    genZPh1Ph2: '160',
    genIsc2Ph: '1.44',
    genIsc3PhCalc: '1.44',

    p6BreakerType: 'MCCB (יצוק)',
    p6BreakerRatedCurrent: '400',
    p6BreakerManufacturer: 'Schneider Electric',
    p6BreakerModel: 'Compact NSX400',
    p6BreakerMechanism: 'אלקטרוני',
    p6BreakerShuntTrip: 'מחובר ופועל',

    p6BreakerFitMinShortCircuit: 'כן',
    p6BreakerFitMinShortCircuitNote: 'הגנות מכוונות כנדרש לזרם קצר מינימלי',
    p6BreakerCalibrated: 'כן',
    p6BreakerCalibratedNote: 'ערכי כוונון נבדקו ואומתו',
    p6BreakerReplacementRequired: 'לא',
    p6BreakerReplacementRequiredNote: 'המפסק תקין ומתאים למתקן',

    gridZPh1E: '120',
    gridIscPh1E: '1.92',
    gridZPh2E: '122',
    gridIscPh2E: '1.89',
    gridZPh3E: '119',
    gridIscPh3E: '1.93',

    gridZPh1N: '115',
    gridIscPh1N: '2.00',
    gridZPh2N: '117',
    gridIscPh2N: '1.97',
    gridZPh3N: '116',
    gridIscPh3N: '1.98',

    gridZPh1Ph2: '105',
    gridIsc2Ph: '2.19',
    gridIsc3PhCalc: '2.20',

    p7BreakerType: 'MCCB (יצוק)',
    p7BreakerRatedCurrent: '400',
    p7BreakerManufacturer: 'ABB',
    p7BreakerModel: 'Tmax XT5',
    p7BreakerMechanism: 'אלקטרוני',
    p7BreakerShuntTrip: 'מחובר ופועל',

    p7BreakerFitMinShortCircuit: 'כן',
    p7BreakerFitMinShortCircuitNote: 'תקין',
    p7BreakerCalibrated: 'כן',
    p7BreakerCalibratedNote: 'כוונן ונבדק',
    p7BreakerReplacementRequired: 'לא',
    p7BreakerReplacementRequiredNote: 'תקין',

    instruments: [
      {
        num: 1,
        type: 'בודק התקנות משולב',
        manufacturer: 'Metrel',
        model: 'MI 3102 BT',
        serial: '1942008',
        calDate: '15/06/2027',
      },
      {
        num: 2,
        type: 'מד התנגדות בידוד',
        manufacturer: 'Fluke',
        model: '1507',
        serial: 'FL-499120',
        calDate: '22/08/2027',
      },
    ],

    inspectorName: 'אריאל סגל',
    inspectorLicense: '120875',
    inspectorDate: '18/10/2026',
  };
};

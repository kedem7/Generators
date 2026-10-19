import { InspectionStatus } from '../utils/inspection-logic';

export interface ChecklistItemDef {
  id: number;
  page: number;
  section: string;
  text: string;
}

export const CHECKLIST_ITEMS: ChecklistItemDef[] = [
  // Page 1
  {
    id: 1,
    page: 1,
    section: 'פרטי הבדיקה',
    text: 'תיעוד',
  },
  // Page 2
  {
    id: 2,
    page: 2,
    section: 'כללי',
    text: 'הצהרת החשמלאי על תקינות ההתקנה',
  },
  {
    id: 3,
    page: 2,
    section: 'כללי',
    text: 'תוכנית חשמל עדכנית',
  },
  {
    id: 4,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'התאמת מוליכי הגנרטור לזרם ולתנאי ההתקנה',
  },
  {
    id: 5,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'תקינות הארקת שיטה',
  },
  {
    id: 6,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'תקינות הארקת הגנה',
  },
  {
    id: 7,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'תקינות פס השוואת פוטנציאלים',
  },
  {
    id: 8,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'שטחי חתך מוליכי הארקה ושילוטם',
  },
  {
    id: 9,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'רציפות ההארקות בין לוחות',
  },
  {
    id: 10,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'הארקת מיכל דלק נפרד מגוף הגנרטור',
  },
  {
    id: 11,
    page: 2,
    section: 'מוליכים והארקות',
    text: 'כבלים חסיני אש ללחצן חירום וללוחות חירום',
  },
  {
    id: 12,
    page: 2,
    section: 'שילוט',
    text: 'שילוט בלוח ראשי "גנרטור מופעל אוטומטית"',
  },
  {
    id: 13,
    page: 2,
    section: 'שילוט',
    text: 'שילוט בלוח גנרטור "גנרטור מופעל אוטומטית"',
  },
  {
    id: 14,
    page: 2,
    section: 'שילוט',
    text: 'שילוט מפסק גנרטור',
  },
  {
    id: 15,
    page: 2,
    section: 'שילוט',
    text: 'לוחית זיהוי קריאה',
  },
  {
    id: 16,
    page: 2,
    section: 'שילוט',
    text: 'שילוט חדר גנרטור',
  },
  {
    id: 17,
    page: 2,
    section: 'שילוט',
    text: 'תקינות השילוט של מא"זים בלוח פיקוד גנרטור',
  },
  {
    id: 18,
    page: 2,
    section: 'מצברים וטעינה',
    text: 'טעינת המצבר כשהגנרטור אינו בפעולה',
  },
  {
    id: 19,
    page: 2,
    section: 'מצברים וטעינה',
    text: 'טעינת המצבר כשהגנרטור בפעולה',
  },
  {
    id: 20,
    page: 2,
    section: 'מצברים וטעינה',
    text: 'מתח מצברים תקין',
  },
  // Page 3
  {
    id: 21,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'מרחקי מעברים סביב הגנרטור',
  },
  {
    id: 22,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'דלת נפתחת החוצה, פתיחה מבפנים ללא מפתח',
  },
  {
    id: 23,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'הארקת דלת כניסה',
  },
  {
    id: 24,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'תאורת חירום בחדר',
  },
  {
    id: 25,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'שילוט יציאה',
  },
  {
    id: 26,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'ציוד חירום',
  },
  {
    id: 27,
    page: 3,
    section: 'מבנה ובטיחות',
    text: '2 שקעי כוח לפחות',
  },
  {
    id: 28,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'מניעת יציאת נוזלים מחדר גנרטור (מאצרה)',
  },
  {
    id: 29,
    page: 3,
    section: 'מבנה ובטיחות',
    text: 'ניקיון החדר (חומרים דליקים, משמש כמחסן)',
  },
  {
    id: 30,
    page: 3,
    section: 'אוורור ופליטה',
    text: 'אוורור החדר',
  },
  {
    id: 31,
    page: 3,
    section: 'אוורור ופליטה',
    text: 'גדלי פתחי כניסת אויר',
  },
  {
    id: 32,
    page: 3,
    section: 'אוורור ופליטה',
    text: 'העדר מעבר צנרת פליטה ליד כבלים',
  },
  {
    id: 33,
    page: 3,
    section: 'אוורור ופליטה',
    text: 'בידוד תרמי של צנרת פליטת גזים',
  },
  {
    id: 34,
    page: 3,
    section: 'אוורור ופליטה',
    text: 'בידוד צנרת שירותים אחרים',
  },
  {
    id: 35,
    page: 3,
    section: 'הגנות',
    text: 'הגנה מאבק על מפסק ראשי',
  },
  {
    id: 36,
    page: 3,
    section: 'הגנות',
    text: 'הגנה על חלקים מסתובבים',
  },
  {
    id: 37,
    page: 3,
    section: 'אש',
    text: 'כיבוי אש בחדר — גלאי / ספרינקלרים / מטפים',
  },
  {
    id: 38,
    page: 3,
    section: 'אש',
    text: 'התקן הדממה עבור כיבוי אש ושילוטו',
  },
  // Page 4
  {
    id: 39,
    page: 4,
    section: 'בדיקות חשמליות',
    text: 'בדיקת רציפות הארקה לגוף הגנרטור',
  },
  {
    id: 40,
    page: 4,
    section: 'בדיקות חשמליות',
    text: 'תקינות הגנות לממסר העדר מתח ובקר ההחלפה והתאמתן לזרם קצר צפוי',
  },
  {
    id: 41,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'בדיקת התנעת הגנרטור',
  },
  {
    id: 42,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'תקינות כיוון סיבוב (סדר פזות)',
  },
  {
    id: 43,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'מתח הגנרטור בפעולה',
  },
  {
    id: 44,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'תדר הגנרטור בפעולה',
  },
  {
    id: 45,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'תקינות החלפת הזנות',
  },
  {
    id: 46,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'התאמת מספר הקטבים במפסק ההחלפה לתקנות',
  },
  {
    id: 47,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'תקינות ביצוע סנכרון',
  },
  {
    id: 48,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'העברה שקטה אחרי חזרת החשמל',
  },
  {
    id: 49,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'מניעת חיבור קבלים לשיפור מקדם הספק במתקן',
  },
  {
    id: 50,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'בדיקת הפסקת גנרטור לאחר חזרת המתח',
  },
  {
    id: 51,
    page: 4,
    section: 'הפעלה והחלפה',
    text: 'בדיקת פעולת לחצן הפסקת חירום',
  },
  {
    id: 52,
    page: 4,
    section: 'סימון וחיווי',
    text: 'נוריות סימון וחיוויים על הגנרטור',
  },
  {
    id: 53,
    page: 4,
    section: 'סימון וחיווי',
    text: 'נוריות סימון וחיוויים בפנל כבאים (גנרטור חירום): ירוק — פועל, אדום — מופסק, אדום — לא במצב אוטומטי, צהוב — תקלה כללית',
  },
  {
    id: 54,
    page: 4,
    section: 'סימון וחיווי',
    text: 'חיוויים נוספים בפנל כבאים: כמות סולר, כמות שמן, מצב טעינת מצבר, מערכת תצוגה בעברית',
  },
];

export interface ReportFormData {
  // Page 1 Header & General Data
  inspectionDate: string;
  facilityName: string;
  localGeneratorNumber: string;
  fuelType: string;
  generatorLocationStructure: string;
  engineManufacturer: string;
  engineModel: string;
  engineSerialNumber: string;
  productionYear: string;
  generatorPowerKVA: string;
  generatorManufacturer: string;
  generatorModel: string;
  generatorSerialNumber: string;
  ratedVoltage: string;
  frequency: string;
  supplyPurpose: string;
  generatorTypeStationaryOrPortable: string;
  fullFacilityFedFromGenerator: string;
  generatorAutomaticOperation: string;
  ministryOfEnergyPermit: string;

  // Page 1 Earthing
  systemEarthingMethod: string;
  systemEarthingConductorArea: string;
  systemEarthingConductorMaterial: string;
  protectiveEarthingMethod: string;
  protectiveEarthingConductorArea: string;
  protectiveEarthingConductorMaterial: string;
  facilityProtectionMethod: string;
  generatorFeedingProtectionMethod: string;

  // Page 1 Breakers & Protections
  genBreakerLocation: string;
  genBreakerType: string;
  genBreakerRatedCurrent: string;
  genBreakerManufacturer: string;
  genBreakerModel: string;
  genBreakerMechanism: string;
  genBreakerShuntTrip: string;

  fedBreakerType: string;
  fedBreakerRatedCurrent: string;
  fedBreakerManufacturer: string;
  fedBreakerModel: string;
  fedBreakerMechanism: string;
  fedBreakerShuntTrip: string;

  // Page 1 Outgoing Cables
  cableType: string;
  insulationType: string;
  structure: string;
  parallelCablesCount: string;
  phaseConductorArea: string;
  neutralConductorArea: string;
  phaseConductorsCount: string;
  neutralConductorsCount: string;
  earthConductorsCount: string;
  earthConductorArea: string;
  earthConductorMaterial: string;
  cableMarking: string;

  // Page 1 Changeover / Synchronization
  changeoverSystem: string;
  mutualOperationPrevention: string;
  changeoverPolesCount: string;
  changeoverControllerManufacturer: string;
  interlockingMethod: string;
  changeoverControllerModel: string;

  // 54 Checklist item statuses & notes (keys: item_1 ... item_54)
  checklistStatuses: Record<string, InspectionStatus>;
  checklistNotes: Record<string, string>;

  // Page 5 Dimensions & Measurements
  generatorWidthCm: string;
  generatorLengthCm: string;
  generatorHeightCm: string;
  roomWidthCm: string;
  roomLengthCm: string;
  roomHeightCm: string;

  // Page 5 Insulation
  rPhE: string;
  pi: string;
  tanDelta: string;
  insulationStatus: InspectionStatus;
  insulationNote: string;

  // Page 5 Cable Insulation
  rPh1E: string;
  rPh2E: string;
  rPh3E: string;
  rNE: string;
  cableInsulationStatus: InspectionStatus;
  cableInsulationNote: string;

  // Page 5 Loop impedance generator connection
  genZPh1E: string;
  genIscPh1E: string;
  genZPh2E: string;
  genIscPh2E: string;
  genZPh3E: string;
  genIscPh3E: string;

  genZPh1N: string;
  genIscPh1N: string;
  genZPh2N: string;
  genIscPh2N: string;
  genZPh3N: string;
  genIscPh3N: string;

  genZPh1Ph2: string;
  genIsc2Ph: string;
  genIsc3PhCalc: string;

  // Page 6 Breaker & Grid Impedance
  p6BreakerType: string;
  p6BreakerRatedCurrent: string;
  p6BreakerManufacturer: string;
  p6BreakerModel: string;
  p6BreakerMechanism: string;
  p6BreakerShuntTrip: string;

  p6BreakerFitMinShortCircuit: string;
  p6BreakerFitMinShortCircuitNote: string;
  p6BreakerCalibrated: string;
  p6BreakerCalibratedNote: string;
  p6BreakerReplacementRequired: string;
  p6BreakerReplacementRequiredNote: string;

  gridZPh1E: string;
  gridIscPh1E: string;
  gridZPh2E: string;
  gridIscPh2E: string;
  gridZPh3E: string;
  gridIscPh3E: string;

  gridZPh1N: string;
  gridIscPh1N: string;
  gridZPh2N: string;
  gridIscPh2N: string;
  gridZPh3N: string;
  gridIscPh3N: string;

  gridZPh1Ph2: string;
  gridIsc2Ph: string;
  gridIsc3PhCalc: string;

  // Page 7 Breaker 2, Instruments & Inspector
  p7BreakerType: string;
  p7BreakerRatedCurrent: string;
  p7BreakerManufacturer: string;
  p7BreakerModel: string;
  p7BreakerMechanism: string;
  p7BreakerShuntTrip: string;

  p7BreakerFitMinShortCircuit: string;
  p7BreakerFitMinShortCircuitNote: string;
  p7BreakerCalibrated: string;
  p7BreakerCalibratedNote: string;
  p7BreakerReplacementRequired: string;
  p7BreakerReplacementRequiredNote: string;

  instruments: Array<{
    num: number;
    type: string;
    manufacturer: string;
    model: string;
    serial: string;
    calDate: string;
  }>;

  inspectorName: string;
  inspectorLicense: string;
  inspectorDate: string;
}

export const INITIAL_FORM_DATA: ReportFormData = {
  inspectionDate: '18/10/2026',
  facilityName: 'שער הגולן',
  localGeneratorNumber: '',
  fuelType: '—',
  generatorLocationStructure: '—',
  engineManufacturer: '—',
  engineModel: '—',
  engineSerialNumber: '',
  productionYear: '',
  generatorPowerKVA: '',
  generatorManufacturer: '—',
  generatorModel: '—',
  generatorSerialNumber: '',
  ratedVoltage: '—',
  frequency: '—',
  supplyPurpose: '—',
  generatorTypeStationaryOrPortable: '—',
  fullFacilityFedFromGenerator: '—',
  generatorAutomaticOperation: '—',
  ministryOfEnergyPermit: '—',

  systemEarthingMethod: '—',
  systemEarthingConductorArea: '',
  systemEarthingConductorMaterial: '—',
  protectiveEarthingMethod: '—',
  protectiveEarthingConductorArea: '',
  protectiveEarthingConductorMaterial: '—',
  facilityProtectionMethod: '—',
  generatorFeedingProtectionMethod: '—',

  genBreakerLocation: '—',
  genBreakerType: '—',
  genBreakerRatedCurrent: '',
  genBreakerManufacturer: '—',
  genBreakerModel: '—',
  genBreakerMechanism: '—',
  genBreakerShuntTrip: '—',

  fedBreakerType: '—',
  fedBreakerRatedCurrent: '',
  fedBreakerManufacturer: '—',
  fedBreakerModel: '—',
  fedBreakerMechanism: '—',
  fedBreakerShuntTrip: '—',

  cableType: '—',
  insulationType: '—',
  structure: '—',
  parallelCablesCount: '',
  phaseConductorArea: '',
  neutralConductorArea: '—',
  phaseConductorsCount: '3',
  neutralConductorsCount: '1',
  earthConductorsCount: '1',
  earthConductorArea: '',
  earthConductorMaterial: '—',
  cableMarking: '—',

  changeoverSystem: '—',
  mutualOperationPrevention: '—',
  changeoverPolesCount: '—',
  changeoverControllerManufacturer: '—',
  interlockingMethod: '—',
  changeoverControllerModel: '—',

  checklistStatuses: {},
  checklistNotes: {},

  generatorWidthCm: '',
  generatorLengthCm: '',
  generatorHeightCm: '',
  roomWidthCm: '',
  roomLengthCm: '',
  roomHeightCm: '',

  rPhE: '',
  pi: '',
  tanDelta: '',
  insulationStatus: null,
  insulationNote: '',

  rPh1E: '',
  rPh2E: '',
  rPh3E: '',
  rNE: '',
  cableInsulationStatus: null,
  cableInsulationNote: '',

  genZPh1E: '',
  genIscPh1E: '',
  genZPh2E: '',
  genIscPh2E: '',
  genZPh3E: '',
  genIscPh3E: '',

  genZPh1N: '',
  genIscPh1N: '',
  genZPh2N: '',
  genIscPh2N: '',
  genZPh3N: '',
  genIscPh3N: '',

  genZPh1Ph2: '',
  genIsc2Ph: '',
  genIsc3PhCalc: '',

  p6BreakerType: '—',
  p6BreakerRatedCurrent: '—',
  p6BreakerManufacturer: '—',
  p6BreakerModel: '—',
  p6BreakerMechanism: '—',
  p6BreakerShuntTrip: '—',

  p6BreakerFitMinShortCircuit: '—',
  p6BreakerFitMinShortCircuitNote: '',
  p6BreakerCalibrated: '—',
  p6BreakerCalibratedNote: '',
  p6BreakerReplacementRequired: '—',
  p6BreakerReplacementRequiredNote: '',

  gridZPh1E: '',
  gridIscPh1E: '',
  gridZPh2E: '',
  gridIscPh2E: '',
  gridZPh3E: '',
  gridIscPh3E: '',

  gridZPh1N: '',
  gridIscPh1N: '',
  gridZPh2N: '',
  gridIscPh2N: '',
  gridZPh3N: '',
  gridIscPh3N: '',

  gridZPh1Ph2: '',
  gridIsc2Ph: '',
  gridIsc3PhCalc: '',

  p7BreakerType: '—',
  p7BreakerRatedCurrent: '—',
  p7BreakerManufacturer: '—',
  p7BreakerModel: '—',
  p7BreakerMechanism: '—',
  p7BreakerShuntTrip: '—',

  p7BreakerFitMinShortCircuit: '—',
  p7BreakerFitMinShortCircuitNote: '',
  p7BreakerCalibrated: '—',
  p7BreakerCalibratedNote: '',
  p7BreakerReplacementRequired: '—',
  p7BreakerReplacementRequiredNote: '',

  instruments: [
    {
      num: 1,
      type: '',
      manufacturer: '',
      model: '',
      serial: '',
      calDate: 'dd/mm/yyyy',
    },
    {
      num: 2,
      type: '',
      manufacturer: '',
      model: '',
      serial: '',
      calDate: 'dd/mm/yyyy',
    },
  ],

  inspectorName: 'אריאל סגל',
  inspectorLicense: '120875',
  inspectorDate: '18/10/2026',
};

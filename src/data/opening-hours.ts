export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type OpeningHoursEntry = {
  key: DayKey;
  label: string;
  shortLabel: string;
  schemaDay:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  opens: string;
  closes: string;
  closed?: false;
  isWeekend: boolean;
};

export type SpecialHoursEntry = {
  id: string;
  startsOn: string;
  endsOn?: string;
  closed?: boolean;
  opens?: string;
  closes?: string;
  message: string;
  expiresAt?: string;
};

export const openingHours: OpeningHoursEntry[] = [
  {
    key: "monday",
    label: "Ponedeljak",
    shortLabel: "PON",
    schemaDay: "Monday",
    opens: "08:00",
    closes: "22:00",
    isWeekend: false,
  },
  {
    key: "tuesday",
    label: "Utorak",
    shortLabel: "UTO",
    schemaDay: "Tuesday",
    opens: "08:00",
    closes: "22:00",
    isWeekend: false,
  },
  {
    key: "wednesday",
    label: "Sreda",
    shortLabel: "SRE",
    schemaDay: "Wednesday",
    opens: "08:00",
    closes: "22:00",
    isWeekend: false,
  },
  {
    key: "thursday",
    label: "Četvrtak",
    shortLabel: "ČET",
    schemaDay: "Thursday",
    opens: "08:00",
    closes: "22:00",
    isWeekend: false,
  },
  {
    key: "friday",
    label: "Petak",
    shortLabel: "PET",
    schemaDay: "Friday",
    opens: "08:00",
    closes: "22:00",
    isWeekend: false,
  },
  {
    key: "saturday",
    label: "Subota",
    shortLabel: "SUB",
    schemaDay: "Saturday",
    opens: "09:00",
    closes: "21:00",
    isWeekend: true,
  },
  {
    key: "sunday",
    label: "Nedelja",
    shortLabel: "NED",
    schemaDay: "Sunday",
    opens: "09:00",
    closes: "21:00",
    isWeekend: true,
  },
];

export const specialHours: SpecialHoursEntry[] = [];

export const openingHoursSummary = {
  weekdays: "PON–PET 08:00–22:00",
  weekend: "SUB–NED 09:00–21:00",
  combined: "PON–PET 08:00–22:00 / SUB–NED 09:00–21:00",
};

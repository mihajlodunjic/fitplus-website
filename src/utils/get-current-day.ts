import type { DayKey } from "../data/opening-hours";

const weekdayMap: Record<string, DayKey> = {
  monday: "monday",
  tuesday: "tuesday",
  wednesday: "wednesday",
  thursday: "thursday",
  friday: "friday",
  saturday: "saturday",
  sunday: "sunday",
};

export function getCurrentDayKey(date = new Date(), timeZone = "Europe/Belgrade"): DayKey {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone,
  })
    .format(date)
    .toLowerCase();

  return weekdayMap[weekday] ?? "monday";
}

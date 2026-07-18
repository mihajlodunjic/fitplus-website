import { openingHoursSummary } from "./opening-hours";
import { toE164Serbia } from "../utils/format-phone";

export type PhoneEntry = {
  label: string;
  display: string;
  href: string;
  isPrimary: boolean;
};

const primaryPhoneDisplay = "064 307 02 92";
const secondaryPhoneDisplay = "064 447 98 57";
const addressLine = "Stojana Ljubića 71b, Jajinci, Beograd";
const mapQuery = "Stojana Ljubića 71b, Jajinci, Beograd";

export const business = {
  name: "Fit Plus Gym",
  alternateName: "Teretana Fit Plus Jajinci",
  fullName: "Fit Plus Gym Jajinci",
  slogan: "Nemaš izgovor, počni da treniraš danas!",
  language: "sr-RS",
  locale: "sr_RS",
  timeZone: "Europe/Belgrade",
  areaServed: ["Jajinci", "Voždovac"],
  address: {
    street: "Stojana Ljubića 71b",
    prominentNumber: "71B",
    locality: "Jajinci",
    municipality: "Voždovac",
    city: "Beograd",
    countryCode: "RS",
    full: addressLine,
    areaLine: "JAJINCI / VOŽDOVAC / STOJANA LJUBIĆA 71B",
  },
  phones: [
    {
      label: "Primarni telefon",
      display: primaryPhoneDisplay,
      href: `tel:${toE164Serbia(primaryPhoneDisplay)}`,
      isPrimary: true,
    },
    {
      label: "Dodatni telefon",
      display: secondaryPhoneDisplay,
      href: `tel:${toE164Serbia(secondaryPhoneDisplay)}`,
      isPrimary: false,
    },
  ] satisfies PhoneEntry[],
  instagram: {
    handle: "@fitplus.jajinci",
    username: "fitplus.jajinci",
    url: "https://www.instagram.com/fitplus.jajinci/",
  },
  map: {
    label: "Otvori mapu",
    query: mapQuery,
    url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
  },
  logo: {
    src: "/logo.png",
    width: 150,
    height: 150,
    aspectRatio: "1 / 1",
  },
  assets: {
    hasConfirmedInteriorPhotography: false,
  },
  deployment: {
    publicSiteUrlEnv: "PUBLIC_SITE_URL",
  },
} as const;

export const primaryPhone = business.phones.find((phone) => phone.isPrimary) ?? business.phones[0];
export const secondaryPhone = business.phones.find((phone) => !phone.isPrimary) ?? business.phones[1];

export const ctaLinks = {
  pricing: "/cenovnik/",
  trainings: "/treninzi/",
  location: "/lokacija/",
  call: primaryPhone.href,
  secondaryCall: secondaryPhone.href,
  instagram: business.instagram.url,
  map: business.map.url,
};

export const localSummary = {
  address: business.address.full,
  areaLine: business.address.areaLine,
  todayFallback: openingHoursSummary.combined,
};

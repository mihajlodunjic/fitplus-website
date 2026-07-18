import { ctaLinks } from "./business";

export type Program = {
  id: "samostalni" | "vodjeni" | "personalni" | "pilates";
  index: "01" | "02" | "03" | "04";
  name: string;
  anchorHref: string;
  badge: string;
  shortDescription: string;
  facts: string[];
  pricingReferenceIds: string[];
  scheduleReference?: string;
  cta: {
    label: string;
    href: string;
  };
  verificationStatus: "confirmed" | "needs-verification";
};

export const pilatesSchedule = {
  days: ["Ponedeljak", "Sreda", "Petak"],
  shortDays: "PON / SRE / PET",
  time: "18:00",
  note: "Proveri aktuelnost termina pre dolaska.",
  requiresVerification: true,
} as const;

export const programs: Program[] = [
  {
    id: "samostalni",
    index: "01",
    name: "Samostalni trening",
    anchorHref: "/treninzi/#samostalni",
    badge: "DNEVNI / MESEČNI / 3 MESECA",
    shortDescription:
      "Vežbaj svojim ritmom uz izbor dnevnog, mesečnog ili tromesečnog paketa.",
    facts: [],
    pricingReferenceIds: ["daily-package", "monthly-package", "quarter-package"],
    cta: {
      label: "Pogledaj cenovnik",
      href: "/cenovnik/",
    },
    verificationStatus: "confirmed",
  },
  {
    id: "vodjeni",
    index: "02",
    name: "Vođeni trening",
    anchorHref: "/treninzi/#vodjeni",
    badge: "12 TERMINA",
    shortDescription:
      "Dvanaest termina rada uz vođenje trenera za vežbače kojima odgovara dodatna podrška tokom treninga.",
    facts: ["12 termina uz mesečni paket."],
    pricingReferenceIds: ["monthly-guided-supplement"],
    cta: {
      label: "Pozovi i proveri detalje",
      href: ctaLinks.call,
    },
    verificationStatus: "needs-verification",
  },
  {
    id: "personalni",
    index: "03",
    name: "Personalni trening",
    anchorHref: "/treninzi/#personalni",
    badge: "8 I 12 TERMINA",
    shortDescription:
      "Individualniji rad sa trenerom dostupan je kroz pakete od 8 ili 12 termina, kao i kao doplata uz dnevni paket.",
    facts: ["Paketi od 8 ili 12 termina, uz opciju doplate uz dnevni paket."],
    pricingReferenceIds: [
      "daily-personal-supplement",
      "monthly-personal-8-supplement",
      "monthly-personal-12-supplement",
    ],
    cta: {
      label: "Pozovi teretanu",
      href: ctaLinks.call,
    },
    verificationStatus: "needs-verification",
  },
  {
    id: "pilates",
    index: "04",
    name: "Pilates",
    anchorHref: "/treninzi/#pilates",
    badge: "PON / SRE / PET, 18:00",
    shortDescription:
      "Pilates treninzi održavaju se ponedeljkom, sredom i petkom u 18:00.",
    facts: ["PON / SRE / PET u 18:00."],
    pricingReferenceIds: [],
    scheduleReference: "PON / SRE / PET, 18:00",
    cta: {
      label: "Idi na pilates raspored",
      href: "/treninzi/#pilates",
    },
    verificationStatus: "needs-verification",
  },
];

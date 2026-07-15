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
      "Za trening svojim ritmom, uz izbor dnevnog, mesečnog ili tromesečnog paketa iz centralnog cenovnika.",
    facts: [
      "Dostupni su dnevni, mesečni i tromesečni paketi.",
      "Ponuda je vezana za stvarni cenovnik, bez izmišljanja dodatnih pogodnosti.",
    ],
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
      "Rad uz vođenje trenera, sa potvrđenom varijantom od 12 termina koja ostaje vezana za dostavljeni cenovnik.",
    facts: [
      "U cenovniku je potvrđena stavka za 12 termina.",
      "Ne navode se veličina grupe, trajanje termina ni dodatni planovi.",
    ],
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
      "Direktan rad sa trenerom kroz dostavljene opcije od 8 ili 12 termina, kao i kroz doplatu uz dnevni paket.",
    facts: [
      "Potvrđene su opcije od 8 i 12 termina u okviru mesečnog paketa.",
      "Znak + ostaje uz doplate dok se ne potvrdi način obračuna.",
    ],
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
      "Pilates je trenutno prikazan samo kroz potvrđene termine: ponedeljak, sreda i petak u 18:00.",
    facts: [
      "Cena nije dostavljena i zato nije prikazana.",
      "Aktuelnost termina treba potvrditi pre produkcije i dolaska.",
    ],
    pricingReferenceIds: [],
    scheduleReference: "PON / SRE / PET, 18:00",
    cta: {
      label: "Idi na pilates raspored",
      href: "/treninzi/#pilates",
    },
    verificationStatus: "needs-verification",
  },
];

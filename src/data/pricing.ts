export type PricingSupplement = {
  id: string;
  label: string;
  amount: number;
  currency: "RSD";
  type: "supplement";
  prefix: "+";
  period?: "day" | "month";
  sessionCount?: number;
  relatedProgramId: "vodjeni" | "personalni";
  requiresVerification: true;
  note: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  amount: number;
  currency: "RSD";
  type: "base";
  period: "day" | "month" | "quarter";
  relatedProgramId: "samostalni";
  requiresVerification: true;
  note: string;
  supplements?: PricingSupplement[];
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "daily-package",
    name: "Dnevni paket",
    amount: 700,
    currency: "RSD",
    type: "base",
    period: "day",
    relatedProgramId: "samostalni",
    requiresVerification: true,
    note: "Osnovna dnevna opcija iz dostavljenog cenovnika.",
    supplements: [
      {
        id: "daily-personal-supplement",
        label: "Personalni trening uz dnevni paket",
        amount: 2000,
        currency: "RSD",
        type: "supplement",
        prefix: "+",
        period: "day",
        relatedProgramId: "personalni",
        requiresVerification: true,
        note: "Zadržan je originalni znak + dok se ne potvrdi tačna poslovna logika doplate.",
      },
    ],
  },
  {
    id: "monthly-package",
    name: "Mesečni paket",
    amount: 3500,
    currency: "RSD",
    type: "base",
    period: "month",
    relatedProgramId: "samostalni",
    requiresVerification: true,
    note: "Mesečni paket nosi najveći broj potvrđenih varijanti u cenovniku.",
    supplements: [
      {
        id: "monthly-guided-supplement",
        label: "Vođeni trening, 12 termina",
        amount: 6000,
        currency: "RSD",
        type: "supplement",
        prefix: "+",
        period: "month",
        sessionCount: 12,
        relatedProgramId: "vodjeni",
        requiresVerification: true,
        note: "Prikazano kao doplata, bez sabiranja sa osnovnom članarinom.",
      },
      {
        id: "monthly-personal-8-supplement",
        label: "Personalni trening, 8 termina",
        amount: 12000,
        currency: "RSD",
        type: "supplement",
        prefix: "+",
        period: "month",
        sessionCount: 8,
        relatedProgramId: "personalni",
        requiresVerification: true,
        note: "Prikazano kao doplata, bez sabiranja sa osnovnom članarinom.",
      },
      {
        id: "monthly-personal-12-supplement",
        label: "Personalni trening, 12 termina",
        amount: 16000,
        currency: "RSD",
        type: "supplement",
        prefix: "+",
        period: "month",
        sessionCount: 12,
        relatedProgramId: "personalni",
        requiresVerification: true,
        note: "Prikazano kao doplata, bez sabiranja sa osnovnom članarinom.",
      },
    ],
  },
  {
    id: "quarter-package",
    name: "Paket za 3 meseca",
    amount: 10000,
    currency: "RSD",
    type: "base",
    period: "quarter",
    relatedProgramId: "samostalni",
    requiresVerification: true,
    note: "Tromesečna opcija bez dodatno potvrđenih pogodnosti.",
  },
];

export const pricingVerificationNote =
  "Za detalje paketa i aktuelnu dostupnost termina pozovi teretanu.";

export const pricingLookup = Object.fromEntries(
  pricingPackages.flatMap((pricingPackage) => [
    [pricingPackage.id, pricingPackage],
    ...(pricingPackage.supplements ?? []).map((supplement) => [supplement.id, supplement]),
  ]),
);

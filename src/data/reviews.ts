export type ReviewInsight = {
  id: string;
  theme: "space" | "equipment" | "cleanliness" | "crowding";
  paraphrase: string;
  source: string;
  permissionStatus: "paraphrase-only";
};

export const reviewInsights: ReviewInsight[] = [
  {
    id: "space",
    theme: "space",
    paraphrase: "Prema dostupnim utiscima korisnika, prostor se često izdvaja kao jedna od glavnih prednosti.",
    source: "Sažetak dostavljenih utisaka korisnika",
    permissionStatus: "paraphrase-only",
  },
  {
    id: "equipment",
    theme: "equipment",
    paraphrase: "U utiscima se ponavlja dobar izbor opreme za različite načine treninga.",
    source: "Sažetak dostavljenih utisaka korisnika",
    permissionStatus: "paraphrase-only",
  },
  {
    id: "cleanliness",
    theme: "cleanliness",
    paraphrase: "Čistoća i urednost su među najčešće pomenutim utiscima o prostoru.",
    source: "Sažetak dostavljenih utisaka korisnika",
    permissionStatus: "paraphrase-only",
  },
  {
    id: "crowding",
    theme: "crowding",
    paraphrase: "Dostupni utisci ukazuju na prijatniji trening bez prevelike gužve.",
    source: "Sažetak dostavljenih utisaka korisnika",
    permissionStatus: "paraphrase-only",
  },
];

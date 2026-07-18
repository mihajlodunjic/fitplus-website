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
    paraphrase: "Prostran prostor za različite vrste treninga.",
    source: "Utisci korisnika",
    permissionStatus: "paraphrase-only",
  },
  {
    id: "equipment",
    theme: "equipment",
    paraphrase: "Dobar izbor opreme za samostalan rad i trening uz trenera.",
    source: "Utisci korisnika",
    permissionStatus: "paraphrase-only",
  },
  {
    id: "cleanliness",
    theme: "cleanliness",
    paraphrase: "Čist i uredan prostor.",
    source: "Utisci korisnika",
    permissionStatus: "paraphrase-only",
  },
  {
    id: "crowding",
    theme: "crowding",
    paraphrase: "Prijatniji trening bez prevelike gužve.",
    source: "Utisci korisnika",
    permissionStatus: "paraphrase-only",
  },
];

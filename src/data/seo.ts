export const titleTemplate = "%s | Fit Plus Gym Jajinci";

export const seoDefaults = {
  siteName: "Fit Plus Gym Jajinci",
  locale: "sr_RS",
  imagePath: "/og-default.svg",
};

export const seoByPath = {
  "/": {
    title: "Fit Plus Gym Jajinci | Teretana na Voždovcu",
    description:
      "Fit Plus Gym u Jajincima, Stojana Ljubića 71b. Pogledajte cene, radno vreme, personalne i vođene treninge i termine pilatesa.",
  },
  "/treninzi/": {
    title: "Treninzi u Fit Plus Gym Jajinci | Personalni, vođeni i pilates",
    description:
      "Pogledajte mogućnosti samostalnog, vođenog i personalnog treninga, kao i termine pilatesa u Fit Plus Gym-u u Jajincima.",
  },
  "/cenovnik/": {
    title: "Cenovnik | Fit Plus Gym Jajinci",
    description:
      "Dnevni, mesečni i tromesečni paketi u Fit Plus Gym-u u Jajincima, uz dostupne opcije vođenih i personalnih treninga.",
  },
  "/lokacija/": {
    title: "Lokacija i radno vreme | Fit Plus Gym Jajinci",
    description:
      "Fit Plus Gym se nalazi u Stojana Ljubića 71b u Jajincima. Pogledajte radno vreme, telefone i uputstvo za otvaranje lokacije na mapi.",
  },
  "/404/": {
    title: "Stranica nije pronađena | Fit Plus Gym Jajinci",
    description:
      "Tražena stranica ne postoji. Vratite se na Fit Plus Gym početnu, cenovnik ili lokaciju u Jajincima.",
  },
} as const;

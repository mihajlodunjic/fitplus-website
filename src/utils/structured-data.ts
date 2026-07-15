import { business, primaryPhone } from "../data/business";
import { openingHours } from "../data/opening-hours";

export type StructuredData = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

function toAbsoluteUrl(path: string, siteOrigin: string): string {
  return new URL(path, siteOrigin).toString();
}

export function buildExerciseGymStructuredData(siteOrigin: string): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${toAbsoluteUrl("/", siteOrigin)}#fit-plus-gym`,
    name: business.name,
    alternateName: business.alternateName,
    description:
      "Fit Plus Gym je lokalna teretana u Jajincima sa samostalnim, vođenim i personalnim treninzima, kao i terminima pilatesa.",
    url: toAbsoluteUrl("/", siteOrigin),
    logo: toAbsoluteUrl(business.logo.src, siteOrigin),
    image: toAbsoluteUrl(business.logo.src, siteOrigin),
    telephone: primaryPhone.href.replace("tel:", ""),
    slogan: business.slogan,
    sameAs: [business.instagram.url],
    areaServed: business.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.city,
      addressCountry: business.address.countryCode,
    },
    openingHoursSpecification: openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.schemaDay,
      opens: entry.opens,
      closes: entry.closes,
    })),
  };
}

export function buildBreadcrumbStructuredData(
  siteOrigin: string,
  items: BreadcrumbItem[],
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path, siteOrigin),
    })),
  };
}

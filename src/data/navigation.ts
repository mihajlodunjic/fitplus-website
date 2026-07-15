export type NavigationItem = {
  label: string;
  href: string;
  order: number;
  menuIndex?: string;
  showOnDesktop: boolean;
  showOnMobile: boolean;
  showInFooter: boolean;
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Početna",
    href: "/",
    order: 0,
    showOnDesktop: false,
    showOnMobile: false,
    showInFooter: true,
  },
  {
    label: "Treninzi",
    href: "/treninzi/",
    order: 1,
    menuIndex: "01",
    showOnDesktop: true,
    showOnMobile: true,
    showInFooter: true,
  },
  {
    label: "Cenovnik",
    href: "/cenovnik/",
    order: 2,
    menuIndex: "02",
    showOnDesktop: true,
    showOnMobile: true,
    showInFooter: true,
  },
  {
    label: "Lokacija",
    href: "/lokacija/",
    order: 3,
    menuIndex: "03",
    showOnDesktop: true,
    showOnMobile: true,
    showInFooter: true,
  },
];

export const desktopNavigation = navigationItems.filter((item) => item.showOnDesktop);
export const mobileNavigation = navigationItems.filter((item) => item.showOnMobile);
export const footerNavigation = navigationItems.filter((item) => item.showInFooter);

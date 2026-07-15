import { getCurrentDayKey } from "../utils/get-current-day";

const MOBILE_BREAKPOINT = window.matchMedia("(min-width: 48rem)");
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)");
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function initTodayLabels() {
  const todayKey = getCurrentDayKey(new Date(), "Europe/Belgrade");
  const rows = Array.from(
    document.querySelectorAll<HTMLElement>("[data-hours-row]"),
  );

  for (const row of rows) {
    if (row.dataset.dayKey === todayKey) {
      row.dataset.today = "true";
    }
  }

  const currentRow = rows.find((row) => row.dataset.dayKey === todayKey);

  if (!currentRow) {
    return;
  }

  const todayLabel = currentRow.dataset.dayLabel;
  const opens = currentRow.dataset.opens;
  const closes = currentRow.dataset.closes;
  const summary = todayLabel && opens && closes ? `Danas: ${todayLabel} ${opens}–${closes}` : null;

  if (!summary) {
    return;
  }

  for (const summaryTarget of document.querySelectorAll<HTMLElement>("[data-today-summary]")) {
    summaryTarget.textContent = summary;
  }
}

function initMobileMenu() {
  const button = document.querySelector<HTMLButtonElement>("[data-menu-button]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  const panel = document.querySelector<HTMLElement>("[data-menu-panel]");

  if (!button || !menu || !panel) {
    return;
  }

  let isOpen = false;
  let previousFocus: HTMLElement | null = null;

  const focusableElements = () =>
    Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (element) => !element.hasAttribute("disabled"),
    );

  const closeAfterTransition = () => {
    if (!isOpen) {
      menu.hidden = true;
    }
  };

  const updateButton = () => {
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute(
      "aria-label",
      isOpen ? "Zatvori navigaciju" : "Otvori navigaciju",
    );
  };

  const openMenu = () => {
    previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : button;
    isOpen = true;
    menu.hidden = false;
    menu.dataset.state = "open";
    document.body.classList.add("has-menu-open");
    updateButton();
    window.setTimeout(() => {
      focusableElements()[0]?.focus();
    }, REDUCED_MOTION.matches ? 0 : 30);
  };

  const closeMenu = () => {
    isOpen = false;
    menu.dataset.state = "closed";
    document.body.classList.remove("has-menu-open");
    updateButton();

    const hideDelay = REDUCED_MOTION.matches ? 0 : 220;
    window.setTimeout(closeAfterTransition, hideDelay);
    previousFocus?.focus();
  };

  const handleTrap = (event: KeyboardEvent) => {
    if (!isOpen || event.key !== "Tab") {
      return;
    }

    const elements = focusableElements();
    const first = elements[0];
    const last = elements[elements.length - 1];

    if (!first || !last) {
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  button.addEventListener("click", () => {
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (!isOpen) {
      return;
    }

    if (event.key === "Escape") {
      closeMenu();
      return;
    }

    handleTrap(event);
  });

  menu.addEventListener("click", (event) => {
    if (event.target === menu) {
      closeMenu();
    }
  });

  for (const link of menu.querySelectorAll<HTMLElement>("[data-menu-link]")) {
    link.addEventListener("click", () => {
      closeMenu();
    });
  }

  MOBILE_BREAKPOINT.addEventListener("change", (event) => {
    if (event.matches && isOpen) {
      closeMenu();
    }
  });

  updateButton();
}

function initSite() {
  initTodayLabels();
  initMobileMenu();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSite, { once: true });
} else {
  initSite();
}

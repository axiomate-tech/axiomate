/* ============================================================
   Inline SVG icon set (24×24, stroke = currentColor).
   Glyph-style brand icons (x, github) set their own fill.
   ============================================================ */

export const icons = {
  // --- Services ---
  cloud: `<path d="M17.5 19H7a4 4 0 0 1-.5-7.97 6 6 0 0 1 11.64-1.06A4.5 4.5 0 0 1 17.5 19Z"/>`,
  devops: `<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 8v8"/><path d="M18 10a6 6 0 0 1-6 6H9"/>`,
  automation: `<path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z"/>`,
  data: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>`,
  ai: `<path d="M12 3l1.7 4.6L18.5 9.5l-4.8 1.9L12 16l-1.7-4.6L5.5 9.5l4.8-1.9L12 3Z"/><path d="M19 14l.6 1.7 1.9.8-1.9.8L19 19l-.6-1.7-1.9-.8 1.9-.8L19 14Z"/>`,
  activity: `<path d="M3 12h4l2.5-7 5 14 2.5-7H21"/>`,

  // --- Process ---
  search: `<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>`,
  blueprint: `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M9 9v11"/>`,
  build: `<path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="M13.5 7.5 10.5 16.5"/>`,
  gauge: `<path d="M4 15a8 8 0 1 1 16 0"/><path d="M12 15l3.5-4"/><circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none"/>`,

  // --- Why / features ---
  users: `<path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19"/><circle cx="10" cy="8" r="3.2"/><path d="M20 19v-1.4a3.5 3.5 0 0 0-2.6-3.4"/><path d="M15.6 5.2a3.2 3.2 0 0 1 0 5.6"/>`,
  target: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none"/>`,
  shield: `<path d="M12 3l7 3v5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/>`,
  compass: `<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>`,
  receipt: `<path d="M5 3h14v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21V3Z"/><path d="M8 8h8"/><path d="M8 12h6"/>`,
  handover: `<path d="M7 8h11l-3-3"/><path d="M17 16H6l3 3"/>`,

  // --- UI ---
  arrow: `<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>`,
  check: `<path d="m5 12.5 4.5 4.5L19 7"/>`,
  plus: `<path d="M12 5v14M5 12h14"/>`,
  minus: `<path d="M5 12h14"/>`,
  menu: `<path d="M4 7h16M4 12h16M4 17h16"/>`,
  close: `<path d="M6 6l12 12M18 6 6 18"/>`,
  chevron: `<path d="m6 9 6 6 6-6"/>`,
  send: `<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7Z"/>`,
  mail: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>`,
  calendar: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M8 3v4M16 3v4"/>`,
  pin: `<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>`,
  spark: `<path d="M12 5l1.4 4.1 4.1 1.4-4.1 1.4L12 16l-1.4-4.1L6.5 10.5l4.1-1.4L12 5Z"/>`,

  // --- Social (glyph fill) ---
  linkedin: `<rect x="3" y="3" width="18" height="18" rx="2.6"/><circle cx="8" cy="8" r="1.1" fill="currentColor" stroke="none"/><path d="M8 11v5"/><path d="M12 16v-3a2 2 0 0 1 4 0v3"/><path d="M12 11.5V16"/>`,
  x: `<path fill="currentColor" stroke="none" d="M17.5 3h3l-7 8 8.2 10h-6.4l-4.7-6-5.4 6H2.2l7.5-8.6L1.8 3h6.6l4.2 5.6L17.5 3Zm-1.1 16h1.8L7.7 4.8H5.8L16.4 19Z"/>`,
  github: `<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>`,
} as const;

export type IconName = keyof typeof icons;

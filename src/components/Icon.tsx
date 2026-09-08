type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string> = {
  signage: "M4 21V9l8-6 8 6v12M9 21v-6h6v6M4 9h16",
  print: "M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M6 14h12v7H6z",
  banner: "M4 4h16v13l-8 3-8-3V4Z M8 9h8M8 12h5",
  car: "M3 13l1.5-5A2 2 0 0 1 6.4 6.5h11.2A2 2 0 0 1 19.5 8L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z M7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M17 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  shirt: "M8 4 4 7l2 3 2-1.5V20h8V8.5L18 10l2-3-4-3-2 2h-4L8 4Z",
  sun: "M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  laser: "M4 20 14 10M14 10l2-2 4 4-2 2M14 10l4 4M4 20h4",
  megaphone: "M3 10v4a1 1 0 0 0 1 1h2l7 4V5l-7 4H4a1 1 0 0 0-1 1Z M17 9a4 4 0 0 1 0 6M20 6a8 8 0 0 1 0 12",
  bag: "M6 8h12l1 13H5L6 8Z M9 8V6a3 3 0 0 1 6 0v2",
  umbrella: "M12 3c-5 0-9 4-9 8h18c0-4-4-8-9-8ZM12 3v16a3 3 0 0 1-3 3M6 11v8",
  bottle: "M10 2h4v3l2 2v13a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7l2-2V2Z M9 12h6",
  mug: "M4 5h11v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z M15 8h2a2 2 0 0 1 0 6h-2",
  cap: "M4 13a8 8 0 0 1 16 0M2 13h20M12 5v3",
  notebook: "M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M9 3v18M5 7h1M5 11h1M5 15h1",
  cart: "M3 3h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L20 8H6",
  check: "M20 6 9 17l-5-5",
  whatsapp: "M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z M8.5 8.5c.3-1 1-1 1.5-.3l.6.9c.2.3.2.6 0 .9l-.4.6c-.2.3-.1.6.1.9.6.9 1.4 1.7 2.3 2.3.3.2.6.3.9.1l.6-.4c.3-.2.6-.2.9 0l.9.6c.7.5.7 1.2-.3 1.5-1.5.4-3.8-.7-5.4-2.3S8.1 10 8.5 8.5Z",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 12h.01",
  leaf: "M5 21c8 0 14-6 14-14V5h-2C9 5 3 11 3 19v2Z M5 21c3-6 7-10 13-13",
};

export function Icon({ name, className }: IconProps) {
  const d = paths[name] ?? paths.print;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

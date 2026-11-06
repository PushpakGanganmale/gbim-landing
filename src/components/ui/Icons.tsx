type P = { className?: string };

export const PhoneIcon = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.22 2.2Z" />
  </svg>
);

export const ChevronDown = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 18 18 6M8 6h10v10" />
  </svg>
);

export const TrendUp = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />
  </svg>
);

export const Sparkle = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2c.6 4.7 2.3 8 8 10-5.7 2-7.4 5.3-8 10-.6-4.7-2.3-8-8-10 5.700-2 7.400-5.300 8-10Z" />
    <path d="M19 2c.2 1.600.8 2.700 2.700 3.400-1.900.7-2.500 1.800-2.700 3.400-.2-1.600-.8-2.700-2.700-3.400C18.200 4.700 18.800 3.600 19 2Z" />
  </svg>
);

export const Trophy = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 3h10v2h3a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 14.900V17h3v2H8v-2h3v-2.100A5 5 0 0 1 7.300 12H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1h3V3Zm-2 4v1a2 2 0 0 0 2 2V7H5Zm14 0h-2v3a2 2 0 0 0 2-2V7ZM8 21h8v1H8v-1Z" />
  </svg>
);

export const Play = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 5.500v13l11-6.500-11-6.500Z" />
  </svg>
);

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const navItems: NavItem[] = [
  {
    label: "Digital marketing",
    href: "#digital-marketing",
    children: [
      { label: "SEO", href: "#seo" },
      { label: "Social media", href: "#social" },
      { label: "Performance ads", href: "#ads" },
    ],
  },
  {
    label: "Marketing technologies",
    href: "#technologies",
    children: [
      { label: "Web development", href: "#web" },
      { label: "Automation", href: "#automation" },
    ],
  },
  { label: "About us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Career", href: "#career" },
  { label: "Contact us", href: "#contact" },
];

export const heroContent = {
  headlineTop: "For Businesses",
  headlineAccentPre: "Looking",
  headlineAccent: "Beyond",
  headlineBottom: "Traditional SEO",
  description:
    "From Logo Design To Digital Experiences, We Help Brands Stand Out In A Crowded World. Our Design Studio Thrives Fresh Ideas, Clean Aesthetics.",
  cta: { label: "Meet Your SEO Partner", href: "#contact" },
};

export const testimonial = {
  name: "Dr. Virat Patel",
  role: "FOUNDER",
  company: "SA Family",
};

export const seoStats = {
  title: "SEO PERFORMANCE",
  site: "SA Family Dentist's website",
  badge: "Peak Growth",
  bars: [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 100 },
    { month: "Mar", value: 150 },
  ],
  growth: "+45%",
  peak: "March",
  footnote: "Based on real campaign performance.",
};

// Export these from Figma and drop them in /public/images/clients
export const clients = [
  { name: "Tata", src: "/images/clients/tata.svg", w: 56, h: 52 },
  { name: "Reliance Animation Academy", src: "/images/clients/reliance.svg", w: 96, h: 40 },
  { name: "SBI", src: "/images/clients/sbi.svg", w: 80, h: 36 },
  { name: "Sundaram Books", src: "/images/clients/sundaram.svg", w: 84, h: 36 },
];

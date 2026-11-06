import Link from "next/link";
import { ArrowUpRight, PhoneIcon } from "./Icons";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "phone" | "arrow";
  className?: string;
};

const base =
  "group inline-flex items-center rounded-full bg-brand text-white transition-colors duration-200 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Button({ href, children, variant = "phone", className = "" }: Props) {
  if (variant === "arrow") {
    return (
      <Link href={href} className={`${base} gap-4 py-0 pl-6 pr-0 text-lg lg:text-xl ${className}`}>
        <span className="py-4">{children}</span>
        <span className="mr-0 flex h-[66px] w-[70px] items-center justify-center rounded-full border border-white/70 transition-transform duration-200 group-hover:translate-x-1">
          <ArrowUpRight className="h-7 w-7" />
        </span>
      </Link>
    );
  }
  return (
    <Link href={href} className={`${base} gap-3 px-6 py-3.5 text-lg font-medium lg:px-7 lg:py-[17px] lg:text-[22px] ${className}`}>
      <PhoneIcon className="h-5 w-5" />
      {children}
    </Link>
  );
}
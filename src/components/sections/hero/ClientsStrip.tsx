import Image from "next/image";
import { clients } from "@/data/content";

export default function ClientsStrip() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-[2rem] bg-white px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.07)] lg:absolute lg:bottom-0 lg:left-[6%] lg:right-0 lg:mt-0 lg:flex-nowrap lg:justify-between lg:gap-x-5 lg:px-8">
      <div className="shrink-0 leading-tight">
        <p className="flex items-baseline gap-1.5">
          <span className="text-[26px] font-semibold text-brand">400+</span>
          <span className="text-[11px] text-ink">Big</span>
        </p>
        <p className="text-xs text-ink">brands trust us</p>
        <p className="text-xs text-ink">very much</p>
      </div>

      <ul className="flex flex-1 flex-wrap items-center justify-between gap-x-6 gap-y-3">
        {clients.map((c) => (
          <li key={c.name}>
            <Image src={c.src} alt={c.name} width={c.w} height={c.h} className="h-auto w-auto max-h-11" />
          </li>
        ))}
        <li className="text-[10px] leading-tight text-muted">And many<br />more...</li>
      </ul>
    </div>
  );
}

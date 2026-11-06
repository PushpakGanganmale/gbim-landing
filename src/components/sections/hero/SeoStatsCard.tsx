import { seoStats } from "@/data/content";
import { TrendUp } from "@/components/ui/Icons";

export default function SeoStatsCard() {
  const { title, site, badge, bars, growth, peak, footnote } = seoStats;
  const max = 150;

  return (
    <div className="mt-6 w-full rounded-2xl bg-white p-3.5 lg:p-[0.95rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:max-w-[300px] lg:absolute lg:right-[2.7rem] lg:top-0 lg:mt-0 lg:w-[18.1rem]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[0.5625rem] tracking-wide text-muted">{title}</p>
          <p className="mt-0.5 text-[0.6875rem] font-semibold text-ink">{site}</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#e6f8ee] px-2 py-1 text-[0.5625rem] font-medium text-[#12a05c]">
          <TrendUp className="h-3 w-3" />
          {badge}
        </span>
      </div>

      <div className="mt-3 rounded-xl bg-[#f6f8fb] px-3 pb-2 pt-3 lg:pt-[1.4rem]">
        <div className="relative flex h-[7.3rem] items-end justify-around gap-6 border-l border-b border-black/10 pl-6">
          {[150, 100, 50, 0].map((t) => (
            <span key={t} className="absolute -left-0.5 text-[0.5rem] text-muted" style={{ bottom: `${(t / max) * 100 - 4}%` }}>
              {t}
            </span>
          ))}
          {bars.map((b) => (
            <div
              key={b.month}
              className="w-[2.8rem] rounded-t-md bg-gradient-to-b from-[#4f9bff] to-[#8cc0ff]"
              style={{ height: `${(b.value / max) * 100}%` }}
              role="img"
              aria-label={`${b.month}: ${b.value}`}
            />
          ))}
        </div>
        <div className="flex justify-around pl-6 pt-1 text-[0.5rem] text-muted">
          {bars.map((b) => (
            <span key={b.month}>{b.month}</span>
          ))}
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#f6f8fb] px-3 py-2.5">
          <p className="text-[0.5625rem] text-muted">3 Month Growth</p>
          <p className="mt-1 text-xl font-semibold text-[#12a05c]">{growth}</p>
        </div>
        <div className="rounded-xl bg-[#f6f8fb] px-3 py-2.5">
          <p className="text-[0.5625rem] text-muted">Peak Month</p>
          <p className="mt-1 text-xl font-semibold text-ink">{peak}</p>
        </div>
      </div>
      <p className="mt-2 text-center text-[0.5rem] text-muted/70">{footnote}</p>
    </div>
  );
}
import Image from "next/image";
import { testimonial } from "@/data/content";
import { Play, Sparkle, TrendUp, Trophy } from "@/components/ui/Icons";
import SeoStatsCard from "./SeoStatsCard";
import ClientsStrip from "./ClientsStrip";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] lg:mx-0 lg:h-[620px]">
      {/* Video / testimonial card */}
      <div className="relative rounded-3xl bg-white/70 p-4 shadow-[0_10px_50px_rgba(183,42,37,0.08)] backdrop-blur lg:absolute lg:left-0 lg:top-[55px] lg:w-[60%]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[400/332]">
          <Image
            src="/images/hero-founder.webp"
            alt="Dr. Virat Patel waving at the camera"
            fill
            priority
            sizes="(min-width: 1024px) 28vw, 90vw"
            className="object-cover"
          />
          <button
            type="button"
            aria-label="Play testimonial video"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/20 text-white backdrop-blur-sm transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
          >
            <Play className="h-8 w-8" />
          </button>
        </div>

        <div className="flex items-end justify-between gap-4 px-2 pb-14 pt-5 lg:pb-12">
          <div>
            <p className="text-xl text-ink">{testimonial.name}</p>
            <p className="mt-3 flex items-center gap-4 text-sm">
              <span className="text-muted">{testimonial.role}</span>
              <span className="text-base text-ink">{testimonial.company}</span>
            </p>
          </div>
          <Image src="/images/clients/sa-family-dentist.svg" alt="SA Family Dentist" width={100} height={46} className="h-auto w-[90px] lg:w-[100px]" />
        </div>
      </div>

      {/* Floating badges */}
      <span className="absolute -left-3 top-24 hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#1fb86b] text-white shadow-lg lg:flex">
        <TrendUp className="h-8 w-8" />
      </span>
      <span className="absolute -right-2 top-[100px] hidden h-[75px] w-[75px] items-center justify-center rounded-full bg-brand text-white shadow-lg lg:flex">
        <Sparkle className="h-9 w-9" />
      </span>
      <span className="absolute left-[53%] top-[355px] hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-brand text-white shadow-lg lg:flex">
        <Trophy className="h-8 w-8" />
      </span>

      <SeoStatsCard />
      <ClientsStrip />
    </div>
  );
}

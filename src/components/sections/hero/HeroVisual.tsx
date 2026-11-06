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
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[400/332]">
            <Image
              src="/images/hero-founder.svg"
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

          <span className="absolute -bottom-9 -right-12 z-20 hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-brand text-white shadow-lg lg:flex">
            <Trophy className="h-8 w-8" />
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 px-2 pb-3 pt-5">
          <div>
            <p className="text-xl leading-tight text-ink">{testimonial.name}</p>
            <p className="mt-3 flex items-baseline gap-4">
              <span className="text-sm uppercase tracking-wide text-muted">{testimonial.role}</span>
              <span className="text-base text-ink">{testimonial.company}</span>
            </p>
          </div>
          <Image
            src="/images/clients/sa-family-dentist.svg"
            alt="SA Family Dentist"
            width={100}
            height={46}
            className="mr-8 h-auto w-[90px] shrink-0 lg:mr-10 lg:w-[100px]"
          />
        </div>
      </div>

      {/* Floating badges (z-20 keeps them above the stats card) */}
      <span className="absolute -left-9 top-24 z-20 hidden h-[72px] w-[72px] items-center justify-center rounded-full bg-[#1fb86b] text-white shadow-lg lg:flex">
        <TrendUp className="h-8 w-8" />
      </span>
      <span className="absolute -right-5 top-[100px] z-20 hidden h-[75px] w-[75px] items-center justify-center rounded-full bg-brand text-white shadow-lg lg:flex">
        <Sparkle className="h-9 w-9" />
      </span>

      <SeoStatsCard />
      <ClientsStrip />
    </div>
  );
}
import { heroContent } from "@/data/content";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { headlineTop, headlineAccentPre, headlineAccent, headlineBottom, description, cta } = heroContent;

  return (
    <section className="hero-bg relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-[230px] lg:pb-24">
      <div className="mx-auto grid max-w-[1920px] items-center gap-14 px-5 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pl-[clamp(40px,10vw,190px)] lg:pr-[clamp(24px,4vw,100px)]">
        <div>
          <h1 className="text-[clamp(2.6rem,5.2vw,6rem)] font-medium leading-[1.04] tracking-[-0.03em] text-ink">
            <span className="block">{headlineTop}</span>
            <span className="block">
              {headlineAccentPre}{" "}
              <span className="font-script font-semibold italic tracking-normal text-brand">{headlineAccent}</span>
            </span>
            <span className="block">{headlineBottom}</span>
          </h1>

          <p className="mt-8 max-w-[700px] text-base leading-relaxed text-muted sm:text-lg lg:mt-10">
            {description}
          </p>

          <div className="mt-10 lg:mt-12">
            <Button href={cta.href} variant="arrow">
              {cta.label}
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

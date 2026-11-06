import { heroContent } from "@/data/content";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { headlineTop, headlineAccentPre, headlineAccent, headlineBottom, description, cta } = heroContent;

  return (
    <section className="hero-bg relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-[194px] lg:pb-20">
      <div className="mx-auto grid max-w-[1920px] gap-14 px-5 sm:px-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-8 lg:pl-[clamp(40px,10vw,190px)] lg:pr-[6vw]">
        <div className="lg:pt-[67px]">
          <h1 className="text-[clamp(2.6rem,4.6vw,5.4rem)] font-medium leading-[1.12] tracking-[-0.035em] text-ink">
            <span className="block">{headlineTop}</span>
            <span className="block">
              {headlineAccentPre}{" "}
              <span className="font-script font-semibold italic tracking-normal text-brand">{headlineAccent}</span>
            </span>
            <span className="block">{headlineBottom}</span>
          </h1>

          <p className="mt-8 max-w-[700px] text-base leading-relaxed text-muted lg:mt-4 lg:max-w-[38vw] lg:text-[clamp(1rem,0.95vw,1.15rem)]">
            {description}
          </p>

          <div className="mt-10 lg:mt-7">
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
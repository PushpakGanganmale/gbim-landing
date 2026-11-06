import { heroContent } from "@/data/content";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { headlineTop, headlineAccentPre, headlineAccent, headlineBottom, description, cta } = heroContent;

  return (
    <section className="hero-bg relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-[12.125rem] lg:pb-20">
      <div className="mx-auto grid max-w-[120rem] gap-14 px-5 sm:px-10 lg:grid-cols-[54.75rem_47rem] lg:items-start lg:gap-0 lg:pl-[12.125rem] lg:pr-0">
        <div className="lg:pt-[6.65rem]">
          <h1 className="text-[2.6rem] sm:text-6xl lg:text-[5.5rem] font-medium leading-[1.12] tracking-[-0.035em] text-ink">
            <span className="block">{headlineTop}</span>
            <span className="block">
              {headlineAccentPre}{" "}
              <span className="font-script font-semibold italic tracking-normal text-brand">{headlineAccent}</span>
            </span>
            <span className="block">{headlineBottom}</span>
          </h1>

          <p className="mt-8 max-w-[700px] text-base leading-relaxed text-muted lg:mt-[1.6rem] lg:max-w-[44rem] lg:text-[1.1rem] lg:leading-[1.6]">
            {description}
          </p>

          <div className="mt-10 lg:mt-[2.25rem]">
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
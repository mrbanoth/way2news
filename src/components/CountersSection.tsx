import React, { useEffect, useRef, useState } from 'react';
import { COUNTER_STATS, STORE_LINKS } from '../data/way2newsData';

export const CountersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState<number[]>(() => COUNTER_STATS.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValues(COUNTER_STATS.map((c) => c.target));
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(COUNTER_STATS.map((stat) => Math.round(stat.target * eased)));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative z-0 block w-full bg-[#181818] md:-mt-[160px] xl:-mt-[200px]"
    >
      <div className="mx-auto max-w-[1300px] px-4 pt-8 md:pt-[240px] xl:pt-[310px]">
        <p className="mx-auto max-w-5xl px-4 text-center font-light leading-relaxed text-white text-[18px] md:px-16 md:text-[25px] xl:px-40 xl:text-[28px]">
          Way2News, India&apos;s largest hyperlocal news app covers news from 400 districts and
          generating more than 4 billion screen views every month - that&apos;s 3 times the entire
          Indian population.
        </p>
      </div>

      <div className="py-[50px] text-center md:py-[70px] md:pb-[90px]">
        <div className="mx-auto max-w-[1300px] px-4">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-6">
            {COUNTER_STATS.map((stat, idx) => (
              <div key={stat.id} className="mb-4 md:mb-12">
                <div className="font-roboto mb-2.5 text-[28px] font-bold tabular-nums text-[#ffb327] md:text-[42px]">
                  {values[idx].toLocaleString('en-IN')}
                </div>
                <h5 className="font-roboto text-[12px] font-normal uppercase tracking-normal text-white md:text-[14px]">
                  {stat.label}
                </h5>
              </div>
            ))}
          </div>

          <hr className="mx-auto my-2 h-px w-[190px] border-0 bg-white" />

          <h6 className="font-roboto-condensed mt-10 mb-7 px-4 text-[20px] font-light text-white xl:text-[28px]">
            Stay up-to-date with news around the world,
            <br />
            in your favourite language.
          </h6>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-150 hover:scale-[1.03]"
            >
              <img
                src="/images/app-store2.png"
                alt="Download on App Store"
                className="h-auto w-[140px] md:w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              href={STORE_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-150 hover:scale-[1.03]"
            >
              <img
                src="/images/play-store2.png"
                alt="Get it on Google Play"
                className="h-auto w-[140px] md:w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

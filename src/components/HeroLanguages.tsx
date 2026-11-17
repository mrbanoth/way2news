import React, { useState } from 'react';
import {
  ALL_LANGUAGE_SCREENS,
  LANGUAGE_SCREENS_ROW_1,
  LANGUAGE_SCREENS_ROW_2,
  LanguageScreen,
  STORE_LINKS,
} from '../data/way2newsData';

const PhoneMockupCard: React.FC<{
  screen: LanguageScreen;
  onSelect: (screen: LanguageScreen) => void;
}> = ({ screen, onSelect }) => {
  return (
    <div className={`flex justify-center ${screen.staggered ? 'md:mt-[70px]' : ''}`}>
      <button
        type="button"
        onClick={() => onSelect(screen)}
        className="phone-frame-shadow group relative inline-block cursor-pointer rounded-[20px] bg-[#151515] p-2.5 text-center transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#ffb327]"
        aria-label={`Preview Way2News in ${screen.name}`}
      >
        <img
          src={screen.image}
          alt={`${screen.name} news feed`}
          className="mx-auto block h-auto max-w-full rounded-[12px]"
          referrerPolicy="no-referrer"
        />
        <div className="mx-auto my-2.5 block h-[5px] max-w-[100px] rounded-[5px] bg-[#323232]" />
      </button>
    </div>
  );
};

export const HeroLanguages: React.FC = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [previewLang, setPreviewLang] = useState<LanguageScreen | null>(null);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? ALL_LANGUAGE_SCREENS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === ALL_LANGUAGE_SCREENS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="home" className="hero-banner-bg relative pt-[74px]">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="pb-12 pt-[120px] text-center text-white md:pt-[150px] xl:pt-[200px]">
          <p className="font-roboto text-[13px] font-medium uppercase tracking-[3px] md:text-[18px] md:tracking-[6.43px]">
            News paane ka desi andaaz
          </p>
          <h1 className="font-roboto-condensed mx-auto mt-3 max-w-4xl text-[31px] font-bold uppercase leading-tight text-white drop-shadow-[0_4px_9px_rgba(0,0,0,0.59)] md:text-[35px] xl:text-[48px]">
            India&apos;s #1 Hyperlocal Short news app
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 md:gap-8">
            <a
              href={STORE_LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-150 hover:scale-[1.03]"
              aria-label="Download on the App Store"
            >
              <img
                src="/images/app-store.png"
                alt="Download on App Store"
                className="h-auto w-[134px] md:w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
            <a
              href={STORE_LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-150 hover:scale-[1.03]"
              aria-label="Get it on Google Play"
            >
              <img
                src="/images/play-store.png"
                alt="Get it on Google Play"
                className="h-auto w-[134px] md:w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop 8-Phone Language Grid */}
      <div id="languages" className="mx-auto hidden max-w-[1300px] px-4 md:block">
        <div className="text-center">
          <div className="grid grid-cols-4 gap-6">
            {LANGUAGE_SCREENS_ROW_1.map((screen) => (
              <PhoneMockupCard key={screen.id} screen={screen} onSelect={setPreviewLang} />
            ))}
          </div>

          <h2 className="font-roboto-condensed my-[55px] text-center text-[28px] font-normal leading-snug text-[#191919]">
            One App - Eight languages.
            <br />
            Read news in your preferred language.
          </h2>

          <div className="grid grid-cols-4 gap-6">
            {LANGUAGE_SCREENS_ROW_2.map((screen) => (
              <PhoneMockupCard key={screen.id} screen={screen} onSelect={setPreviewLang} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Language Carousel */}
      <div id="languages-mobile" className="bg-white pb-8 pt-4 md:hidden">
        <h2 className="font-roboto-condensed px-4 pb-5 text-center text-[21px] font-normal leading-[30px] text-[#191919]">
          One App - Eight Languages.
          <br />
          Read News In Your Preferred Language.
        </h2>

        <div className="relative mx-auto max-w-sm px-6 text-center">
          <div className="inline-block rounded-[20px] bg-[#151515] p-2.5">
            <img
              src={ALL_LANGUAGE_SCREENS[mobileIndex].image}
              alt={`${ALL_LANGUAGE_SCREENS[mobileIndex].name} news feed`}
              className="mx-auto block h-auto max-w-full rounded-[12px]"
              referrerPolicy="no-referrer"
            />
            <div className="mx-auto my-2.5 block h-[5px] max-w-[100px] rounded-[5px] bg-[#323232]" />
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous language preview"
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 p-2"
          >
            <img src="/images/arrow-left.png" alt="" className="h-5 w-auto" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next language preview"
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 p-2"
          >
            <img src="/images/arrow-right.png" alt="" className="h-5 w-auto" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {ALL_LANGUAGE_SCREENS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMobileIndex(idx)}
                aria-label={`Show ${item.name}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  idx === mobileIndex ? 'bg-[#191919]' : 'bg-[#d8d8d8]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Language Lightbox */}
      {previewLang && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreviewLang(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${previewLang.name} edition preview`}
        >
          <div
            className="relative max-w-sm rounded-2xl bg-[#181818] p-6 text-center text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewLang(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg text-white hover:bg-white/20"
              aria-label="Close preview"
            >
              ×
            </button>
            <p className="font-roboto-condensed text-lg font-bold uppercase tracking-wide text-[#ffb327]">
              {previewLang.name} ({previewLang.nativeName})
            </p>
            <div className="mt-4 inline-block rounded-[20px] bg-[#151515] p-2.5">
              <img
                src={previewLang.image}
                alt={`${previewLang.name} edition`}
                className="mx-auto max-h-[60vh] w-auto rounded-[12px]"
                referrerPolicy="no-referrer"
              />
              <div className="mx-auto my-2.5 block h-[5px] max-w-[100px] rounded-[5px] bg-[#323232]" />
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href={STORE_LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="font-roboto-condensed rounded-full bg-[#ffb327] px-5 py-2 text-sm font-bold uppercase text-black hover:bg-[#ffc44d]"
              >
                Read in {previewLang.name}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React from 'react';
import { FOOTER_LEGAL_LINKS, SOCIAL_LINKS, STORE_LINKS } from '../data/way2newsData';

interface FooterProps {
  onOpenContactGrievance: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactGrievance }) => {
  return (
    <>
      <section className="w-full bg-white py-[5%]">
        <div className="mx-auto max-w-[1300px] px-[8%]">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h4 className="font-roboto mb-[14px] text-[28px] font-bold uppercase leading-tight text-[#191919]">
                Download <br />
                Way2News App Now
              </h4>
              <p className="text-[18px] text-[#191919]">
                India is gravitating to short news. Why not read news in your native language?
              </p>
            </div>

            <div className="shrink-0">
              <p className="mb-1.5 pl-2 text-[12px] text-[#191919]">Available on</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={STORE_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-150 hover:scale-[1.03]"
                >
                  <img
                    src="/images/app-store2.png"
                    alt="Download on App Store"
                    className="h-auto w-auto"
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
                    className="h-auto w-auto"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="w-full bg-[#191919] py-[30px] text-white">
        <div className="mx-auto max-w-[1300px] px-4">
          <div className="flex flex-col items-start justify-between gap-4 text-[14px] lg:flex-row lg:items-center">
            <span className="text-white/90">
              Copyright @ 2024 Way2News Private Limited All rights reserved.
            </span>

            <div className="flex flex-wrap items-center gap-y-2">
              <div className="flex flex-wrap items-center">
                {FOOTER_LEGAL_LINKS.map((link, idx) => {
                  const isLastText = idx === FOOTER_LEGAL_LINKS.length - 1;
                  if (link.id === 'grievance') {
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={onOpenContactGrievance}
                        className="cursor-pointer px-1.5 text-[14px] text-[#37a3ff] hover:underline"
                      >
                        {link.label}
                      </button>
                    );
                  }
                  return (
                    <React.Fragment key={link.id}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-1.5 text-[14px] text-[#37a3ff] hover:underline"
                      >
                        {link.label}
                      </a>
                      {!isLastText && (
                        <span className="mx-1 h-3 border-r border-[#37a3ff]" aria-hidden="true" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className="ml-2 flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-8 w-8 items-center justify-center transition-opacity hover:opacity-80"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="h-4 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

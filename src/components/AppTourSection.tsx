import React from 'react';
import { STORE_LINKS } from '../data/way2newsData';

export const AppTourSection: React.FC = () => {
  return (
    <section id="apptour" className="w-full bg-[#191919] pt-8 md:pt-0">
      <div className="mx-auto max-w-[1300px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-8 xl:col-span-9">
            <div className="max-w-[500px] text-center md:text-left">
              <h4 className="font-roboto-condensed pt-6 text-[30px] font-light leading-tight text-white md:pt-[57px] md:text-[36px] xl:pt-[77px] xl:pr-24 xl:text-[38px]">
                Read news you love the most.
              </h4>
              <p className="pt-5 text-[18px] font-extralight leading-[1.53] text-white md:pr-12">
                Way2News brings real time news. We understand your reading preference and promise to
                deliver personalized news flips.
              </p>

              <div className="mt-8 md:mt-10">
                <h6 className="mb-3 text-[12px] font-extralight uppercase text-white md:ml-3">
                  Available on
                </h6>
                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <a
                    href={STORE_LINKS.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-150 hover:scale-[1.03]"
                  >
                    <img
                      src="/images/app-store2.png"
                      alt="Download on App Store"
                      className="h-auto w-[120px] md:w-auto"
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
                      className="h-auto w-[120px] md:w-auto"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:col-span-6 lg:col-span-4 xl:col-span-3">
            <img
              src="/images/flip2.png"
              alt="Way2News Flip Experience App Tour"
              className="h-auto max-w-full md:-mt-[120px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <img
        src="/images/flip-bg.png"
        alt=""
        className="block h-auto w-full object-cover"
        referrerPolicy="no-referrer"
      />
    </section>
  );
};

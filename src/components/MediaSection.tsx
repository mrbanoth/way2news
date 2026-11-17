import React from 'react';
import { MEDIA_ITEMS } from '../data/way2newsData';

interface MediaSectionProps {
  onOpenMediaArchive: () => void;
}

export const MediaSection: React.FC<MediaSectionProps> = ({ onOpenMediaArchive }) => {
  return (
    <section id="media" className="w-full bg-[#191919]">
      <div className="mx-auto max-w-[1300px] px-5 py-[100px]">
        <h4 className="font-supermercado text-center text-[28px] text-[#ffb327]">As featured in</h4>
        <h2 className="font-roboto-condensed mb-[50px] text-center text-[38px] font-medium text-white">
          Latest Updates from the Way2News
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
          {MEDIA_ITEMS.map((item) => (
            <div key={item.id} className="group">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-left no-underline sm:flex-row sm:items-start"
              >
                <img
                  src={item.logo}
                  alt={item.author}
                  className="shrink-0 border border-white bg-white/5 transition-colors group-hover:border-[#ffb327]"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <p className="font-roboto-condensed text-[20px] font-normal leading-snug text-white transition-colors group-hover:text-[#ffb327]">
                    {item.title}
                  </p>
                  <span className="mt-1.5 block text-sm font-normal text-[#b0b0b0]">
                    {item.author}, {item.date}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-[50px] text-center">
          <button
            type="button"
            onClick={onOpenMediaArchive}
            className="inline-block cursor-pointer rounded-[4px] border border-white px-[25px] py-[10px] text-white transition-colors hover:border-[#ffb327] hover:text-[#ffb327] focus-visible:outline-2 focus-visible:outline-[#ffb327]"
          >
            Read More...
          </button>
        </div>
      </div>
    </section>
  );
};

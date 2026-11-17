import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/way2newsData';

export const ReviewsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="reviews"
      className="w-full bg-[#f5f5f5] py-[50px] md:py-[100px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1300px] px-4 text-center">
        <h2 className="font-roboto-condensed px-4 pb-[45px] text-[28px] font-medium text-[#191919] md:text-[36px]">
          Loved by more than 20 million Indians!
        </h2>

        <div className="relative mx-auto max-w-[680px] px-4 sm:px-14">
          <div className="mx-auto max-w-[500px]">
            <p className="min-h-[110px] pb-[30px] text-[18px] font-light leading-relaxed text-[#333] md:text-[20px]">
              {current.quote}
            </p>

            <div className="mb-3 flex items-center justify-center gap-1" aria-label="4.5 out of 5 stars">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-[18px] w-[18px] fill-[#ffb327] text-[#ffb327]" />
              ))}
              <Star className="h-[18px] w-[18px] fill-[#ffb327]/50 text-[#ffb327]" />
            </div>

            <p className="mb-4 text-[16px] font-medium text-[#191919]">{current.name}</p>

            <div className="flex justify-center">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-[66px] w-[66px] rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden cursor-pointer sm:absolute sm:left-0 sm:top-1 sm:flex sm:h-[34px] sm:w-[34px] sm:items-center sm:justify-center sm:rounded-full hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#ffb327]"
          >
            <img src="/images/arrow-left.png" alt="" className="h-auto w-auto" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden cursor-pointer sm:absolute sm:right-0 sm:top-1 sm:flex sm:h-[34px] sm:w-[34px] sm:items-center sm:justify-center sm:rounded-full hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[#ffb327]"
          >
            <img src="/images/arrow-right.png" alt="" className="h-auto w-auto" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2.5">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View review by ${item.name}`}
                className={`h-3 w-3 cursor-pointer rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-[#191919]' : 'bg-[#d8d8d8]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FEATURES_ROW_1, FEATURES_ROW_2, FeatureItem } from '../data/way2newsData';

const FeatureCell: React.FC<{
  item: FeatureItem;
  isLastInRow?: boolean;
  tall?: boolean;
}> = ({ item, isLastInRow = false, tall = false }) => {
  return (
    <div
      className={`border-b border-[#ccc] p-6 text-center md:border-b-0 md:p-4 md:text-left ${
        isLastInRow ? 'md:border-r-0' : 'md:border-r md:border-[#ccc]'
      } ${tall ? 'md:min-h-[330px]' : 'md:min-h-[250px]'}`}
    >
      <div className="my-[30px] flex justify-center md:justify-start">
        <img
          src={item.icon}
          alt={item.title}
          className="h-auto w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <h6 className="font-roboto-condensed text-[18px] font-bold uppercase text-[#191919]">
        {item.title}
      </h6>
      <p className="mt-2 text-[14px] leading-relaxed text-[#000] md:pr-12">{item.description}</p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full bg-white">
      <div className="mx-auto max-w-[1300px] px-4">
        <h5 className="font-roboto-condensed py-5 text-center text-[30px] font-medium uppercase text-black md:py-0 md:pt-8 md:pb-4 md:text-left">
          Features
        </h5>

        <div className="overflow-hidden border border-b-0 border-[#ccc]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {FEATURES_ROW_1.map((item, idx) => (
              <FeatureCell
                key={item.id}
                item={item}
                isLastInRow={idx === FEATURES_ROW_1.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="hidden h-px border-0 bg-[#ccc] md:block" />

      <div className="mx-auto max-w-[1300px] px-4">
        <div className="overflow-hidden border border-t-0 border-[#ccc]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {FEATURES_ROW_2.map((item, idx) => (
              <FeatureCell
                key={item.id}
                item={item}
                tall
                isLastInRow={idx === FEATURES_ROW_2.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { BLOG_POSTS } from '../data/way2newsData';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1300px] px-4">
        <h2 className="font-roboto-condensed mb-[50px] text-center text-[38px] font-medium text-[#191919]">
          Blog
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="blog-card-shadow flex flex-col justify-between rounded-[2px] bg-white pb-4 transition-transform duration-200 hover:-translate-y-1"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-roboto-condensed block h-full text-inherit no-underline"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between pr-6">
                  <h6 className="flex items-center text-[15px] font-light leading-[29px] text-[#191919]">
                    <span className="mr-4 inline-block h-[23px] w-[5px] bg-[#ffb327]" aria-hidden="true" />
                    {post.author}
                  </h6>
                  <span className="text-[13px] font-light text-[#191919]">{post.date}</span>
                </div>

                <p className="px-5 pt-5 text-[23px] font-bold leading-snug text-[#191919]">
                  {post.title}
                </p>

                <p className="font-roboto px-5 pt-3 text-[16px] font-normal leading-relaxed text-[#393939]">
                  {post.excerpt}
                </p>

                <p className="px-5 pt-5 text-[18px] font-bold text-[#ffb327]">Read more...</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

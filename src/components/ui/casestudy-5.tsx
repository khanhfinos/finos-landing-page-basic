import { MoveRight } from "lucide-react";
import React from "react";

export interface CasestudyItem {
  step: string;
  tags: string;
  title: string;
  subtitle: string;
  image?: string;
  link?: string;
}

interface Casestudy5Props {
  heading?: string;
  description?: string;
  badge?: string;
  featuredCasestudy: CasestudyItem;
  casestudies: CasestudyItem[];
}

export const Casestudy5 = ({
  heading,
  description,
  badge,
  featuredCasestudy,
  casestudies,
}: Casestudy5Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {(heading || description) && (
          <div className="text-center mb-14">
            {badge && (
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00bcd4] mb-3 block">
                {badge}
              </span>
            )}
            {heading && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{heading}</h2>
            )}
            {description && (
              <p className="text-gray-500 text-lg max-w-xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Featured step */}
          <a
            href={featuredCasestudy.link || "#"}
            className="group grid gap-4 overflow-hidden px-6 transition-colors duration-500 ease-out hover:bg-gray-50 lg:grid-cols-2 xl:px-16"
          >
            <div className="flex flex-col justify-between gap-4 pt-10 pb-10 md:pt-16 lg:pb-16">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa] font-mono text-sm font-bold text-[#00bcd4]">
                  {featuredCasestudy.step}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                  {featuredCasestudy.tags}
                </span>
                <h3 className="mt-3 mb-3 text-2xl font-bold text-[#00bcd4] text-balance sm:text-3xl sm:leading-10">
                  {featuredCasestudy.title}
                  <span className="font-medium text-gray-900 transition-colors duration-500 ease-out group-hover:text-gray-700">
                    {" "}{featuredCasestudy.subtitle}
                  </span>
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-[#00bcd4] transition-colors duration-300">
                  Xem chi tiết
                  <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            {featuredCasestudy.image && (
              <div className="relative isolate py-10 lg:py-16">
                <div className="relative isolate h-full border border-gray-100 bg-white p-2 rounded-lg">
                  <div className="h-full overflow-hidden rounded-md">
                    <img
                      src={featuredCasestudy.image}
                      alt={featuredCasestudy.title}
                      className="aspect-[14/9] h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            )}
          </a>

          {/* Remaining steps */}
          <div className="flex border-t border-gray-200">
            <div className="hidden w-16 shrink-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px] opacity-30 xl:block" />
            <div className="grid flex-1 lg:grid-cols-2">
              {casestudies.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link || "#"}
                  className={`group flex flex-col justify-between gap-10 bg-white px-6 py-8 transition-colors duration-500 ease-out hover:bg-gray-50 md:py-12 lg:pb-12 xl:gap-12 ${
                    idx === 0
                      ? "xl:border-l xl:pl-8 border-gray-200"
                      : "border-t border-gray-200 lg:border-t-0 lg:border-l xl:border-r xl:pl-8"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e0f7fa] font-mono text-xs font-bold text-[#00bcd4]">
                    {item.step}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                      {item.tags}
                    </span>
                    <h3 className="mt-3 mb-3 text-xl font-bold text-[#00bcd4] text-balance sm:text-2xl sm:leading-9">
                      {item.title}
                      <span className="font-medium text-gray-900 transition-colors duration-500 ease-out group-hover:text-gray-700">
                        {" "}{item.subtitle}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-[#00bcd4] transition-colors duration-300">
                      Xem chi tiết
                      <MoveRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="hidden w-16 shrink-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:10px_10px] opacity-30 xl:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

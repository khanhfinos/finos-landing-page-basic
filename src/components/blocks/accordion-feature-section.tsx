"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface AccordionFeatureSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  features: FeatureItem[];
}

export const AccordionFeatureSection = ({
  badge,
  heading,
  description,
  features,
}: AccordionFeatureSectionProps) => {
  const [activeTabId, setActiveTabId] = useState<number>(features[0]?.id ?? 1);
  const [activeImage, setActiveImage] = useState(features[0]?.image ?? "");

  return (
    <section className="py-24 bg-[#f7fafb]">
      <div className="max-w-5xl mx-auto px-6">
        {(badge || heading || description) && (
          <div className="text-center mb-14">
            {badge && (
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00bcd4] mb-3 block">
                {badge}
              </span>
            )}
            {heading && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="flex w-full items-start justify-between gap-12">
          {/* Accordion column */}
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold text-left ${
                        tab.id === activeTabId
                          ? "text-[#00bcd4]"
                          : "text-gray-400"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-gray-500 leading-relaxed text-base md:text-lg">
                      {tab.description}
                    </p>
                    {/* Image shown on mobile */}
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-xl object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image column – desktop only */}
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-2xl bg-gray-100 md:block">
            <img
              src={activeImage}
              alt="Feature preview"
              className="aspect-[4/3] w-full rounded-2xl object-cover transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

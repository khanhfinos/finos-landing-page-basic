import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface Changelog1Props {
  title?: string;
  description?: string;
  badge?: string;
  entries?: ChangelogEntry[];
  className?: string;
}

export const Changelog1 = ({
  title,
  description,
  badge,
  entries = [],
}: Changelog1Props) => {
  return (
    <section className="py-24 bg-[#f7fafb]">
      <div className="max-w-5xl mx-auto px-6">
        {(badge || title || description) && (
          <div className="mx-auto max-w-3xl text-center mb-16">
            {badge && (
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00bcd4] mb-3 block">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mx-auto max-w-3xl space-y-16">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 md:flex-row md:gap-16"
            >
              <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                <Badge
                  variant="secondary"
                  className="text-xs bg-[#e0f7fa] text-[#0097a7] border-0 hover:bg-[#e0f7fa]"
                >
                  {entry.version}
                </Badge>
                <span className="text-xs font-medium text-gray-400">
                  {entry.date}
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="mb-3 text-lg leading-tight font-bold text-gray-900 md:text-2xl">
                  {entry.title}
                </h3>
                <p className="text-sm text-gray-500 md:text-base">
                  {entry.description}
                </p>
                {entry.items && entry.items.length > 0 && (
                  <ul className="mt-4 ml-4 space-y-1.5 text-sm text-gray-500 md:text-base">
                    {entry.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={`${entry.version} visual`}
                    className="mt-8 w-full rounded-xl object-cover border border-gray-100"
                  />
                )}
                {entry.button && (
                  <Button variant="link" className="mt-4 self-end text-[#00bcd4] p-0" asChild>
                    <a href={entry.button.url} target="_blank" rel="noopener noreferrer">
                      {entry.button.text} <ArrowUpRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

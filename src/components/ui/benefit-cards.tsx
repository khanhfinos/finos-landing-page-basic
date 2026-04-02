"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type BenefitStat = {
  value: string;
  label: string;
};

export type BenefitItem = {
  id: string;
  icon: string;
  title: string;
  description?: string;
  points: string[];
  stats: BenefitStat[];
  color: string;
};

type Props = {
  badge?: string;
  heading?: string;
  description?: string;
  items: BenefitItem[];
};

export const BenefitCards: React.FC<Props> = ({
  badge,
  heading,
  description,
  items,
}) => {
  const [selected, setSelected] = useState<BenefitItem | null>(null);

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

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelected(item)}
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${item.color} p-6`}>
                <span className="text-3xl">{item.icon}</span>
              </div>
              {/* Card body */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">
                  {item.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {item.points.slice(0, 2).map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#00bcd4] mt-0.5 flex-shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                  {item.points.length > 2 && (
                    <li className="text-xs text-[#00bcd4] font-medium mt-1">
                      +{item.points.length - 2} điểm nổi bật khác →
                    </li>
                  )}
                </ul>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  {item.stats.map((st, k) => (
                    <div key={k} className="text-center">
                      <p className="text-[#00bcd4] font-black text-lg leading-none mb-1">
                        {st.value}
                      </p>
                      <p className="text-gray-400 text-xs leading-tight">{st.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-2xl bg-white border border-gray-100 shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className={`bg-gradient-to-r ${selected.color} p-6 flex items-center justify-between`}>
                <span className="text-4xl">{selected.icon}</span>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selected.title}
                </h3>

                {selected.description && (
                  <p className="text-gray-500 text-sm mb-4">{selected.description}</p>
                )}

                <ul className="space-y-2 mb-6">
                  {selected.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#00bcd4] mt-0.5 flex-shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  {selected.stats.map((st, k) => (
                    <div key={k} className="rounded-xl bg-[#f7fafb] p-4 text-center">
                      <p className="text-[#00bcd4] font-black text-2xl leading-none mb-1">
                        {st.value}
                      </p>
                      <p className="text-gray-500 text-xs leading-tight">{st.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

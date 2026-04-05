"use client";

import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type NavSubItem = {
  label: string;
  description: string;
  icon: React.ElementType;
  href?: string;
};

export type NavSubMenu = {
  title: string;
  items: NavSubItem[];
};

export type NavItem = {
  id: number;
  label: string;
  subMenus?: NavSubMenu[];
  link?: string;
  dropdownAlign?: "left" | "right";
};

type Props = {
  navItems: NavItem[];
};

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  return (
    <ul className="relative flex items-center space-x-0">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => setOpenMenu(navItem.label)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <a
            href={navItem.link ?? "#"}
            className="text-base py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-white/60 hover:text-white relative no-underline"
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
            onClick={navItem.subMenus ? (e) => e.preventDefault() : undefined}
          >
            <span>{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform ${
                  openMenu === navItem.label ? "rotate-180" : ""
                }`}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="hover-bg-nav"
                className="absolute inset-0 size-full bg-white/10"
                style={{ borderRadius: 99 }}
              />
            )}
          </a>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className={`w-auto absolute top-full pt-2 z-50 ${navItem.dropdownAlign === "right" ? "right-0" : "left-0"}`}>
                <motion.div
                  layoutId="menu"
                  className="bg-white border border-gray-200 p-4 w-max shadow-xl"
                  style={{ borderRadius: 16 }}
                >
                  <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="w-full" key={sub.title}>
                        <h3 className="mb-4 text-sm font-medium capitalize text-gray-400">
                          {sub.title}
                        </h3>
                        <ul className="space-y-5">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <a
                                  href={item.href ?? "#"}
                                  className="flex items-start space-x-3 group no-underline"
                                >
                                  <div className="border border-gray-200 text-gray-600 rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-[#00bcd4] group-hover:border-[#00bcd4] group-hover:text-white transition-colors duration-300">
                                    <Icon className="h-4 w-4 flex-none" />
                                  </div>
                                  <div className="leading-5 w-max">
                                    <p className="text-sm font-medium text-gray-900 shrink-0">
                                      {item.label}
                                    </p>
                                    <p className="text-xs text-gray-400 shrink-0 group-hover:text-gray-600 transition-colors duration-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}

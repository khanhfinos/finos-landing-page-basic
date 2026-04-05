"use client";
import { motion } from "framer-motion";
import React from "react";

interface MinimalModernHeroProps {
  logo?: React.ReactNode;
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  accentColor?: string;
  className?: string;
}

export default function MinimalModernHero({
  logo,
  badge,
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  stats = [],
  accentColor = "#00FFA3",
  className = "",
}: MinimalModernHeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{ background: "#FFFFFF" }}
    >
      {/* Subtle Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Accent Line Top */}
      <motion.div
        className="absolute top-0 left-0 h-1"
        style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
        initial={{ width: "0%" }}
        whileInView={{ width: "50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Floating Accent Circle */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: "20%",
          right: "5%",
          width: "350px",
          height: "350px",
          border: `2px solid ${accentColor}20`,
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Small Accent Dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          bottom: "20%",
          right: "12%",
          width: "60px",
          height: "60px",
          background: accentColor,
          opacity: 0.2,
        }}
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              {logo}
            </motion.div>
          )}

          <div className="max-w-4xl">
            {/* Badge */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
                style={{
                  background: `${accentColor}15`,
                  border: `1px solid ${accentColor}40`,
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ background: accentColor }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-bold uppercase tracking-wider text-black">
                  {badge}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#000000", letterSpacing: "-0.03em" }}
            >
              {title.split(" ").map((word, index, arr) => (
                <React.Fragment key={index}>
                  {index === Math.floor(arr.length / 2) ? (
                    <span style={{ color: accentColor }}>{word} </span>
                  ) : (
                    <span>{word} </span>
                  )}
                </React.Fragment>
              ))}
            </motion.h2>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl font-semibold mb-4"
                style={{ color: "#666666" }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl mb-10"
              style={{ color: "#555555", lineHeight: "1.7", maxWidth: "680px" }}
            >
              {description}
            </motion.p>

            {/* Buttons */}
            {(primaryButton || secondaryButton) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-col sm:flex-row items-start gap-4 mb-16"
              >
                {primaryButton && (
                  <motion.a
                    href={primaryButton.href}
                    whileHover={{ scale: 1.05, boxShadow: `0 20px 50px ${accentColor}40` }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-2xl font-bold text-base"
                    style={{ background: accentColor, color: "#000000" }}
                  >
                    {primaryButton.label}
                  </motion.a>
                )}
                {secondaryButton && (
                  <motion.a
                    href={secondaryButton.href}
                    whileHover={{ scale: 1.05, background: "#F5F5F5" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-2xl font-bold text-base"
                    style={{ background: "transparent", color: "#000000", border: "2px solid #E0E0E0" }}
                  >
                    {secondaryButton.label}
                  </motion.a>
                )}
              </motion.div>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <motion.div key={index} whileHover={{ y: -5 }} className="relative">
                    <div className="absolute top-0 left-0 w-8 h-1" style={{ background: accentColor }} />
                    <div className="pt-4">
                      <div className="text-4xl md:text-5xl font-black mb-1" style={{ color: "#000000" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#888888" }}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative rotating square */}
      <motion.div
        className="absolute"
        style={{
          bottom: "10%",
          right: "4%",
          width: "160px",
          height: "160px",
          border: `1px solid ${accentColor}30`,
          transform: "rotate(45deg)",
        }}
        animate={{ rotate: [45, 135, 45] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 right-0 h-1"
        style={{ background: `linear-gradient(270deg, ${accentColor}, transparent)` }}
        initial={{ width: "0%" }}
        whileInView={{ width: "40%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      />
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  features: FeatureItem[];
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  features,
  progressGradientLight = "bg-gradient-to-r from-sky-400 to-sky-500",
  progressGradientDark = "bg-gradient-to-r from-sky-300 to-sky-400",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;
    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();
      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left — Feature list */}
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden lg:overflow-visible flex lg:flex lg:flex-col flex-row order-2 lg:order-1 pb-4 scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;
              return (
                <div
                  key={feature.id}
                  ref={(el) => { featureRefs.current[index] = el; }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={`flex lg:flex-row flex-col items-start space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 shadow-xl rounded-xl border border-white/20"
                        : ""
                    }`}
                  >
                    <div
                      className={`p-3 hidden md:block rounded-full transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? "bg-accent text-white"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`transition-colors duration-300 text-lg leading-relaxed ${
                          isActive ? "text-white/70" : "text-white/40"
                        }`}
                      >
                        {feature.description}
                      </p>
                      <div className="mt-4 bg-white/10 rounded-sm h-1 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className={`h-full ${progressGradientLight}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — Image */}
          <div className="relative order-1 lg:order-2 max-w-sm mx-auto w-full">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg"
            >
              <Image
                className="object-cover"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                fill
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

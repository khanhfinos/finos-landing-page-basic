"use client";

import ParticleCanvas from "@/components/ui/particle-canvas";

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-28 flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      <ParticleCanvas
        particleColor="rgba(0, 188, 212, 0.7)"
        lineColor="rgba(0, 188, 212, {opacity})"
        lineColorNearMouse="rgba(255, 255, 255, {opacity})"
        mouseRadius={180}
      />
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-accent/20 rotate-45" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/80 text-sm font-medium">{badge}</span>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

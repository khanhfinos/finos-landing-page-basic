"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface SpotlightCTAProps extends React.HTMLAttributes<HTMLDivElement> {
  titleId: string;
  descriptionId: string;
}

const SpotlightCTA = React.forwardRef<HTMLDivElement, SpotlightCTAProps>(
  ({ className, children, titleId, descriptionId, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      if (containerRef.current && event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
      }
    };

    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    return (
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: -200, y: -200 })}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchMove}
        onTouchEnd={() => setMousePosition({ x: -200, y: -200 })}
        className={cn(
          "group/spotlight relative w-full max-w-4xl mx-auto p-8 overflow-hidden rounded-2xl",
          "bg-white dark:bg-slate-900",
          "shadow-lg dark:shadow-2xl transition-shadow duration-300 ease-in-out",
          "hover:shadow-xl dark:hover:shadow-teal-500/20",
          className
        )}
        role="region"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        {...props}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 148, 136, 0.08), transparent 40%)`,
          }}
        />
        <div className="absolute inset-[-1px] border border-slate-200 dark:border-white/10 rounded-2xl pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);
SpotlightCTA.displayName = "SpotlightCTA";

interface SpotlightCTAContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const SpotlightCTAContent = React.forwardRef<HTMLDivElement, SpotlightCTAContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col md:flex-row items-center justify-between gap-8", className)}
      {...props}
    />
  )
);
SpotlightCTAContent.displayName = "SpotlightCTAContent";

interface SpotlightCTATextProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  titleId: string;
  descriptionId: string;
}

const SpotlightCTAText = React.forwardRef<HTMLDivElement, SpotlightCTATextProps>(
  ({ title, description, titleId, descriptionId, className, ...props }, ref) => (
    <div ref={ref} className={cn("text-center md:text-left", className)} {...props}>
      <h2
        id={titleId}
        className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-relaxed"
      >
        {title}
      </h2>
      {description && (
        <p id={descriptionId} className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
);
SpotlightCTAText.displayName = "SpotlightCTAText";

interface SpotlightCTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const SpotlightCTAButton = React.forwardRef<HTMLAnchorElement, SpotlightCTAButtonProps>(
  ({ className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "group/button flex-shrink-0 inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-teal-600 rounded-full transition-all duration-300 ease-in-out hover:bg-teal-500 cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover/button:translate-x-1" />
    </a>
  )
);
SpotlightCTAButton.displayName = "SpotlightCTAButton";

export { SpotlightCTA, SpotlightCTAContent, SpotlightCTAText, SpotlightCTAButton };

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      buttonText,
      buttonHref,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 100, damping: 12 },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary-dark/60" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-24 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="max-w-3xl text-2xl font-bold leading-relaxed text-white sm:text-3xl"
            variants={itemVariants}
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              className="max-w-2xl text-lg text-white/80"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          )}

          <motion.div variants={itemVariants}>
            {buttonHref ? (
              <a href={buttonHref}>
                <Button
                  size="lg"
                  className="h-12 border border-white/40 bg-transparent px-8 text-white backdrop-blur-sm hover:bg-white/10"
                  onClick={onButtonClick}
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            ) : (
              <Button
                size="lg"
                className="h-12 border border-white/40 bg-transparent px-8 text-white backdrop-blur-sm hover:bg-white/10"
                onClick={onButtonClick}
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";

export { CtaCard };

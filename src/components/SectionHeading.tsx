import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, light, center, className }: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-20",
      center ? "text-center mx-auto" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "block text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-4",
            light ? "text-ivory/60" : "text-gold/60"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight",
          light ? "text-ivory" : "text-maroon"
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-px mt-6",
          center ? "mx-auto" : "",
          light ? "bg-gold" : "bg-gold"
        )}
      />
    </div>
  );
}

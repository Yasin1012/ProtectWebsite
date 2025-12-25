import { useEffect, useState, useRef, type RefObject } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Betreute Unternehmen",
  },
  {
    icon: Users,
    value: 20000,
    suffix: "+",
    label: "Geschulte Mitarbeiter",
  },
  {
    icon: Calendar,
    value: 20,
    suffix: "+",
    label: "Jahre Erfahrung",
  },
  {
    icon: Award,
    value: 10000,
    suffix: "+",
    label: "Durchgeführte Prüfungen",
  },
];

function useIntersectionObserver(ref: RefObject<HTMLElement | null>, options = {}): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}

function CountUp({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('de-DE');
  };

  return <>{formatNumber(count)}{suffix}</>;
}

export function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(containerRef);

  return (
    <section className="bg-primary py-16 md:py-20" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
              data-testid={`stat-item-${index}`}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="mb-2 text-4xl font-bold text-primary-foreground md:text-5xl" data-testid={`stat-value-${index}`}>
                <CountUp target={stat.value} suffix={stat.suffix} isVisible={isInView} />
              </div>
              <p className="text-sm font-medium text-primary-foreground/80" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

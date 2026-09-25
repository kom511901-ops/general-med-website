'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ value, suffix = '', duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (currentValue) => `${Math.round(currentValue)}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

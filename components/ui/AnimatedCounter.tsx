import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    value,
    suffix = '',
    duration = 2
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useSpring(0, {
        stiffness: 50,
        damping: 15,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = motionValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });

        return () => unsubscribe();
    }, [motionValue, suffix]);

    return (
        <span
            ref={ref}
            className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent font-bold"
        >
            0{suffix}
        </span>
    );
};

export default AnimatedCounter;

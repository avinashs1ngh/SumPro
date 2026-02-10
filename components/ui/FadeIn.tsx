import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
    className?: string;
    fullWidth?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.5,
    className = '',
    fullWidth = false
}) => {
    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { opacity: 0, y: 20 };
            case 'down':
                return { opacity: 0, y: -20 };
            case 'left':
                return { opacity: 0, x: -20 };
            case 'right':
                return { opacity: 0, x: 20 };
            default:
                return { opacity: 0, y: 20 };
        }
    };

    return (
        <motion.div
            initial={getInitialPosition()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: "easeOut"
            }}
            className={className}
            style={{ width: fullWidth ? '100%' : undefined }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;

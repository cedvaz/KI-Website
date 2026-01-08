
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollWord: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Animation values for the letters spreading
    const letterSpacing = useTransform(scrollYProgress, [0.3, 0.7], ["-0.05em", "0.5em"]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1.2]);

    // Trail layers animations
    const layer1Y = useTransform(scrollYProgress, [0.3, 0.7], [0, -100]);
    const layer2Y = useTransform(scrollYProgress, [0.3, 0.7], [0, 100]);
    const layer1Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.3, 0]);
    const layer2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.3, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-dark">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* The "Trail" Layers */}
                <motion.div
                    style={{
                        letterSpacing,
                        opacity: layer1Opacity,
                        y: layer1Y,
                        scale
                    } as any}
                    className="absolute inset-0 flex items-center justify-center text-[20vw] md:text-[25vw] font-black text-tiger select-none pointer-events-none uppercase tracking-tighter italic"
                >
                    UNFUCK
                </motion.div>

                <motion.div
                    style={{
                        letterSpacing,
                        opacity: layer2Opacity,
                        y: layer2Y,
                        scale
                    } as any}
                    className="absolute inset-0 flex items-center justify-center text-[20vw] md:text-[25vw] font-black text-maya select-none pointer-events-none uppercase tracking-tighter italic"
                >
                    UNFUCK
                </motion.div>

                {/* Main Outline Text */}
                <motion.div
                    className="relative z-10 text-[20vw] md:text-[25vw] font-black text-transparent select-none pointer-events-none uppercase tracking-tighter italic"
                    style={{
                        WebkitTextStroke: '2px white',
                        letterSpacing: letterSpacing as any,
                        opacity: opacity as any,
                        scale: scale as any
                    } as any}
                >
                    UNFUCK
                </motion.div>

                {/* Center Accent Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    style={{
                        opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0])
                    } as any}
                    className="absolute z-20 bg-white text-dark px-8 py-4 rounded-full font-black text-4xl md:text-6xl uppercase tracking-tighter"
                >
                    the hype
                </motion.div>

            </div>
        </section>
    );
};

export default ScrollWord;

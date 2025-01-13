'use client'

import React from 'react';
import { motion } from 'framer-motion';

const InfiniteAnimationEffect = () => {
    const svgPath = "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"; // Example SVG path

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 100"
                className="w-full h-full"
            >
                <motion.path
                    d={svgPath}
                    fill="transparent"
                    stroke="#00FF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1, pathOffset: 0 }}
                    transition={{
                        pathLength: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        },
                        pathOffset: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        },
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default InfiniteAnimationEffect;


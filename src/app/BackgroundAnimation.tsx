// BackgroundAnimation.tsx

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, #ff7e5f, #feb47b, #ffefa1)',
          opacity: 0.6,
          mixBlendMode: 'overlay',
          animation: 'shiftColors 15s infinite alternate linear',
        }}
      />
      <style jsx>{`
        @keyframes shiftColors {
          from {
            filter: hue-rotate(0deg);
          }
          to {
            filter: hue-rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default BackgroundAnimation;

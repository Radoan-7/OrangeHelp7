import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, HandHeart, Sparkles } from 'lucide-react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5 
          }}
          className="mb-8"
        >
          <div className="relative mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <HandHeart className="w-12 h-12 text-orange-500" />
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-500/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Brand name animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl font-bold text-white mb-4 tracking-tight"
        >
          Orange<span className="text-yellow-200">Help</span>
        </motion.h1>

        {/* Tagline animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl text-white/90 mb-8 max-w-md mx-auto"
        >
          Connecting hearts, building communities
        </motion.p>

        {/* Feature icons animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-8"
        >
          {[
            { icon: Heart, label: "Care" },
            { icon: Users, label: "Community" },
            { icon: Sparkles, label: "Impact" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 1.7 + index * 0.2, 
                type: "spring",
                stiffness: 200 
              }}
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 mx-auto">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white/80">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Fade out animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          className="absolute inset-0 bg-white"
          style={{ zIndex: -1 }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  
  const bgUrl = '/images/kitchen.jpg';

  return (
    <motion.header
      className="hero-header"
      style={{ backgroundImage: `url(${bgUrl})` }}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-overlay" />
      <motion.img
        src="/images/chef.png"
        alt="Chef Logo"
        className="hero-logo"
        initial={{ scale: 0.5, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      <motion.h1
        className="hero-title"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Chef’s Recipe
      </motion.h1>
    </motion.header>
  );
}

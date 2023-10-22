import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './scrollingText.module.scss';

const scroll = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const letterAni = {
  initial: { x: 300 },
  animate: {
    x: 0,
    transition: {
      ease: [0.5, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

// eslint-disable-next-line react/prop-types
const ScrollingText = ({ title }) => {
  const [sideScroll, setSideScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSideScroll(true);
    }, 500);
  }, []);
  return (
    <motion.div variants={scroll}>
      <TextRow title={title} sideScroll={sideScroll} />
    </motion.div>
  );
};

// eslint-disable-next-line react/prop-types
const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className={styles.row_title}
    variants={disabled ? null : scroll}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, i) => (
      <motion.span
        key={i}
        className={styles.row_letter}
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

// eslint-disable-next-line react/prop-types
const TextRow = ({ title, sideScroll }) => {
  return (
    <div
      className={`${styles.sideScroll}  ${sideScroll && `${styles.animate}`}`}
    >
      <motion.div
        initial={{ y: 210 }}
        animate={{ y: 0 }}
        transition={{ elapsed: [0.3, 0.01, -0.05, 0.9], duration: 2 }}
        className={styles.sideScroll__inner}
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </motion.div>
    </div>
  );
};

export default ScrollingText;

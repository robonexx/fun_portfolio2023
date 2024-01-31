// Boombox.tsx
import React, { useState, useRef } from 'react';
import styles from './BoomBox.module.scss';
import music from '../../../assets/audio/mamihello.mp3';
import { motion } from 'framer-motion'

const Boombox = ({ playMusic, setPlayMusic }) => {
  const [isOn, setIsOn] = useState(false);
  const audioRef = useRef(null);

    const handleClick = (e) => {
        e.stopPropagation();
        /*  setIsOn((prevIsOn) => !prevIsOn); */
        setPlayMusic((prev) => !prev);

        if (!playMusic) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }

   /*  if (!isOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }; */

  return (
      <motion.div className={styles['boom-box-wrapper']}
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{duration: 0.6, delay: 1}}
      >
      <div className={`${styles.boombox} ${playMusic ? `${styles.on}` : ''}`}>
        <div className={styles.handle}></div>
        <div className={styles.controls}>
          <div className={styles.dial}></div>
          <ul className={styles.bars}>
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <span></span>
              </li>
            ))}
          </ul>
          <ul className={styles['buttons-right']}>
            <li onClick={(e) => handleClick(e)}>
              <span className={styles['ion-power']}>PLAY</span>
            </li>
          </ul>
        </div>
        <div className={styles.tape}></div>
        <div className={styles['speaker-left']}></div>
        <div className={styles['speaker-right']}></div>
      </div>
      <audio ref={audioRef} src={music} loop />
    </motion.div>
  );
};

export default Boombox;

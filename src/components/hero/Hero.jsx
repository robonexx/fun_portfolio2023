import { useContext } from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';
import IMG from '../../assets/images/hero_img.png';
import IMGBG from '../../assets/images/sthlm.jpg';
import TalkBubble from './TalkBubble';
import HeroSthlm from './HeroSthlm';
import { ThemeContext } from '../../App';
import { Button } from '../buttons/Button';

// eslint-disable-next-line react/prop-types
const Hero = ({ audio }) => {
  const [darkTheme] = useContext(ThemeContext);

  return (
    <div className='hero'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className={audio ? 'addAnimation' : ''}
      >
        Creative minded{' '}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Developer at your service
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <TalkBubble />
      </motion.div>
      {/* <img src={IMGBG} alt='hero img' className='bgimg' /> */}
      <motion.div
        className='bgimg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSthlm />
      </motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        src={IMG}
        alt='hero img'
        className={audio ? 'img addAnimationToImg' : 'img '}
        style={{ filter: darkTheme ? 'brightness(50%)' : 'brightness(100%)' }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className='cta'
      >
        <Button title='check my work' />
      </motion.div>
    </div>
  );
};

export default Hero;

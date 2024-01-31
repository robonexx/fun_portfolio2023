import { useContext } from 'react';
import {motion} from 'framer-motion'
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
      <h1 className={audio ? 'addAnimation' : ''}>Creative minded </h1>
      <h2>Developer at your service</h2>
      <TalkBubble />
      {/* <img src={IMGBG} alt='hero img' className='bgimg' /> */}
      <motion.div className='bgimg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{duration: 1}}
      >
        <HeroSthlm />
      </motion.div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 2, delay: 1}}
        src={IMG}
        alt='hero img'
        className={audio ? 'img addAnimationToImg' : 'img '}
        style={{ filter: darkTheme ? 'brightness(50%)' : 'brightness(100%)' }}
      />
      
      <div className='cta'>
          <Button title='check my work'/>
      </div>
    </div>
  );
};

export default Hero;

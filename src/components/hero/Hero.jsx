import './Hero.scss';
import IMG from '../../assets/images/hero_img.png';
import IMGBG from '../../assets/images/sthlm.jpg';
import TalkBubble from './TalkBubble';

// eslint-disable-next-line react/prop-types
const Hero = ({ audio }) => {
  /*  lights ? console.log('on') : console.log('off') */

  return (
    <div className='hero'>
      <h1 className={audio ? 'addAnimation' : ''}>Welcome to my world</h1>
      <TalkBubble />
      <img src={IMGBG} alt='hero img' className='bgimg' />
      <img src={IMG} alt='hero img' className={audio ? 'img addAnimationToImg' : 'img '} />
    </div>
  );
};

export default Hero;

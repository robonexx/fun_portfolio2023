import './Hero.scss';
import IMG from '../../assets/images/hero_img.png';
import TalkBubble from './talkBubble';

// eslint-disable-next-line react/prop-types
const Hero = ({ lights }) => {
  /*  lights ? console.log('on') : console.log('off') */

  return (
    <div className='hero'>
      <h2>Hi there I&apos;m Rubadub</h2>
      {!lights ? <TalkBubble /> : <div></div>}

      <img src={IMG} alt='hero img' />
    </div>
  );
};

export default Hero;

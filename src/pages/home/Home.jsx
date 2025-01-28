/* import { Background } from '../../components/background/Background'; */
import { Button } from '../../components/buttons/Button';
import { Silhuette } from '../../components/silhuette/Silhuette';
import Hero from '../../components/hero/Hero';
import './homepage.scss';

// eslint-disable-next-line react/prop-types
export const Home = ({ audio }) => {
  return (
    <div className='home'>
      <Hero audio={audio} />
      <section className='section'>
        <h1 className='title'>Selected work</h1>
      </section>
      <section className='section'>
        <h2>just for testing</h2>
        <div className='parent'>
          <div className='clipped-element'></div>
        </div>
        <p>
          I know, what is that? is a bug, or... not a bug, just is... fun right,
          and wierd 😅
        </p>
      </section>
      <section className='section'>
        <Button title='Check my work' />
      </section>
      <section className='section'>{/* <Background /> */}</section>
      <section className='section'>
        <Silhuette />
      </section>
    </div>
  );
};

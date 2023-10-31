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
      <h1 className='title'>New portfolio- lets go</h1>
      <h2>just for testing</h2>
      <div className='parent'>
        <div className='clipped-element'></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        maiores nemo exercitationem, dicta voluptas commodi quam dolores eos
        amet ea quaerat provident delectus impedit? Quia quam enim modi hic?
        Excepturi.
      </p>
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

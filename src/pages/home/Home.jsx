/* import { Background } from '../../components/background/Background'; */
import { Button } from '../../components/buttons/Button';
import { Silhuette } from '../../components/silhuette/Silhuette';
import Hero from '../../components/hero/Hero';
import './homepage.scss';

export const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <h1 className='title'>New portfolio- lets go</h1>
      <h2>just for testing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        maiores nemo exercitationem, dicta voluptas commodi quam dolores eos
        amet ea quaerat provident delectus impedit? Quia quam enim modi hic?
        Excepturi.
      </p>
      <section className='section'>
        <Button title='Check my work' />
      </section>
      <section className='section'>
        {/* <Background /> */}
      </section>
      <section className='section'>
        <Silhuette />
      </section>
    </div>
  );
};

import { Background } from '../../components/background/Background';
import { Button } from '../../components/buttons/Button';
import { Silhuette } from '../../components/silhuette/Silhuette';
import styles from './homepage.module.scss';

export const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>New portfolio- lets go</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        maiores nemo exercitationem, dicta voluptas commodi quam dolores eos
        amet ea quaerat provident delectus impedit? Quia quam enim modi hic?
        Excepturi.
      </p>
      <section className={styles.section}>
        <Button title='Check my work' />
      </section>
      <section className={styles.section}>
        <Background />
      </section>
      <section className={styles.section}>
        <Silhuette />
      </section>
    </div>
  );
};

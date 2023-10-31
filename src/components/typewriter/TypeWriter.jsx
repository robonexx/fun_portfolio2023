import { useState, useEffect } from 'react';
import './typewriter.scss';

const phrases = [
  'Goddagens!',
  'Tjena kompis',
  'Terve kaveri',
  'こんにちは',
  'Hola Amigo',
  'Shoo bre',
  '你好呀... I`m Rob',
  'A Frontend developer based in Stockholm, Sweden',
  'I LIKE CREATING SMART USER INTERFACES & USEFUL INTERACTIONS',
  'RESPONSIVE AND "UP TO DATE" WEBSITES',
  'DEVELOPING RICH WEB EXPERIENCES & APPLICATIONS',
  'Feel free to check around on my new website 😉',
];

const TypeWriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === phrases.length) return;

    if (subIndex === phrases[index].length + 1) {
      if (index === phrases.length - 1) {
        return;
      }

      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setSubIndex(0);
      }, 1000);
    } else {
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <h3 className='typewriter'>
      {`${phrases[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </h3>
  );
};

export default TypeWriter;

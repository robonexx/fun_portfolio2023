import { useState, useEffect } from 'react';
import './typewriter.scss';

const words = [
  'Hej',
  'Hello',
  'Terve',
  'Hola',
  'Hi... I`m Rob',
  'A Frontend developer based in Stocholm, Sweden',
  'I LIKE CREATING SMART USER INTERFACES & USEFUL INTERACTIONS',
  'RESPONSIVE AND "UP TO DATE" WEBSITES',
  'DEVELOPING RICH WEB EXPERIENCES & APPLICATIONS',
];

export default function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === words[index].length ? 20 : 60, parseInt(Math.random() * 5)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 2000);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <h3 className='typewriter'>{`${words[index].substring(0, subIndex)}${
      blink ? '|' : ' '
    }`}</h3>
  );
}

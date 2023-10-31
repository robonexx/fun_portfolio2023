import React, { useState, useEffect } from 'react';
import './typewriter.scss';

const words = [
  'Hej',
  'Hello',
  'Terve',
  'Hola',
  'Hi... I`m Rob',
  'A Frontend developer based in Stockholm, Sweden',
  'I LIKE CREATING SMART USER INTERFACES & USEFUL INTERACTIONS',
  'RESPONSIVE AND "UP TO DATE" WEBSITES',
  'DEVELOPING RICH WEB EXPERIENCES & APPLICATIONS',
];

const TypeWriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1) {
      // If the word is fully typed
      if (index === words.length - 1) {
        // If it's the last word, wait for a delay and then reset to the first word
        setTimeout(() => {
          setIndex(0);
          setSubIndex(0);
        }, 1000); // You can adjust the delay before resetting
      } else {
        // Move to the next word
        setTimeout(() => {
          setIndex((prev) => prev + 1);
          setSubIndex(0);
        }, 1000); // You can adjust the delay before moving to the next word
      }
    } else {
      // Continue typing the current word
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + 1);
      }, 60); // You can adjust the typing speed
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index]);

  // blinker
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <h3 className='typewriter'>
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </h3>
  );
};

export default TypeWriter;

/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import styles from './soundvisualizer.module.scss'

const SoundVisualizer = ({ playMusic }) => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);

  useEffect(() => {
    if (playMusic === true) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const audio = document.querySelector('audio');
      if (!audio || audioContextRef.current) {
        return;
      }

      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioContextRef.current.createAnalyser();
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      const barWidth = (WIDTH / bufferLength) * 4;
      let x = 0;

      const source = audioContextRef.current.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContextRef.current.destination);

      const renderFrame = () => {
        requestAnimationFrame(renderFrame);

        analyser.getByteFrequencyData(dataArray);

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = dataArray[i];

          const r = barHeight + 20 * (i / bufferLength);
          const g = 17 * (i / bufferLength);
          const b = 5;

          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

          x += barWidth + 1;
        }
      };
      renderFrame();
    } else {
      return;
    }
  }, [playMusic]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default SoundVisualizer;

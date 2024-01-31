/* eslint-disable react/prop-types */
import { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import music from '../../../assets/audio/mamihello.mp3';

const Box = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  position: fixed;
  left: auto;
  right: 0;
  bottom: 0;
  z-index: 1001;

  @media (min-width: 768px) {
    right: 12.75rem;
    bottom: 11rem;
  }

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;
const Line = styled.span`
  background: transparent;
  border: 1px solid #1b1b1b;

  animation: ${play} 1s ease infinite;
  animation-play-state: ${({ click }) => (click ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBar = ({ playMusic, setPlayMusic }) => {
  const ref = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPlayMusic((prev) => !prev);

    if (!playMusic) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Box onClick={(e) => handleClick(e)}>
      <Line click={playMusic ? 1 : 0} />
      <Line click={playMusic ? 1 : 0} />
      <Line click={playMusic ? 1 : 0} />
      <Line click={playMusic ? 1 : 0} />
      <Line click={playMusic ? 1 : 0} />

      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;

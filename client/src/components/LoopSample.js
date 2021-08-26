import { useEffect, useState, useRef } from 'react';
export default function LoopSample({ sample, active, isPlaying, numSamples }) {
  const [play, setPlay] = useState(false);

  const audioRef = useRef(new Audio(sample.url));

  const toPlay = () => {
    setPlay(true);
    audioRef.current.play();
  };

  const toPause = () => {
    setPlay(false);
    audioRef.current.pause();
  };

  const checkPlay = () => {
    play ? toPause() : toPlay();
  };

  return (
    <div
      onClick={() => (active ? checkPlay() : setPlay(false))}
      className={play ? 'play' : 'notPlay'}>
      <div>{sample.name}</div>
    </div>
  );
}

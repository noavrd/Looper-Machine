import { useEffect, useState, useRef } from 'react';
export default function LoopSample({ sample, active, isPlaying, numSamples }) {
  const [play, setPlay] = useState(false);

  const audioRef = useRef(new Audio(sample.url));

  //Play sample
  const toPlay = () => {
    setPlay(true);
    audioRef.current.play();
    audioRef.current.loop = true;
  };

  //Pause sample
  const toPause = () => {
    setPlay(false);
    audioRef.current.pause();
  };

  const checkPlay = () => {
    play ? toPause() : toPlay();
  };

  useEffect(() => {
    toPause();
  }, [active]);

  return (
    <div
      onClick={() => active && checkPlay()}
      className={play ? 'play' : 'notPlay'}>
      {console.log(active)}
      <div>{sample.name}</div>
    </div>
  );
}

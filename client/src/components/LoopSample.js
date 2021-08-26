import { useEffect, useState, useRef } from 'react';
export default function LoopSample({
  sample,
  active,
  startPlaySample,
  setNumSamples,
  numSamples,
  samplesToPlay,
}) {
  const [play, setPlay] = useState(false);

  const audioRef = useRef(new Audio(sample.url));

  //Play sample
  const toPlay = () => {
    if (numSamples === 0) {
      audioRef.current.play();
      audioRef.current.loop = true;
    }
    samplesToPlay.push(sample.name);
    setPlay(true);
    setNumSamples(numSamples + 1);
  };

  //Pause sample
  const toPause = () => {
    setPlay(false);
    audioRef.current.pause();
    numSamples !== 0 && setNumSamples(numSamples - 1);
  };

  const checkPlay = () => {
    play ? toPause() : toPlay();
  };

  useEffect(() => {
    !active && toPause();
  }, [active]);

  return (
    <div
      onClick={() => active && checkPlay()}
      className={play ? 'play sample' : 'notPlay sample'}>
      <div>{sample.name}</div>
    </div>
  );
}

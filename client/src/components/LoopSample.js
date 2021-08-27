import { useEffect, useState, useRef } from 'react';
export default function LoopSample({
  sample,
  active,
  startPlaySample,
  setNumSamples,
  numSamples,
  setStartPlaySample,
}) {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(new Audio(sample.url));

  //When clicking to play the sample
  const toPlay = () => {
    if (numSamples === 0) {
      setStartPlaySample(true);
    }
    setPlay(true);
    setNumSamples(numSamples + 1);
  };

  //Start the sample at the begging of the loop
  useEffect(() => {
    if (startPlaySample && play) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      audioRef.current.loop = true;
    }
  }, [startPlaySample]);

  //Pause sample
  const toPause = () => {
    setPlay(false);
    audioRef.current.pause();
    audioRef.current.remove();
    numSamples !== 0 && setNumSamples(numSamples - 1);
  };
  console.log(numSamples);
  const checkPlay = () => {
    play ? toPause() : toPlay();
  };

  //Pause all sample when clicking pause
  useEffect(() => {
    !active && toPause();
  }, [active]);

  return (
    <div
      onClick={() => active && checkPlay()}
      className={play ? 'play sample' : 'notPlay sample'}>
      <i className={`${sample.icon} icon`}></i>
    </div>
  );
}

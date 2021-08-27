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
  // const

  const audioRef = useRef(new Audio(sample.url));

  //Play sample
  const toPlay = () => {
    if (numSamples === 0) {
      setStartPlaySample(true);
      // audioRef.current.play();
      // audioRef.current.loop = true;
    }
    setPlay(true);
    setNumSamples(numSamples + 1);
  };

  useEffect(() => {
    if (startPlaySample && play) {
      console.log('enterrrr');
      audioRef.current.play();
      audioRef.current.loop = true;
      // } else if (startPlaySample && numSamples === 1 && play) {
      //   console.log('starttttt');
      //   audioRef.current.play();
      //   audioRef.current.loop = true;
    }
  }, [startPlaySample]);
  console.log(startPlaySample, play);
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

  useEffect(() => {
    !active && toPause();
  }, [active]);

  return (
    <div
      onClick={() => active && checkPlay()}
      className={play ? 'play sample' : 'notPlay sample'}>
      {/* <div>{sample.name}</div> */}
      <i className={`${sample.icon} icon`}></i>
    </div>
  );
}

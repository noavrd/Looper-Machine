import { useEffect, useState } from 'react';

export default function LoopSample({ sample, active }) {
  const [play, setPlay] = useState(false);
  console.log(sample);
  console.log(sample.url);
  const toggle = () => setPlay(!play);
  const [song, setSong] = useState('');
  let audio = new Audio(sample.url);
  useEffect(() => {
    play ? audio.play() : audio.pause();
  }, [play]);

  {
  }
  return (
    <div
      onClick={() => active && setPlay(!play)}
      className={play ? 'play' : 'notPlay'}>
      {/* <div>{sample.name}</div>
      <audio controls>
        <source src={sample.url.url} type="audio/ogg"></source>
      </audio> */}
      <button onClick={toggle}>{play ? 'Pause' : 'Play'}</button>
    </div>
  );
}

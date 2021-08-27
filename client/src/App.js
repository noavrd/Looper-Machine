import { useEffect, useState } from 'react';
import './App.css';
import LoopSample from './components/LoopSample';
import breakBeats from './components/audio/breakbeats.mp3';
import electricGuitar from './components/audio/electricGuitar.mp3';
import future_func from './components/audio/future_func.mp3';
import grooveA from './components/audio/grooveA.mp3';
import grooveB from './components/audio/grooveB.mp3';
import heavyFunc from './components/audio/heavyFunc.mp3';
import MazePolitics from './components/audio/MazePolitics.mp3';
import SilentStar from './components/audio/SilentStar.mp3';
import stompySlosh from './components/audio/stompySlosh.mp3';

function App() {
  const [startPlaySample, setStartPlaySample] = useState(false);
  const [active, setActive] = useState(false);
  const [numSamples, setNumSamples] = useState(0);
  let startLoop;

  useEffect(() => {
    console.log('useeee');

    //Start the loop when there is 1 sample
    if (numSamples === 1) {
      startLoop = setInterval(() => {
        if (active) {
          setStartPlaySample(true);
          console.log('noww');
        }
      }, 8000);
    } else if (numSamples === 0) {
      clearInterval(startLoop);
      startLoop = null;
    }
    if (numSamples > 0) {
      setStartPlaySample(false);
    }
  }, [numSamples]);

  return (
    <div className="App">
      <h1>Looper</h1>
      <div className="container">
        {data.map((sample, i) => {
          return (
            <LoopSample
              sample={sample}
              key={i}
              active={active}
              startPlaySample={startPlaySample}
              setNumSamples={setNumSamples}
              numSamples={numSamples}
              setStartPlaySample={setStartPlaySample}
            />
          );
        })}
      </div>

      <button
        className={
          active ? 'fa fa-pause-circle-o active' : 'fa fa-play-circle-o active'
        }
        aria-hidden="true"
        onClick={() => {
          setActive(!active);
          setNumSamples(0);
          setStartPlaySample(false);
        }}></button>
      {!active && <div className="note">To start the loop hit play</div>}
    </div>
  );
}

const data = [
  {
    url: breakBeats,
    name: 'Break Beats',
    icon: 'fas fa-record-vinyl',
  },
  {
    url: electricGuitar,
    name: 'Electric Guitar',
    icon: 'fas fa-guitar',
  },
  {
    url: future_func,
    name: 'Future Func',
    icon: 'fab fa-itch-io',
  },
  {
    url: grooveA,
    name: 'Groove A',
    icon: 'fas fa-headphones',
  },
  {
    url: grooveB,
    name: 'Groove B',
    icon: 'fas fa-music',
  },
  {
    url: heavyFunc,
    name: 'Heavy Func',
    icon: 'fas fa-compact-disc',
  },
  {
    url: MazePolitics,
    name: 'Maze Politics',
    icon: 'fab fa-reddit-alien',
  },
  {
    url: SilentStar,
    name: 'Silent Star',
    icon: 'fas fa-star',
  },
  {
    url: stompySlosh,
    name: 'Stompy Slosh',
    icon: 'fas fa-drum',
  },
];
export default App;

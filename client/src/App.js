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
  const [isPlaying, setIsPlaying] = useState(false);
  const [active, setActive] = useState(false);
  const [numSamples] = useState(0);

  return (
    <div className="App">
      <h1>LOOP</h1>
      <button
        className={active ? 'fa fa-pause-circle-o' : 'fa fa-play-circle-o '}
        aria-hidden="true"
        onClick={() => setActive(!active)}></button>

      {data.map((sample, i) => {
        return (
          <LoopSample
            sample={sample}
            key={i}
            active={active}
            isPlaying={isPlaying}
            numSamples={numSamples}
          />
        );
      })}
    </div>
  );
}

const data = [
  {
    url: breakBeats,
    name: 'Break Beats',
  },
  {
    url: electricGuitar,
    name: 'Electric Guitar',
  },
  {
    url: future_func,
    name: 'Future Func',
  },
  {
    url: grooveA,
    name: 'Groove A',
  },
  {
    url: grooveB,
    name: 'Groove B',
  },
  {
    url: heavyFunc,
    name: 'Heavy Func',
  },
  {
    url: MazePolitics,
    name: 'Maze Politics',
  },
  {
    url: SilentStar,
    name: 'Silent Star',
  },
  {
    url: stompySlosh,
    name: 'Stompy Slosh',
  },
];
export default App;

import { useState } from 'react';
import './App.css';
import LoopSample from './components/LoopSample';
import data from './data.json';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <h1>LOOP</h1>
      <button
        className={active ? 'fa fa-pause-circle-o' : 'fa fa-play-circle-o '}
        aria-hidden="true"
        onClick={() => setActive(!active)}></button>

      {console.log(data)}
      {data.map((sample, i) => {
        return <LoopSample sample={sample} key={i} active={active} />;
      })}
    </div>
  );
}

export default App;

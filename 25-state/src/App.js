import './App.css';
import Counter from './Counter';
import Prac1 from './StatePrac1';
import CounterFunc from './CounterFunc';
import SayFunction from './SayFunction';
import Prac2 from './StatePrac2';
import Mindmap from './Mindmap';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <SayFunction />
      <hr />
      <CounterFunc />
      <hr />
      <h1>실습1</h1>
      <Prac1 />
      <hr />
      <h1>실습2</h1>
      <Prac2 />
      <hr />
      <Mindmap />
    </div>
  );
}

export default App;

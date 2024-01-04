import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SynthenticEvent';
import HandleEvent from './components/ex/HandleEx';
import HandleEx2 from './components/ex/HandleEx2';
import HandleEx3 from './components/ex/HandleEx3';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <h1>실습1</h1>
      <HandleEvent />
      <hr />
      <h1>실습2</h1>
      <HandleEx2 />
      <hr />
      <h1>실습3</h1>
      <HandleEx3 />
    </div>
  );
}

export default App;

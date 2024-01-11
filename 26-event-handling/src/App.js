import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SynthenticEvent';
import HandleEvent from './components/ex/HandleEx';
import HandleEx2 from './components/ex/HandleEx2';
import HandleEx3 from './components/ex/HandleEx3';
import Prac3 from './Prac3';

function App() {
  return (
    <div className="App">
      {/* <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr /> */}
      <Counter />
      {/* <hr />
      <h1>실습1</h1>
      <HandleEvent />
      <hr />
      <h1>실습2</h1>
      <HandleEx2 />
      <hr />
      <h1>실습3</h1>
      <HandleEx3 />
      <hr />
      <h1>종합 실습</h1>
      <Prac3 />
      <br />
      <br /> */}
    </div>
  );
}

export default App;

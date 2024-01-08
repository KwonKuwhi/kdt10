import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import './styles/App.css';
import Ex1 from './Ex1';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <CssModuleComponent type={'new-style'} />
      <hr></hr>

      <h2>SASS</h2>
      <SassComponent />

      <h2>Ex1</h2>
      <Ex1 />
    </div>
  );
}

export default App;

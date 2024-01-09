import CssModuleComponent from './CssModuleComponent';
import SassComponent from './SassComponent';
import './styles/App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import StyledComponent from './StyledComponent';

function App() {
  return (
    <div className="App">
      {/* <h1>React Styling</h1>
      <CssModuleComponent type={'new-style'} />
      <hr></hr>

      <h2>SASS</h2>
      <SassComponent /> */}

      {/* <h2>Ex1</h2>
      <Ex1 />

      // <hr /> */}
      {/* // <h2>Ex2</h2>
      // <Ex2 /> */}

      <h2>Styled-Component</h2>
      <StyledComponent />
    </div>
  );
}

export default App;

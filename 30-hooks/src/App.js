import './App.css';
import UseCallbackEx from './UseCallbackEx';
import UseMemoEx from './UseMemoEx';
import UseCallbackEx2 from './UseCallbackEx2';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={9} />
    </div>
  );
}

export default App;

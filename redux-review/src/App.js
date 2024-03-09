import { Provider } from 'react-redux';
import PostList from './components/PostList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import PostCreateForm from './components/PostCreateForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />}></Route>
          <Route
            path="/create"
            element={<PostCreateForm></PostCreateForm>}
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './feature/counter/Counter';
import User from './feature/user/User';
import Posts from './feature/saga_example/Posts';

function App() {
  return (
    <div className="App">
      <Posts/>
    </div>
  );
}

export default App;

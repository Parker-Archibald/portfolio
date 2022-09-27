import logo from './logo.svg';
import './App.css';
import Nav from './COM/Nav';
import Routing from './COM/Routing';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Nav/>
          <Routing/>
        </Router>
      </div>
    </div>
  );
}

export default App;

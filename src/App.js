import logo from './logo.svg';
import './App.css';
import Navbar1 from './Components/Navbar/Navbar1';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
    <Navbar1 />
    <Navbar />
    <Home />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className='home-background'>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;

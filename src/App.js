import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Appointments from './components/Appointments';
import Cats from './components/Cats';
import About from './components/About';

function App() {
  return (
    <div className='home-background'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Appointments' element={<Appointments />} />
        <Route path='/Cats' element={<Cats />} />
        <Route path='/About' element={<About />} />
        <Route path='/Book-Appointment' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/about' element={<About/>}/>
        <Route path ='/contact' element={<Contact/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

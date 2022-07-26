
import './App.css';
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Skill from './Pages/Skill';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/skill' element={<Skill/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './Notfound/Notfound';
 

function App() {
  return (
    <div className="App">
    <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/friends" element={<Friends/>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
          
        </Routes>
 
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
 
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Post from './components/Posts/Posts';
import FriendDetail from './FriendDetail/FriendDetail';
import Notfound from './Notfound/Notfound';
import PostDetail from './PostDetails/PostDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path='/friend/:frirndId' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/post/' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='/Countries' element={<Countries></Countries>}></Route>

        <Route path='/country/:countryName' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>

      </Routes>

    </div>
  );
}

export default App;

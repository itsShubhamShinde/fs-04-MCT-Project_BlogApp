import { useSelector } from 'react-redux';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import {Route, Routes} from 'react-router-dom'
import ProfilePage from './Components/ProfilePage/ProfilePage';
import ReadBlogPage from './Components/ReadBlogPage/ReadBlogPage';

function App() {
  const {LoggedIn}=useSelector((state)=> state.counter)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={LoggedIn ?  <Home/> :<Login/>}></Route>
        <Route path='/profile' element={LoggedIn ?  <ProfilePage/> :<Login/>}></Route>
        <Route path='/readPage' element={LoggedIn ?  <ReadBlogPage/> :<Login/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;

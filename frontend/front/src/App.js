// import logo from './logo.svg';

import './App.css';
import Loginscreen from './Components/loginscreen';
import Navbar from './Components/navbar';
import {BrowserRouter,Link ,Route, Routes} from 'react-router-dom';
import Homescreen from './Components/homescreen';
import Bookingscreen from './Components/Bookingscreen';
import Register from './Components/registerscreen';
import Frontscreen from './Components/Frontscreen';
import Profile from './Components/profile';
import AdminScreen from './Components/AdminScreen';
import ProfileCard from './Components/profilecard';
import Hotelscreen from './Components/hotelscreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProfileCard/> */}
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Frontscreen/>}/>
      <Route path='/home' exact Component={Homescreen}/>
      <Route path='/book/:roomid/:fromdate/:todate' exact element={<Bookingscreen/>}/>
      <Route path='/Login' exact element={<Loginscreen/>}/>
      <Route path='/Register' exact element={<Register/>}/>
      <Route path='/Profile' exact element={<Profile/>}/>
      <Route path='/Admin' exact element={<AdminScreen/>}/>
      <Route path='/hotels' exact element={<Hotelscreen/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import MyFooter from './components/footer/MyFooter';
import Main from './pages/main/Main';
import Sewing from './pages/sewing/Sewing';
import Production from './pages/production/Production';
import Goods from './pages/goods/Goods';
import Cart from './components/cart/Cart';
import SignIn from './components/signIn/SignIn';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';
import Modal from './units/modal/Modal';
import ProfilePopup from './components/profilePopup/ProfilePopup';

function App() {
  const [openProfile, setOpenProfile] = useState<boolean>(false)
  
  useEffect(() => {
    window.scrollTo(0,0)
}, [])

  return (
    <div className="App">
      <div className='App-bg'>
        <Header openProfile={openProfile} setOpenProfile={setOpenProfile} />
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/goods' element={<Goods />} />
          <Route path='/sewing' element={<Sewing />} />
          <Route path='/production' element={<Production />} />
        </Routes>
        <MyFooter />
        <Cart />
        <Modal active={openProfile} setActive={setOpenProfile}>
          <ProfilePopup />
        </Modal>
      </div>
    </div>
  );
}

export default App;

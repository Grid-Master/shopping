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
import { useState } from 'react';

function App() {
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  return (
    <div className="App">
      <div className='App-bg'>
        <Header openProfile={openProfile} setOpenProfile={setOpenProfile} />
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/signIn' element={<SignIn />} />
          </Route>
          <Route path='/goods' element={<Goods />} />
          <Route path='/sewing' element={<Sewing />} />
          <Route path='/production' element={<Production />} />
        </Routes>
        <MyFooter />
        <Cart />
      </div>
    </div>
  );
}

export default App;

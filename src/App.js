import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Destitution from './Component/Destitution';
import Tours from './Component/Tours';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
import Page from './Component/Page';
import Booking from './Component/Booking';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Protectedroute from './Component/producte/Protectedroute'
import Verify from './Component/Verify';
import Information from './Component/Information';
import Confirmation from './Component/Confirmation';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/Destination'} element={<Destitution />} />
          <Route path={'/Tours'} element={<Tours />} />
          <Route path={'/About'} element={<About />} />
          <Route path={'/Contact'} element={<Contact />} />
          <Route path={`/Booking/:id`} element={<Booking />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'/verify'} element={<Verify />} />
          <Route path={'/login'} element={<Login />} />
          <Route path='/Confirmation' element={<Confirmation />} />
          <Route path={`/Information`} element={<Protectedroute Component={Information} newprice="price" />} />
          <Route path='/*' element={<Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;


// Protectedroute Component={Destitution}
// Protectedroute Component={Tours}
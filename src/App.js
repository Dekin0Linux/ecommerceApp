
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

import { BrowserRouter,Routes,Route ,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';

function App() {
  return (
    <div className='bg-slate-200 w-full'>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productdetails/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Shipping/>}/>
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;

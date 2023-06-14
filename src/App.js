
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';




import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import Category from './pages/Category';
import Comfirmation from './pages/Comfirmation';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className='bg-white w-full'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productdetails/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Shipping/>}/>
          <Route path='/category/:categ' element={<Category/>}/>
          <Route path='/confirm' element={<Comfirmation/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/singup' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

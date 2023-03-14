
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className='bg-slate-200'>
      {/* <Home/> */}
      <ProductDetail/>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from "./../src/Pages/Home.jsx"
import Cart from './Components/Carts/Cart.jsx'
import Navbar from './Components/Navbar.jsx';
import Product from './Components/Products/Product.jsx'
import Footer from './Components/Footer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/home" element={<Home/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path='/product' element={<Product />} />
  </Routes>
  {/* <Home/> */}
  {/* <Product/> */}
  {/* <Cart/> */}
  <Footer />
   </>
  );
}

export default App;

import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Menu from "./component/Menu";
import About from "./component/About";
import '../component/Header.css';
import {Routes,Route,Link} from "react-router-dom"
function Header() {
  return (
      <div class="aa"> 
        <Header />
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/menu"  element={<Menu/>} />
          <Route path="/about"  element={<About/>} />
        </Routes>
        <Footer />
    </div>
  
  );
}

export default Header;
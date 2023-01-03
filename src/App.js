import logo from './logo.svg';
import './App.css';
import TopNav from './Components/TopNav';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <TopNav />
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path='/Home' element={<Home/>} />
         <Route path='/About' element={<About/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;

import './App.css';
import BeParent from './components/BeParent';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Profile from './components/Profile';
import ViewOrphan from './components/ViewOrphan';
import Aboutus from './components/Aboutus';
import Donation from'./components/Donation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

    <div className="App">
    <Navbar/>

    </div>
    <Routes>

    <Route exact path="/ContactUs" element={<ContactUs/>} />
    <Route exact path="/Profile" element={<Profile/>}/>
    <Route exact path="/Logout" element={<BeParent/>}/>
    <Route exact path="/BeParent" element={<BeParent/>}/>
    <Route exact path="/ViewOrphan" element={<ViewOrphan/>}/>
    <Route exact path ="/Aboutus"element={<Aboutus/>}/>
    <Route exact path ="/Donation"element={<Donation/>}/>
    <Route exact path="/" element={<BeParent/>}/>

    </Routes>

    <div className="App">
      <Footer/>
    </div>

  

    
    </Router>

    </>
  );
}

export default App;

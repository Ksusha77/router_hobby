import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import HobbyDetail from './components/HobbyDetail';
import About from './pages/About';
import './App.css'

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <div className="container mt-4">
        <h1 className="text-center mb-4">React Route Hobbies</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/hobbies/:id" element={<HobbyDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
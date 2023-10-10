import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home Content</div>} />
          <Route path="/cart" element={<div>Cart</div>} />
          <Route path="/clothes" element={<div> Clothes </div>} />
          <Route path= "/board" element={<div>Skateboards</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

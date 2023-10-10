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
          <Route path="/cart" element={<div>Cart Content</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

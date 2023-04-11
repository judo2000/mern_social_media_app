import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import Home from './pages/home/Home';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: 0 }}></div>
      <div className="blur" style={{ top: '-36%', left: '-8rem' }}></div>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Auth />} />
          <Route path="/home" element={user ? <Home /> : <Auth />} />
          <Route path="/auth" element={user ? <Home /> : <Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

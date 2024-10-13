import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import User from './components/User/User';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route exact path = "/login" element={<Login />} />
        <Route exact path = "/admin" element={<ProtectedRoute element={<Admin />} />} />
        <Route exact path = "/user/:username" element={<ProtectedRoute element={<User />} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

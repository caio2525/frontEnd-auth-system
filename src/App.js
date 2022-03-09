import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dash from './pages/Dash';

function App() {
  return (
    <Router>
      <div>

        <nav>
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>

          <div>
            <Link to="/login">Login</Link>
          </div>

          <div>
            <Link to="/logout">Logout</Link>
          </div>

          <div>
            <Link to="/dash">Logout</Link>
          </div>

        </nav>

        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Dash/>} />
          <Route path='/dash' element={<Dash/>} />
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>


      </div>
    </Router>
  );
}

export default App;

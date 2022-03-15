import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dash from './pages/Dash';

import axios from "axios"

const api = axios.create({
   withCredentials: true
});

function App() {
  return (
    <Router>
      <div className="container">

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
            <Link to="/dash">Dash</Link>
          </div>

        </nav>

        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Dash/>} />
          <Route path='/dash' element={<Dash/>} />
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>

        <button
          onClick={() => {
            const url = 'http://localhost:5000/set/caio';

            api.get(url)
            .then(resp => {
              console.log('resp', resp)
              return resp.data
            })
            .then(resp => console.log(resp))
            .catch(error => {
              console.log('error', error)
              }
            )
            .finally(() => {
              console.log('finally')
            })
          }}
        > set </button>


        <button
        onClick={() => {
          const url = 'http://localhost:5000/obter';


          //axios.get(url, { withCredentials: true })
          api.get(url)
          .then(resp => {
            console.log('resp', resp)
            return resp.data
          })
          .then(resp => console.log(resp))
          .catch(error => {
            console.log('error', error)
            }
          )
          .finally(() => {
            console.log('finally')
          })
        }}
        > get </button>
      </div>
    </Router>
  );
}

export default App;

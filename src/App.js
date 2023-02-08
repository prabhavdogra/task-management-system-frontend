import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home'
import Completed from './pages/Completed';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import PrivateRoute from './utils/auth';

function App() {
  return (
    <div className="App">
        <Router>
        <div className="main-app">
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/" exact element={
                <PrivateRoute>
                  <Home/>
                </PrivateRoute>
              }>
              </Route>
              <Route path="/completed" element={
                <PrivateRoute>
                  <Completed/>
                </PrivateRoute>
              } />
              <Route path="/settings" element={
                <PrivateRoute>
                  <Settings/>
                </PrivateRoute>
              } />
              <Route path="*" element={<PageNotFound/>} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;

import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home'
import Header from './components/Header';
import Completed from './pages/Completed';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Router>
      <Header/>
      <div className="main-app">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/completed" element={<Completed/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route element={<PageNotFound/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

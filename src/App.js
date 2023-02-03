import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header';
import Completed from './pages/Completed';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="main-app">
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/completed" element={<Completed/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route element={<PageNotFound/>} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;

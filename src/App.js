import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Home from './pages/Home';
import Completed from './pages/Completed';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="main-app">
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/completed" component={Completed} />
              <Route component={PageNotFound} />
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;

import './App.scss';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home'
import Header from './components/Header';
import Completed from './pages/Completed';
import Settings from './pages/Settings';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import { useEffect } from 'react';

function App() {
  const PostRequest = async (token) => {
    const response = await fetch("http://localhost:3000/api/auth/authenticate", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ })
    });
    return response.status === 200 ? true : false;
  }
  const AuthenticateJWTToken = () => {
    const token = localStorage.getItem("token")
    return PostRequest(token)
  }
  const IsLoggedIn = (child) => {
    // if (AuthenticateJWTToken()) {
    //   return child;
    // }
    if( true ) {
      return child;
    }
  }
  // let location = useLocation()
  // useEffect(() => {
  //   console.log(location);
  //   // Google Analytics
  // }, [location]);

  return (
    <div className="App">
        <Router>
        {/* <Header/> */}
        <div className="main-app">
            <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
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

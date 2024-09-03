import './App.css';
import LoginPage from './Components/Pages/loginPage';
import MainPage from './Components/Pages/mainPage';
import RegisterPage from './Components/Pages/registerPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}


export default App;

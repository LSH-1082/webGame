import './App.css';
import LoginPage from './Components/Pages/loginPage';
import RegisterPage from './Components/Pages/registerPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </Router>
  );
}


export default App;

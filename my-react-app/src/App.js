import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homePage/homePage';
import LoginPage from './login/login';
import RegistrationPage from './registration/registration';
import OtpPage from './otp/otp';
import NavBar from './navBar/navBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/registration/otp' element={<OtpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

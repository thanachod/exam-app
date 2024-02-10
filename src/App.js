import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Exam from './pages/Exam';
import Profile from './pages/Profile';
import ViewScores from './pages/ViewScores';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/view-score' element={<ViewScores />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

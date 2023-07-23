import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import {BrowserRouter, Router, Link, Routes, Route} from 'react-router-dom';
import QuizHome from './Quizzes/Quizzes';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="quizzes" element={<QuizHome/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

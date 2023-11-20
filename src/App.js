import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components';
import "./style/quizStyle.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Quiz/> } />
      </Routes>
    </div>
  );
}

export default App;

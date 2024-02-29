import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage';
import AlertPage from './pages/AlertPage';
import CounterPage from './pages/CounterPage';
import CardPage from './pages/CardPage';

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<ButtonPage />} />
            <Route path='/alert' element={<AlertPage />} />
            <Route path='/counter' element={<CounterPage />} />
            <Route path='/card' element={<CardPage />} />
         </Routes>
      </Router>
   );
}

export default App;

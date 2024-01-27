import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage';
import AlertPage from './pages/AlertPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ButtonPage />} />
                <Route path='/alert' element={<AlertPage />} />
            </Routes>
        </Router>
    );
}

export default App;

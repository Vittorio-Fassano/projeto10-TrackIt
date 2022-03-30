import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Habits from './Habits';
import Today from './Today';
import Historic from './Historic';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
            </Routes>

            <Routes>
                <Route path='/habitos' element={<Habits />} />
                <Route path='/hoje' element={<Today />} />
                <Route path='/historico' element={<Historic />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
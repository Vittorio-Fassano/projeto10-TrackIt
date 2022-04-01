import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import UserContext from '../Contexts/userContext';
import Login from './Login';
import Register from './Register';
import Habits from './Habits';
import Today from './Today';
import Historic from './Historic';

function App() {
    const [token, setToken] = useState("");
    const [imgHeader, setImgHeader] = useState("");
    const contextValue = {token, setToken, imgHeader, setImgHeader}

    return (
        <BrowserRouter>
         <UserContext.Provider value={contextValue}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/habitos' element={<Habits />} />
                <Route path='/hoje' element={<Today />} />
                <Route path='/historico' element={<Historic />} />
            </Routes>
         </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
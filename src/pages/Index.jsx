import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './../assets/image/logo.png';
import Banner from './Banner.jsx';
import Sobre from './Sobre.jsx';
import Trabalhos from './Trabalhos.jsx';
import Contato from './Contato.jsx';
import './../assets/css/index.css';

function Index() {
    const [ pagina, setPagina ] = useState("");

    return (
        <div className="index-container">
            <Logo imgLogo={logo} />
            <Menu />
        </div>
    );
}

function Logo({imgLogo}) {
    return (
        <div className="logo">
            <img src={imgLogo} alt="Logo Blake Web Dev" title="Logo Blake Web Dev" />
        </div>
    )
}

function Menu() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/trabalhos" element={<Trabalhos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
        <div className="menu">
            <ul>
                <li>
                    <a href="/" alt="Início" title="Início">Início</a>
                </li>
                <li>
                    <a href="/sobre" alt="Sobre" title="Sobre">Sobre</a>
                </li>
                <li>
                    <a href="/trabalhos" alt="Trabalhos" title="Trabalhos">Trabalhos</a>
                </li>
                <li>
                    <a href="/contato" alt="Contato" title="Contato">Contato</a>
                </li>
            </ul>
        </div>
        </>
    );
}

export { Index };
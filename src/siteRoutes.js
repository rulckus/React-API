import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'
import Soma from './pages/soma'
import Temperatura from './pages/temperatura'
import Dobro from './pages/dobro'
import Tabuada from './pages/tabuada'
import Media from './pages/media'


export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path='/corPrimaria' element = {<CorPrimaria />} />
                <Route path='/frequencia' element = {<Frequencia />} />
                <Route path='/ingresso' element = {<Ingresso />} />
                <Route path='/maiorNumero' element = {<MaiorNumero />} />
                <Route path='/tabuada' element = {<Tabuada />} />
                <Route path='/dobro' element = {<Dobro />} />
                <Route path='/media' element = {<Media />} />
                <Route path='/temperatura' element = {<Temperatura />} />
                <Route path='/soma' element = {<Soma />} />
                <Route path='/maiorNumero' element = {<MaiorNumero />} />
            </Routes>
        </BrowserRouter>
    )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home/index.js'
import Error from './pages/Error';
import Filmes from './pages/Filmes';
import Favoritos from './pages/Favoritos';
function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='*' element={<Error/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path ='/filme/:id' element={<Filmes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;
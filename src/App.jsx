import {Header} from './features/landing/components/Header'
import {Main} from './features/landing/components/Main'
import {Footer} from './features/landing/components/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from './features/auth/components/Login'
import { Recuperar } from './features/auth/components/Recuperar'
import Profile from './features/landing/components/Props'
import {CrearCuenta} from './features/auth/components/CrearCuenta'
import { Rickandmorty } from './features/landing/components/Rickandmorty'
function App(){
    return (
    <>
    <BrowserRouter>
    <Header></Header>

        <Routes>
          <Route path = '/' element = {<Main></Main>}></Route>
          <Route path='/Login' element = {<Login></Login>}></Route>
          <Route path='/CrearCuenta' element={<CrearCuenta></CrearCuenta>}></Route>
          <Route path='/recuperar' element={<Recuperar />} />
          <Route path='/Props' element = {<Profile></Profile>}></Route>
          <Route path='/Rickandmorty' element = {<Rickandmorty></Rickandmorty>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}
  


export default App

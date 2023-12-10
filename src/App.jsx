import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dreamside from './pages/Dreamside/Dreamside'
import NotFound from './pages/NotFound'
import DreamsideBeats from './pages/Dreamside/DreamsideBeats'
import DreamsideKits from './pages/Dreamside/DreamsideKits'
import BeatPage from './components/BeatPage'
import './styles/css/app.css'
import { Login } from './pages/Login'
import Register from './pages/Register'
import { RequireAuth } from './components/hoc/RequireAuth'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>} />
      {/* dreamside */}
      <Route path='/dreamside' element={
        <RequireAuth>
          <Dreamside />
        </RequireAuth>
      } />
      <Route path='/dreamside/beats' element={<DreamsideBeats/>}/>
      <Route path='/dreamside/soundkits' element={<DreamsideKits/>} />
      {/* dreamside beats */}
      <Route path='/dreamside/violence' element={<BeatPage beatname="violence" main_author="@testinexxx" add_author1="@aquamolly" add_author2="@dawgy" add_author3="@iceplugg" price_mp3="500" price_wav="1000" price_exc="2000"/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App

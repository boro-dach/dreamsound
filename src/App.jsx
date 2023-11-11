import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dreamside from './pages/Dreamside/Dreamside'
import NotFound from './pages/NotFound'
import DreamsideAdmin from './pages/Dreamside/DreamsideAdmin'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/dreamside' element={<Dreamside/>} />
      <Route path='/dreamside-admin' element={<DreamsideAdmin/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App

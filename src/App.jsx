import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dreamside from './pages/Dreamside'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/dreamside' element={<Dreamside/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App

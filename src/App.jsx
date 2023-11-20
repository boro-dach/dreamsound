import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Dreamside from './pages/Dreamside/Dreamside'
import NotFound from './pages/NotFound'
import DreamsideBeats from './pages/Dreamside/DreamsideBeats'
import DreamsideKits from './pages/Dreamside/DreamsideKits'

import './styles/css/app.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/dreamside' element={<Dreamside/>} />
      <Route path='/dreamside/beats' element={<DreamsideBeats/>}/>
      <Route path='/dreamside/soundkits' element={<DreamsideKits/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App

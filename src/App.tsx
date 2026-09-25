import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Classes from './pages/Classes'
import Schedule from './pages/Schedule'
import Memberships from './pages/Memberships'
import Coaches from './pages/Coaches'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import './styles/global.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App

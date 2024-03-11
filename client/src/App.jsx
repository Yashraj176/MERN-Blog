import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/Home" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path='/SignIn' element={<SignIn />} />
     <Route path='/SignUp' element={<SignUp />} />
     <Route path='/Dashboard' element={<Dashboard />} />
     <Route path='/Projects' element={<Projects />} />
    
    </Routes>
    </BrowserRouter>
  )
}

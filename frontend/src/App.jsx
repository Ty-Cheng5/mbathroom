import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Frequency from './pages/Frequency'
import FActivity from './pages/FActivity'
import Profile from './pages/Profile'
import WriteReview from './pages/WriteReview'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Each path matches an href in the navbar. */}
        <Route path ="/" element={<Home/>}/>
        <Route path ="/Frequency" element={<Frequency/>}/>
        <Route path ="/FActivity" element={<FActivity/>}/>
        <Route path ="/Profile" element={<Profile/>}/>
        <Route path ="/WriteReview" element={<WriteReview/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App

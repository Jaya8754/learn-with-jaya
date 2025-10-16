import Header from './components/Header/Header'
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage'    
import './App.css'
import Concepts from "./components/pages/Concepts";
import ConceptDetail from "./components/pages/ConceptDetail";
import {Login} from './components/Login/Signup/Login';
import {Signup} from './components/Login/Signup/Signup';  

function App() {

  return (
    <>
      <Header />
      <main className="pt-20"> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/concepts/:slug" element={<ConceptDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  )
}

export default App

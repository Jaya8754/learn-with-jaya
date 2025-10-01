import Header from './components/Header/Header'
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage'    
import './App.css'
import Concepts from "./components/pages/Concepts";
import ConceptDetail from "./components/pages/ConceptDetail";

function App() {

  return (
    <>
      <Header />
      <main className="pt-20"> {/* adjust to navbar height */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/concepts/:slug" element={<ConceptDetail />} />
          {/* other routes */}
        </Routes>
      </main>
    </>
  )
}

export default App

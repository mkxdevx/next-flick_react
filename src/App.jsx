import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/browse" element={<h1>Browse Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

import { Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/browse" element={<h1>Browse Page</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App

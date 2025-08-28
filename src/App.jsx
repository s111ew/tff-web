import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content.jsx'
import Login from './components/pages/Login.jsx'
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('workout');
  const [user, setUser] = useState(null);

  return (
    user ? (
        <>
          <Header />
          <Content user={user} currentPage={currentPage} />
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <>
          <Header />
          <Login setUser={setUser} />
        </>
      )
  )
}

export default App

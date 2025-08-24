import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Workout from './components/pages/Workout'
import Calendar from './components/pages/Calendar'
import Profile from './components/pages/Profile'
import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('workout')
  return (
    <>
      <Header />
      {currentPage === 'workout' ? <Workout /> : ''}
      {currentPage === 'calendar' ? <Calendar /> : ''}
      {currentPage === 'profile' ? <Profile /> : ''}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Workout from './components/pages/Workout'
import Calendar from './components/pages/Calendar'
import Profile from './components/pages/Profile'
import { useState, useEffect } from 'react'
import workouts from "../src/data/workouts.js"

function App() {
  const [currentPage, setCurrentPage] = useState('workout');
  const [currentWorkout, setCurrentWorkout] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [currentDay, setCurrentDay] = useState(null);
  const workoutMap = {
      1: "lowerBody",
      2: "speed",
      4: "upperBody",
      5: "recovery",
    }

  useEffect(() => {
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
  
    let formattedDate = today.toLocaleDateString("en-GB", options);
    formattedDate = formattedDate.replace(",", "");
  
    const dayNumber = ((today.getDay() + 6) % 7);
    const workoutIndex = dayNumber + 1;

    let workout;
    
    workouts.forEach(w => {
      if (w.day === workoutIndex) {
        workout = w
      }
    })
  
    setCurrentDay(dayNumber);
    setCurrentDate(formattedDate);
    setCurrentWorkout(workout);
  }, []);

  return (
    <>
      <Header />
      {currentPage === 'workout' ? <Workout workout={currentWorkout} date={currentDate} day={currentDay} workoutMap={workoutMap} /> : ''}
      {currentPage === 'calendar' ? <Calendar workoutMap={workoutMap} workouts={workouts}/> : ''}
      {currentPage === 'profile' ? <Profile /> : ''}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default App

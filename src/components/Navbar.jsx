import styles from '../styles/Navbar.module.css'
import workoutImg from '../assets/workout_grey.svg'
import workoutImgActive from '../assets/workout_blue.svg'
import calendarImg from '../assets/calendar_grey.svg'
import calendarImgActive from '../assets/calendar_blue.svg'
import profileImg from '../assets/profile_grey.svg'
import profileImgActive from '../assets/profile_blue.svg'

export default function Navbar({currentPage, setCurrentPage}) {
  return(
    <>
      <div className={styles.navbar}>
        <div className={styles.navOptionContainer} onClick={() => setCurrentPage('workout')}>
          <img src={currentPage === 'workout' ? workoutImgActive : workoutImg} alt="Workout" />
          <p className={currentPage === 'workout' ? styles.active : ''}>Workout</p>
        </div>
        <div className={styles.navOptionContainer} onClick={() => setCurrentPage('calendar')}>
          <img src={currentPage === 'calendar' ? calendarImgActive : calendarImg} alt="Calendar" />
          <p className={currentPage === 'calendar' ? styles.active : ''}>Calendar</p>
        </div>
        <div className={styles.navOptionContainer} onClick={() => setCurrentPage('profile')}>
          <img src={currentPage === 'profile' ? profileImgActive : profileImg} alt="Profile" />
          <p className={currentPage === 'profile' ? styles.active : ''}>Profile</p>
        </div>
      </div>
    </>
  )
}
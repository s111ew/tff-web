import styles from '../../styles/Workout.module.css'

export default function Workout() {
  return(
    <>
      <div className={styles.workout}>
        <div className={styles.today}>
          <h4>Friday 1 August 2025</h4>
          <p>Strength & Power (Upper Body Focus)</p>
        </div>
        <div className={styles.todayWorkout}>
          <p>Light Cardio</p>
          <p>Dynamic Stretching</p>
          <p>Bench Press</p>
          <p>Pull-Ups</p>
          <p>Dumbbell Overhead Press</p>
          <p>Barbell Rows</p>
          <p>Power Cleans</p>
          <div className={styles.gradient}></div>
          <p className={styles.start}>Start Session</p>
        </div>
        <div className={styles.week}>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={styles.empty}></div>
          <div className={`${styles.upperBody} ${styles.current}`}>1</div>
          <div className={styles.recovery}>2</div>
          <div className={styles.empty}>3</div>
        </div>
      </div>
    </>
  )
}